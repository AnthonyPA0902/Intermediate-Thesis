using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TravelService.Dtos;
using TravelService.Models;

namespace TravelService.Controllers
{
    [Route("api/tour")]
    [ApiController]
    public class TourDetailsController : ControllerBase
    {
        private readonly TravelServiceManagementDBContext _dbContext;

        public TourDetailsController(TravelServiceManagementDBContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<TourDetailsWithTourInfo>> GetTourDetail(int id)
        {
            var tourDetail = await _dbContext.Tour_Details
                .Include(td => td.Tour_Details_Images)
                .FirstOrDefaultAsync(td => td.tour_id == id);

            var tour = await _dbContext.Tours.FirstOrDefaultAsync(t => t.id == id);

            if (tourDetail == null || tour == null)
            {
                return NotFound();
            }

            var imagesDto = tourDetail.Tour_Details_Images
              .Where(img => img.tour_details_id == tourDetail.id && img.tour_details.tour_id == tour.id)
              .Select(img => new TourDetailsImageDto
              {
                  Id = img.id,
                  TourId = tourDetail.tour_id,
                  TourDetailId = img.tour_details_id,
                  ImageName = img.name,
                  ImageUrl = img.url
              })
              .ToList();

            var tourWithImagesDto = new TourDetailsWithTourInfo
            {
                TourDetail = tourDetail,
                TourInfo = tour,
                Images = imagesDto
            };

            return Ok(tourWithImagesDto);
        }


    }
}

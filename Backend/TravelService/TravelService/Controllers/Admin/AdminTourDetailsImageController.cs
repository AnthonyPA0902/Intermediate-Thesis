using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TravelService.Models;

namespace TravelService.Controllers.Admin
{
	[Route("api/admin/tourdetailsimage")]
	[ApiController]
	public class AdminTourDetailsImageController : ControllerBase
	{
		private readonly TravelServiceManagementDBContext _dbContext;
		public AdminTourDetailsImageController(TravelServiceManagementDBContext dbContext)
		{
			_dbContext = dbContext;
		}


		[HttpGet]
		public async Task<ActionResult<IEnumerable<Tour_Details_Image>>> GetAllTourDetail([FromQuery] int page = 1, [FromQuery] int pageSize = 6)
		{
			var totalItems = await _dbContext.Tour_Details_Images.CountAsync();
			var totalPages = (int)Math.Ceiling(totalItems / (double)pageSize);

			var tourdetailsimage = _dbContext.Tour_Details_Images
								.Skip((page - 1) * pageSize)
								.Take(pageSize)
								.ToList();

			var response = new
			{
				TotalItems = totalItems,
				TotalPages = totalPages,
				CurrentPage = page,
				PageSize = pageSize,
				Results = tourdetailsimage
			};

			return Ok(response);
		}

		[HttpGet("create")]
		public async Task<ActionResult<List<Tour_Detail>>> GetTourDetails()
		{
			var toursdetails = await _dbContext.Tour_Details.ToListAsync();
			return Ok(toursdetails);
		}

		[HttpPost("create")]
		public async Task<ActionResult<Tour_Details_Image>> CreateTourDetailsImage([FromBody] Tour_Details_Image tourdetailimage)
		{
			var newtourdetailimage = new Tour_Details_Image
			{
				name = tourdetailimage.name,
				url = tourdetailimage.url,
				tour_details_id = tourdetailimage.tour_details_id
			};

			_dbContext.Tour_Details_Images.Add(newtourdetailimage);
			_dbContext.SaveChanges();

			return Ok("Add Tour Detail Successfully");
		}

		[HttpGet("edit")]
		public async Task<ActionResult<List<Tour_Detail>>> GetEditTourDetails()
		{
			var toursdetail = await _dbContext.Tour_Details.ToListAsync();
			return Ok(toursdetail);
		}

		[HttpGet("edit/{id}")]
		public async Task<ActionResult<Tour_Details_Image>> GetEditTourDetailsImage(int id)
		{
			var tourdetailsiamge = await _dbContext.Tour_Details_Images.FirstOrDefaultAsync(tourdi => tourdi.id == id);
			return Ok(tourdetailsiamge);
		}

		[HttpPut("edit/{id}")]
		public async Task<ActionResult<Tour_Details_Image>> EditTourDetailsImage([FromBody] Tour_Details_Image tourdetailsiamge, int id)
		{
			var tourdetailsimageedit = await _dbContext.Tour_Details_Images.FindAsync(id);
			tourdetailsimageedit.name = tourdetailsiamge.name;
			tourdetailsimageedit.url = tourdetailsiamge.url;
			tourdetailsimageedit.tour_details_id = tourdetailsiamge.tour_details_id;

			_dbContext.Tour_Details_Images.Update(tourdetailsimageedit);
			_dbContext.SaveChanges();

			return Ok("Edit Tour Details Succesfully");
		}

		[HttpGet("delete/{id}")]
		public async Task<ActionResult<Tour_Details_Image>> GetDeleteTourDetailsImage(int id)
		{
			var tourdetailsimage = await _dbContext.Tour_Details_Images.FirstAsync(tourdi => tourdi.id == id);
			return Ok(tourdetailsimage);
		}

		[HttpDelete("delete/{id}")]
		public async Task<ActionResult<Tour_Details_Image>> DeleteTourDetailsImage(int id)
		{
			var tourdetailsimage = await _dbContext.Tour_Details_Images.FirstAsync(tourdi => tourdi.id == id);

			_dbContext.Tour_Details_Images.Remove(tourdetailsimage);
			_dbContext.SaveChanges();

			return Ok("Delete Tour Successfully");
		}

	}
}

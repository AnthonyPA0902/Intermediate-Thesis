using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TravelService.Dtos;
using TravelService.Models;
using TravelService.Services;

namespace TravelService.Controllers
{
    [Route("api/checkout")]
    [ApiController]
    public class CheckoutController : ControllerBase
    {
        private readonly TravelServiceManagementDBContext _dbContext;

		public CheckoutController(TravelServiceManagementDBContext dbContext)
        {
            _dbContext = dbContext;
		}

        [HttpGet("{id}")]
        public async Task<ActionResult<CheckOutInfoDto>> GetCheckoutInfo(int id)
        {
            var tour = await _dbContext.Tours.Include(t => t.category).FirstOrDefaultAsync(t => t.id == id);
            if (tour == null)
                return NotFound("Tour not found");

            var tourDetail = await _dbContext.Tour_Details.FirstOrDefaultAsync(td => td.tour_id == id);
            if (tourDetail == null)
                return NotFound("Tour detail not found");

            var checkoutInfo = new CheckOutInfoDto
            {
                Tour = tour,
                TourDetail = tourDetail
            };

            return Ok(checkoutInfo);
        }

        [HttpPost("{id}/calculate")]
        public async Task<ActionResult<long>> CalculateTotalPrice(int id, [FromBody] int numberOfPeople)
        {
            var tour = await _dbContext.Tours.SingleOrDefaultAsync(t => t.id == id);
            if (tour == null)
                return NotFound("Tour not found");

            long totalPrice = (long)(tour.price * numberOfPeople);
            return Ok(totalPrice);
        }

        [HttpPost("{id}")]
        public async Task<ActionResult<string>> ProcessCheckout(int id, [FromBody] CheckOutProcessDto checkoutDto)
        {
            var order = new Customer_Order
            {
                date = DateOnly.FromDateTime(DateTime.UtcNow),
                payment = checkoutDto.PaymentMethod,
                total = checkoutDto.Total,
                num_of_people = checkoutDto.NumberOfPeople,
                customer_id = checkoutDto.CustomerId,
                tour_id = id,
            };

            _dbContext.Customer_Orders.Add(order);
            await _dbContext.SaveChangesAsync();

            return Ok("Order placed successfully");
        }
	}
}

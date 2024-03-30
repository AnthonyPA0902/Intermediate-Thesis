using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TravelService.Dtos;
using TravelService.Models;

namespace TravelService.Controllers
{
    [Route("api/userinfo")]
    [ApiController]
    public class UserInfoController : ControllerBase
    {
        private readonly TravelServiceManagementDBContext _dbContext;
        public UserInfoController(TravelServiceManagementDBContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<List<OrderWithTourDto>>> GetOrdersWithTour(int id)
        {
            var orders = await _dbContext.Customer_Orders
                .Include(o => o.tour) 
                .Where(o => o.customer_id == id)
                .ToListAsync();

            if (orders == null || orders.Count == 0)
            {
                return NotFound("No orders found for this customer");
            }

            var ordersWithTour = orders.Select(order => new OrderWithTourDto
            {
                TourInfo = new TourDto
                {
                    Id = order.tour.id,
                    Name = order.tour.name,
                    Price = (decimal)order.tour.price,
                    Duration = order.tour.duration,
                    Picture = order.tour.picture,
                },
                Order = new OrderDto
                {
                    Id = order.id,
                    CustomerId = order.id,
                    TourId = order.id,
                    Date = DateTime.Now,
                    Payment = order.payment,
                    Total = (decimal)order.total,
                    NumberOfPeople = (int)order.num_of_people,  
                }
            }).ToList();

            return Ok(ordersWithTour);
        }
    }
}

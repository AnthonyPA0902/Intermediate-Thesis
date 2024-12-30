using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TravelService.Models;

namespace TravelService.Controllers.Admin
{
	[Route("api/admin/order")]
	[ApiController]
	public class AdminOrderController : ControllerBase
	{
		private readonly TravelServiceManagementDBContext _dbContext;

		public AdminOrderController(TravelServiceManagementDBContext dbContext)
		{
			_dbContext = dbContext;
		}

		[HttpGet]
		public async Task<ActionResult<IEnumerable<Customer_Order>>> GetAllCustomerOrder([FromQuery] int page = 1, [FromQuery] int pageSize = 6)
		{
			var totalItems = await _dbContext.Customer_Orders.CountAsync();
			var totalPages = (int)Math.Ceiling(totalItems / (double)pageSize);

			var orders = _dbContext.Customer_Orders
											.Skip((page-1)*pageSize)
											.Take(pageSize)
											.ToList();
			var response = new
			{
				TotalItems = totalItems,
				TotalPages = totalPages,
				CurrentPage = page,
				PageSize = pageSize,
				Results = orders,
			};

			return Ok(response);
		}

		[HttpGet("delete/{id}")]
		public async Task<ActionResult<Customer_Order>> GetDeleteOrder(int id)
		{
			var order = await _dbContext.Customer_Orders.FirstAsync(o => o.id == id);
			return Ok(order);
		}

		[HttpDelete("delete/{id}")]
		public async Task<ActionResult<Customer_Order>> DeleteOrder(int id)
		{
			var order = await _dbContext.Customer_Orders.FirstAsync(o => o.id == id);
			_dbContext.Customer_Orders.Remove(order);
			_dbContext.SaveChanges();

			return Ok("Delete Order Successful");
		}
	}
}

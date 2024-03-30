using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Identity.Client;
using TravelService.Models;

namespace TravelService.Controllers.Admin
{
	[Route("api/admin/customer")]
	[ApiController]
	public class AdminCustomerController : ControllerBase
	{
		private TravelServiceManagementDBContext _dbContext;

		public AdminCustomerController(TravelServiceManagementDBContext dbContext)
		{
			_dbContext = dbContext;
		}

		[HttpGet]
		public async Task<ActionResult<IEnumerable<Customer>>> GetCustomers()
		{
			var customers = await _dbContext.Customers.ToListAsync();
			return Ok(customers);
		}

		[HttpGet("delete/{id}")]
		public async Task<ActionResult<Customer>> GetDeleteCustomer(int id)
		{
			var customer = await _dbContext.Customers.FirstOrDefaultAsync(c => c.id == id); ;
			return Ok(customer);
		}

		[HttpDelete("delete/{id}")]
		public async Task<ActionResult<Customer>> DeleteCustomer(int id)
		{
			var customer = await _dbContext.Customers.FirstOrDefaultAsync(c => c.id == id);

			_dbContext.Customers.Remove(customer);
			await _dbContext.SaveChangesAsync(); 

			return Ok("Delete Successfully");
		}
	}
}

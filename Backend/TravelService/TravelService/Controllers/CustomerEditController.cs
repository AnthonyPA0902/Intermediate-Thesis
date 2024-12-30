using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TravelService.Models;

namespace TravelService.Controllers
{
	[Route("api/customer/edit")]
	[ApiController]
	public class CustomerEditController : ControllerBase
	{
		private TravelServiceManagementDBContext _dbContext;

		public CustomerEditController(TravelServiceManagementDBContext dbContext)
		{
			_dbContext = dbContext;
		}

		[HttpGet("{id}")]
		public async Task<ActionResult<Customer>> GetEditCustomer(int id)
		{
			var customer = await _dbContext.Customers.FirstOrDefaultAsync(c => c.id == id); ;
			return Ok(customer);
		}

		[HttpPut("{id}")]
		public async Task<ActionResult<Customer>> EditCustomer([FromBody] Customer customer, int id)
		{
			var cus = await _dbContext.Customers.FindAsync(id);
			cus.name = customer.name;
			cus.dob = customer.dob;
			cus.address = customer.address;
			cus.phone = customer.phone;
			cus.email = customer.email;
			cus.username = customer.username;
			cus.password = customer.password;

			_dbContext.Customers.Update(cus);
			_dbContext.SaveChanges();

			return Ok("Edit Successfully");
		}
	}
}

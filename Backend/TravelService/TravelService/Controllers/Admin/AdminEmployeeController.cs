using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Net;
using System.Numerics;
using TravelService.Models;

namespace TravelService.Controllers.Admin
{
	[Route("api/admin/employee")]
	[ApiController]
	public class AdminEmployeeController : ControllerBase
	{
		private TravelServiceManagementDBContext _dbContext;

		public AdminEmployeeController(TravelServiceManagementDBContext dbContext)
		{
			_dbContext = dbContext;
		}

		[HttpGet]
		public async Task<ActionResult<IEnumerable<Employee>>> GetEmployees()
		{
			var employees = await _dbContext.Employees.ToListAsync();
			return Ok(employees);
		}

		[HttpPost("create")]
		public async Task<ActionResult<Employee>> CreateEmployee([FromBody] Employee employee)
		{
			var emp = new Employee
			{
				name = employee.name,
				dob = employee.dob,
				address = employee.address,
				phone = employee.phone,
				email = employee.email,
				username = employee.username,
				password = employee.password,
			};

			_dbContext.Employees.Add(emp);
			_dbContext.SaveChanges();

			return Ok(emp);
		}

		[HttpGet("edit/{id}")]
		public async Task<ActionResult<Employee>> GetEditEmployee(int id)
		{
			var employee = await _dbContext.Employees.FirstOrDefaultAsync(e => e.id == id); ;
			return Ok(employee); 
		}

		[HttpPut("edit/{id}")]
		public async Task<ActionResult<Employee>> EditEmployee([FromBody] Employee employee, int id)
		{
			var emp = await _dbContext.Employees.FindAsync(id);
			emp.name = employee.name;
			emp.dob = employee.dob;
			emp.address = employee.address;
			emp.phone = employee.phone;
			emp.email = employee.email;
			emp.username = employee.username;
			emp.password = employee.password;

			_dbContext.Employees.Update(emp);
			_dbContext.SaveChanges();

			return Ok("Edit Successfully");
		}

		[HttpGet("delete/{id}")]
		public async Task<ActionResult<Employee>> GetDeleteCustomer(int id)
		{
			var employee = await _dbContext.Employees.FirstOrDefaultAsync(e => e.id == id); ;
			return Ok(employee);
		}

		[HttpDelete("delete/{id}")]
		public async Task<ActionResult<Employee>> DeleteCustomer(int id)
		{
			var employee = await _dbContext.Employees.FirstOrDefaultAsync(e => e.id == id);

			_dbContext.Employees.Remove(employee);
			await _dbContext.SaveChangesAsync();

			return Ok("Delete Successfully");
		}
	}
}

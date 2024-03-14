using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TravelService.Models;

namespace TravelService.Controllers
{
    [Route("api")]
    [ApiController]
    public class RegisterController : ControllerBase
    {
        private TravelServiceManagementDBContext DBcontext;
        public RegisterController(TravelServiceManagementDBContext dbcontext)
        {
            DBcontext = dbcontext;
        }

        [HttpPost("register")]
        public IActionResult Register([FromBody]Customer customer)
        {
            if (customer == null)
            {
                return BadRequest("Invalid Registration Data");
            }
            else
            {
                var user = new Customer
                {
                    name = customer.name,
                    dob = customer.dob,
                    address = customer.address,
                    phone = customer.phone,
                    email = customer.email,
                    username = customer.username,
                    password = customer.password,
                };

                DBcontext.Customers.Add(user);
                DBcontext.SaveChanges();

                return Ok(user);
            }
        }

    }
}

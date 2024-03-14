using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using TravelService.Models;

namespace TravelService.Controllers
{
    [Route("api")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private TravelServiceManagementDBContext DBcontext;

        public LoginController(TravelServiceManagementDBContext dbcontext)
        {
            DBcontext = dbcontext;
        }

        [HttpPost("login")]
        public IActionResult Login(Customer customer)
        {
            var user = DBcontext.Customers.SingleOrDefault(u => u.username == customer.username && u.password == customer.password);

            if (user == null)
            {
                return BadRequest("Invalid Info");
            }

            var token = GenerateJwtToken(user);

            return Ok(new {Token = token });
        }

        private string GenerateJwtToken(Customer customer)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            byte[] key = new byte[32];

            using (var rng = RandomNumberGenerator.Create())
            {
                rng.GetBytes(key);
            }

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.Name, customer.username),
                }),
                Expires = DateTime.UtcNow.AddHours(1),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };

            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }

    }
}

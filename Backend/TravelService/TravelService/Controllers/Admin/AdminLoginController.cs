using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;
using TravelService.Models;

namespace TravelService.Controllers.Admin
{
    [Route("api/admin")]
    [ApiController]
    public class AdminLoginController : ControllerBase
    {
        private TravelServiceManagementDBContext _dbContext;
        public AdminLoginController(TravelServiceManagementDBContext dbContext)
        {
            _dbContext = dbContext;
        }

		[HttpPost("login")]
		public IActionResult Login(Employee employee)
		{
			var admin = _dbContext.Employees.SingleOrDefault(a => a.username == employee.username && a.password == employee.password);

			if (admin == null)
			{
				return BadRequest("Invalid username or password");
			}

			var token = GenerateJwtToken(admin);

			return Ok(new { Token = token });
		}

		private string GenerateJwtToken(Employee employee)
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
					new Claim("admin_id", employee.id.ToString()),
					new Claim("admin_name", employee.name.ToString()),
				}),
				Expires = DateTime.UtcNow.AddHours(1),
				SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
			};

			var token = tokenHandler.CreateToken(tokenDescriptor);
			return tokenHandler.WriteToken(token);
		}
	}
}

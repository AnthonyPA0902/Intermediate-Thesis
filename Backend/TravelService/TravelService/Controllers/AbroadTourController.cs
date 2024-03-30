using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TravelService.Models;

namespace TravelService.Controllers
{
	[Route("api/abroadtour")]
	[ApiController]
	public class AbroadTourController : ControllerBase
	{
		private readonly TravelServiceManagementDBContext _dbContext;

		public AbroadTourController(TravelServiceManagementDBContext dbContext)
		{
			_dbContext = dbContext;
		}

		[HttpGet]
		public IActionResult GetTour([FromQuery] int page = 1, [FromQuery] int pageSize = 6)
		{
			var totalItems = _dbContext.Tours.Count(t => t.category_id == 2);
			var totalPages = (int)Math.Ceiling(totalItems / (double)pageSize);

			var tours = _dbContext.Tours
								   .Where(t => t.category_id == 2)
								   .Skip((page - 1) * pageSize)
								   .Take(pageSize)
								   .ToList();

			var response = new
			{
				TotalItems = totalItems,
				TotalPages = totalPages,
				CurrentPage = page,
				PageSize = pageSize,
				Results = tours
			};

			return Ok(response);
		}

		[HttpGet("search")]
		public IActionResult SearchTour([FromQuery] string searchTerm, [FromQuery] int page = 1, [FromQuery] int pageSize = 6)
		{
			var query = _dbContext.Tours.AsQueryable();

			if (!string.IsNullOrWhiteSpace(searchTerm))
			{
				query = query.Where(t => t.name.Contains(searchTerm));
			}

			var totalItems = query.Count();
			var totalPages = (int)Math.Ceiling(totalItems / (double)pageSize);

			var tours = query
						.Skip((page - 1) * pageSize)
						.Take(pageSize)
						.ToList();

			var response = new
			{
				TotalItems = totalItems,
				TotalPages = totalPages,
				CurrentPage = page,
				PageSize = pageSize,
				Results = tours
			};

			return Ok(response);
		}
	}
}

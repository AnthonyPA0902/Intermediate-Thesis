using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TravelService.Models;

namespace TravelService.Controllers.Admin
{
	[Route("api/admin/tour")]
	[ApiController]
	public class AdminTourController : ControllerBase
	{
		private readonly TravelServiceManagementDBContext _dbContext;

		public AdminTourController(TravelServiceManagementDBContext dbContext)
		{
			_dbContext = dbContext;
		}

		[HttpGet]
		public async Task<ActionResult<IEnumerable<Tour>>> GetAllTour([FromQuery] int page = 1, [FromQuery] int pageSize = 6)
		{
			var totalItems = await _dbContext.Tours.CountAsync();
			var totalPages = (int)Math.Ceiling(totalItems / (double)pageSize);

			var tours = _dbContext.Tours
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

		[HttpGet("create")]
		public async Task<ActionResult<List<Category>>> GetCategories()
		{
			var categories = await _dbContext.Categories.ToListAsync();
			return Ok(categories);
		}


		[HttpPost("create")]
		public async Task<ActionResult<Tour>> CreateTour([FromBody] Tour tour)
		{
			var newtour = new Tour
			{
				name = tour.name,
				price = tour.price,
				duration = tour.duration,
				picture = tour.picture,
				category_id = tour.category_id,
			};

			_dbContext.Tours.Add(newtour);
			_dbContext.SaveChanges();

			return Ok("Add Tour Successfully");
		}


		[HttpGet("edit")]
		public async Task<ActionResult<List<Category>>> GetEditCategory()
		{
			var categories = await _dbContext.Categories.ToListAsync();
			return Ok(categories);
		}

		[HttpGet("edit/{id}")]
		public async Task<ActionResult<Tour>> GetEditTour(int id)
		{
			var tour = await _dbContext.Tours.FirstOrDefaultAsync(tour => tour.id == id);
			return Ok(tour);
		}

		[HttpPut("edit/{id}")]
		public async Task<ActionResult<Tour>> EditTour([FromBody] Tour tour, int id)
		{
			var touredit = await _dbContext.Tours.FindAsync(id);
			touredit.name = tour.name;
			touredit.price = tour.price;
			touredit.duration = tour.duration;
			touredit.picture = tour.picture;
			touredit.category_id = tour.category_id;

			_dbContext.Tours.Update(touredit);
			_dbContext.SaveChanges();

			return Ok("Edit Tour Succesfully");
		}

		[HttpGet("delete/{id}")]
		public async Task<ActionResult<Tour>> GetDeleteTour(int id)
		{
			var tour = await _dbContext.Tours.FirstAsync(tour => tour.id == id);
			return Ok(tour);
		}

		[HttpDelete("delete/{id}")]
		public async Task<ActionResult<Tour>> DeleteTour(int id)
		{
			var tour = await _dbContext.Tours.FirstAsync(tour => tour.id == id);

			_dbContext.Tours.Remove(tour);
			_dbContext.SaveChanges();

			return Ok("Delete Tour Successfully");
		}
	}
}

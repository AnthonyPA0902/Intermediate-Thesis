using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TravelService.Models;

namespace TravelService.Controllers.Admin
{
	[Route("api/admin/tourdetails")]
	[ApiController]
	public class AdminTourDetailsController : ControllerBase
	{
		private readonly TravelServiceManagementDBContext _dbContext;
		public AdminTourDetailsController(TravelServiceManagementDBContext dbContext)
		{
			_dbContext = dbContext;
		}

		[HttpGet]
		public async Task<ActionResult<IEnumerable<Tour_Detail>>> GetAllTourDetail([FromQuery] int page = 1, [FromQuery] int pageSize = 6)
		{
			var totalItems = await _dbContext.Tour_Details.CountAsync();
			var totalPages = (int)Math.Ceiling(totalItems / (double)pageSize);

			var tourdetails = _dbContext.Tour_Details
								.Skip((page - 1) * pageSize)
								.Take(pageSize)
								.ToList();

			var response = new
			{
				TotalItems = totalItems,
				TotalPages = totalPages,
				CurrentPage = page,
				PageSize = pageSize,
				Results = tourdetails
			};

			return Ok(response);
		}

		[HttpGet("create")]
		public async Task<ActionResult<List<Tour>>> GetTour()
		{
			var tours = await _dbContext.Tours.ToListAsync();
			return Ok(tours);
		}


		[HttpPost("create")]
		public async Task<ActionResult<Tour_Detail>> CreateTourDetails([FromBody] Tour_Detail tourdetail)
		{
			var newtourdetail = new Tour_Detail
			{
				code = tourdetail.code,
				begin_date = tourdetail.begin_date,
				end_date = tourdetail.end_date,
				transport = tourdetail.transport,
				start_destination = tourdetail.start_destination,
				tour_id = tourdetail.tour_id
			};

			_dbContext.Tour_Details.Add(newtourdetail);
			_dbContext.SaveChanges();

			return Ok("Add Tour Detail Successfully");
		}

		[HttpGet("edit")]
		public async Task<ActionResult<List<Tour>>> GetEditTour()
		{
			var tours = await _dbContext.Tours.ToListAsync();
			return Ok(tours);
		}

		[HttpGet("edit/{id}")]
		public async Task<ActionResult<Tour_Detail>> GetEditTour(int id)
		{
			var tourdetail = await _dbContext.Tour_Details.FirstOrDefaultAsync(tourd => tourd.id == id);
			return Ok(tourdetail);
		}

		[HttpPut("edit/{id}")]
		public async Task<ActionResult<Tour_Detail>> EditTourDetails([FromBody] Tour_Detail tourdetail, int id)
		{
			var tourdetailedit = await _dbContext.Tour_Details.FindAsync(id);
			tourdetailedit.code = tourdetail.code;
			tourdetailedit.begin_date = tourdetail.begin_date;
			tourdetailedit.end_date = tourdetail.end_date;
			tourdetailedit.transport = tourdetail.transport;
			tourdetailedit.start_destination = tourdetail.start_destination;
			tourdetailedit.tour_id = tourdetail.tour_id;

			_dbContext.Tour_Details.Update(tourdetailedit);
			_dbContext.SaveChanges();

			return Ok("Edit Tour Details Succesfully");
		}

		[HttpGet("delete/{id}")]
		public async Task<ActionResult<Tour_Detail>> GetDeleteTourDetails(int id)
		{
			var tourdetails = await _dbContext.Tour_Details.FirstAsync(tourd => tourd.id == id);
			return Ok(tourdetails);
		}

		[HttpDelete("delete/{id}")]
		public async Task<ActionResult<Tour_Detail>> DeleteTourDetails(int id)
		{
			var tourdetails = await _dbContext.Tour_Details.FirstAsync(tourd => tourd.id == id);

			_dbContext.Tour_Details.Remove(tourdetails);
			_dbContext.SaveChanges();

			return Ok("Delete Tour Successfully");
		}
	}
}

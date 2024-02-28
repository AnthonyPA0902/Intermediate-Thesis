using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TravelService.Models;

namespace TravelService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PlacesController : ControllerBase
    {
        private TravelServiceManagementDBContext _placesContext;

        public PlacesController(TravelServiceManagementDBContext placesContext)
        {
            _placesContext = placesContext;
        }

        //GET API
        [HttpGet]
        public async Task<ActionResult> Get()
        {
            var places = await _placesContext.PLACEs.ToListAsync();
            if (places == null)
            {
                return NotFound();
            }

            return Ok(places);
        }
    }
}

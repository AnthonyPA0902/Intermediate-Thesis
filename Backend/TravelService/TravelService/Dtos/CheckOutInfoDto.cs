using TravelService.Models;

namespace TravelService.Dtos
{
    public class CheckOutInfoDto
    {
        public Tour Tour { get; set; }  

        public Tour_Detail TourDetail { get; set; }
    }
}

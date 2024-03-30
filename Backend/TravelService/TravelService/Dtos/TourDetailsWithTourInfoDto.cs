using TravelService.Models;

namespace TravelService.Dtos
{
    public class TourDetailsWithTourInfoDto
    {
        public Tour_Detail TourDetail { get; set; }
        public Tour TourInfo { get; set; }
        public List<TourDetailsImageDto> Images { get; set; }

    }
}

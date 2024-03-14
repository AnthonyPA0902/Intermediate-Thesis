using TravelService.Models;

namespace TravelService.Dtos
{
    public class TourDetailsWithTourInfo
    {
        public Tour_Detail TourDetail { get; set; }
        public Tour TourInfo { get; set; }
        public List<TourDetailsImageDto> Images { get; set; }

    }
}

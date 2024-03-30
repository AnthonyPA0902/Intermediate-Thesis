using TravelService.Models;

namespace TravelService.Dtos
{
    public class OrderWithTourDto
    {
        public TourDto TourInfo { get; set; }
        public OrderDto Order { get; set; }
    }
}

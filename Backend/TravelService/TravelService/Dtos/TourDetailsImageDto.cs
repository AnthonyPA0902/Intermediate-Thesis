namespace TravelService.Dtos
{
    public class TourDetailsImageDto
    {
        public int Id { get; set; }
        public int TourId { get; set; }
        public int TourDetailId { get; set; }
        public string ImageName { get; set; }
        public string ImageUrl { get; set; }
    }
}

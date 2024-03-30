namespace TravelService.Dtos
{
    public class OrderDto
    {
        public int Id { get; set; }
        public int CustomerId { get; set; }
        public int TourId { get; set; }
        public DateTime Date { get; set; }
        public string Payment { get; set; }
        public decimal Total { get; set; }
        public int NumberOfPeople { get; set; }
    }
}

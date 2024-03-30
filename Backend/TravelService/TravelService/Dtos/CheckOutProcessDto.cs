namespace TravelService.Dtos
{
    public class CheckOutProcessDto
    {
        public string PaymentMethod { get; set; }
        public int NumberOfPeople { get; set; }
        public int CustomerId { get; set; }
        public long Total { get; set; }
    }
}


using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Net.Mail;
using System.Net;
using TravelService.Dtos;
using TravelService.Models;
using TravelService.Services;
using System.Security.Claims;

namespace TravelService.Controllers
{
    [Route("api/checkout")]
    [ApiController]
    public class CheckoutController : ControllerBase
    {
		private readonly TravelServiceManagementDBContext _dbContext;
		private readonly IVnPayService _vnPayService;

		public CheckoutController(TravelServiceManagementDBContext dbContext, IVnPayService vnPayService)
        {
            _dbContext = dbContext;
			_vnPayService = vnPayService;
		}

        [HttpGet("{id}")]
        public async Task<ActionResult<CheckOutInfoDto>> GetCheckoutInfo(int id)
        {
            var tour = await _dbContext.Tours.Include(t => t.category).FirstOrDefaultAsync(t => t.id == id);
            if (tour == null)
                return NotFound("Tour not found");

            var tourDetail = await _dbContext.Tour_Details.FirstOrDefaultAsync(td => td.tour_id == id);
            if (tourDetail == null)
                return NotFound("Tour detail not found");

            var checkoutInfo = new CheckOutInfoDto
            {
                Tour = tour,
                TourDetail = tourDetail
            };

            return Ok(checkoutInfo);
        }

        [HttpPost("{id}/calculate")]
        public async Task<ActionResult<long>> CalculateTotalPrice(int id, [FromBody] int numberOfPeople)
        {
            var tour = await _dbContext.Tours.SingleOrDefaultAsync(t => t.id == id);
            if (tour == null)
                return NotFound("Tour not found");

            long totalPrice = (long)(tour.price * numberOfPeople);
            return Ok(totalPrice);
        }

        [HttpPost("{id}")]
        public async Task<ActionResult<string>> ProcessCheckout(int id, [FromBody] CheckOutProcessDto checkoutDto)
        {
            var order = new Customer_Order
            {
                date = DateOnly.FromDateTime(DateTime.UtcNow),
                payment = checkoutDto.PaymentMethod,
                total = checkoutDto.Total,
                num_of_people = checkoutDto.NumberOfPeople,
                customer_id = checkoutDto.CustomerId,
				tour_id = id,
            };

            _dbContext.Customer_Orders.Add(order);
            await _dbContext.SaveChangesAsync();

			// Send email
			var customer = await _dbContext.Customers.FirstOrDefaultAsync(c => c.id == checkoutDto.CustomerId);
			try
			{
				var message = new MailMessage();
				message.From = new MailAddress("anb2014637@student.ctu.edu.vn");
				message.To.Add(customer.email);
				message.Subject = "Xác Nhận Đơn Hàng";
				message.Body = $"Đơn đặt hàng chuyến đi du lịch {order.num_of_people} người vào ngày {order.date} " +
                    $"đã được đặt hàng thành công.\n" +
				   $"Xin cảm ơn bạn đã sử dụng dịch vụ của chúng tôi !!!";

				using (var client = new SmtpClient("smtp.gmail.com"))
				{
					client.Port = 587;
					client.Credentials = new NetworkCredential("anb2014637@student.ctu.edu.vn", "NYS3Lv@C");
					client.EnableSsl = true;
					await client.SendMailAsync(message);
				}
			}
			catch (Exception ex)
			{
				Console.WriteLine(ex.Message);
				return StatusCode(500, "Failed to send email");
			}

			return Ok("Order placed successfully");
        }

		[HttpGet("vnpay")]
		public async Task<ActionResult<string>> ProcessCheckoutVNPay()
		{
			var vnPayModel = new VnPaymentRequestModel
			{
				Amount = 6000000,
				CreatedDate = DateTime.Now,
				OrderId = 1,
			};

			return _vnPayService.CreatePaymentUrl(HttpContext, vnPayModel);
		}

		[HttpGet("payment")]
		public async Task<ActionResult<string>> PaymentCallBack()
		{
			var collections = HttpContext.Request.Query;

			var response = _vnPayService.PaymentExecute(collections);

			if (response == null || response.VnPayResponseCode != "00")
			{
				return BadRequest("Payment failed");
			}

			return Redirect("http://localhost:3000");
		}
	}
}

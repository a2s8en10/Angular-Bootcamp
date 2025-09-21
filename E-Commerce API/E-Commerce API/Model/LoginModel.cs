using System.ComponentModel.DataAnnotations;

namespace E_Commerce_API.Model
{
    public class LoginModel
    {
        [Required, EmailAddress]
        public string Email { get; set; }

        [Required]
        public string Password { get; set; }
    }
}

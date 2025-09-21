using Microsoft.AspNetCore.Identity;

namespace E_Commerce_API.Model
{
    public class ECommUser : IdentityUser
    {
        public string FullName { get; set; }
    }
}

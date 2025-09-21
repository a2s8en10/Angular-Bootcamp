using E_Commerce_API.Data;
using E_Commerce_API.Model;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using System.Threading.Tasks;

namespace E_Commerce_API.Repository
{
    public class RegisterRepository : IRegisterRepository
    {
        private readonly IConfiguration _configuration;
        private readonly UserManager<ECommUser> _userManager;
        public RegisterRepository(IConfiguration configuration, UserManager<ECommUser> userManager)
        {
            _configuration = configuration;
            _userManager = userManager;
        }

        public async Task<IdentityResult> SignUpAsync(SignUpModel signUpModel)
        {
            var user = new ECommUser()
            {
                FullName = signUpModel.FullName,
                UserName = signUpModel.Email,
                Email = signUpModel.Email
            };

            return await _userManager.CreateAsync(user, signUpModel.Password);

        }
    }
}

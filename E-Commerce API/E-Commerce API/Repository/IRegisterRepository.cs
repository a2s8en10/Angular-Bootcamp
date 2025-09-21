using E_Commerce_API.Model;
using Microsoft.AspNetCore.Identity;
using System.Threading.Tasks;

namespace E_Commerce_API.Repository
{
    public interface IRegisterRepository
    {
        Task<IdentityResult> SignUpAsync(SignUpModel signUpModel);
    }
}

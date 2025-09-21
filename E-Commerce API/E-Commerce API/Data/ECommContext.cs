using E_Commerce_API.Model;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.SignalR;
using Microsoft.EntityFrameworkCore;

namespace E_Commerce_API.Data
{
    public class ECommContext : IdentityDbContext<ECommUser>
    {
        public ECommContext(DbContextOptions<ECommContext> options) : base(options) { }

        public DbSet<ECommUser> CommUsers { get; set; }
    }
}

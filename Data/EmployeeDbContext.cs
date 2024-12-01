using EmployeeEF.Models;
using Microsoft.EntityFrameworkCore;

namespace EmployeeEF.Data
{
    public class EmployeeDbContext : DbContext
    {
        public EmployeeDbContext(DbContextOptions<EmployeeDbContext> options) : base(options) { }

        public DbSet<Employee> Employees { get; set; }
    }
}

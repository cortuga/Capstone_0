using System;
using System.Text.RegularExpressions;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using Capstone_0.Models;

namespace capstone_0
{
  public partial class DatabaseContext : DbContext
  {
    public DatabaseContext()
    {
    }

    public DatabaseContext(DbContextOptions<DatabaseContext> options)
        : base(options)
    {
    }

    private string ConvertPostConnectionToConnectionString(string connection)
    {
      var _connection = connection.Replace("postgres://", String.Empty);
      var output = Regex.Split(_connection, ":|@|/");
      return $"server={output[2]};database={output[4]};User Id={output[0]}; password={output[1]}; port={output[3]}";
    }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
      if (!optionsBuilder.IsConfigured)
      {
        var envConn = Environment.GetEnvironmentVariable("DATABASE_URL");
#warning Be sure to update to your correct connection string to the point to the correct database
        var conn = "server=localhost;database=Capstone_DB;User Id=postgres;password=element0";
        if (envConn != null)
        {
          conn = ConvertPostConnectionToConnectionString(envConn);
        }
        optionsBuilder.UseNpgsql(conn);
      }
    }



    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
      modelBuilder.HasAnnotation("ProductVersion", "2.2.0-rtm-35687");
    }



    public DbSet<Capstone_0.Models.TodoModel> TodoModel { get; set; }



    public DbSet<Capstone_0.Models.UserProfileModel> UserProfileModel { get; set; }



    public DbSet<Capstone_0.Models.LongTermGoalsModel> LongTermGoalsModel { get; set; }



    public DbSet<Capstone_0.Models.JournalModel> JournalModel { get; set; }
  }
}

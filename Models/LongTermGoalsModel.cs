using System;

namespace Capstone_0.Models
{
  public class LongTermGoalsModel
  {
    public string OneYearGoals { get; set; }
    public string ThreeYearGoals { get; set; }
    public string TenYearGoals { get; set; }
    public string LongTermGoals { get; set; }
    // public string MyHighestSelfICanImagineIs { get; set; }
    public int ID { get; set; }
    public int UserID { get; set; }
    public DateTime AccountCreated { get; set; } = DateTime.Now;

    // add Long term goal questions here too
  }
}
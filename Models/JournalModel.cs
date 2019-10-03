using System;

namespace Capstone_0.Models
{
  public class JournalModel
  {
    //   Still need to add individual questions for Journal. See HPP. 
    public string JournalEntry { get; set; }
    public int ID { get; set; }
    public int UserID { get; set; }
    public DateTime AccountCreated { get; set; } = DateTime.Now;
  }
}
using System;

namespace Capstone_0.Models
{
  public class TodoModel
  {
    public IEnumerable
    // what data type would be a to do list? array / list? What is the common ansester for these types? IEnumerable?
    public int ID { get; set; }
    public int UserID { get; set; }
    public DateTime AccountCreated { get; set; } = DateTime.Now;
  }
}
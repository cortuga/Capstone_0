using System;

namespace Capstone_0.Models
{
  public class TodoModel
  {

    // what data type would be a to do list? array / list? What is the common ansester for these types? IEnumerable?
    public string Text { get; set; }
    public int ID { get; set; }
    // public int UserProfileModelID { get; set; }
    // public UserProfileModel UserProfileModel { get; set; }


    public DateTime AccountCreated { get; set; } = DateTime.Now;
  }
}

// make additional col to link todos to journals
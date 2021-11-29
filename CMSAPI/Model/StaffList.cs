using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CMSAPI.Model
{
  public class StaffList
  {
    public string StaffName { get; set; }
    public string RoleName { get; set; }
    public string Gender { get; set; }
    public DateTime DateOfBirth { get; set; }
    public string Address { get; set; }
    public DateTime DateOfJoin { get; set; }
    public string Mobile { get; set; }
    public int? Experience { get; set; }
    public string Email { get; set; }
    public bool? Isactive { get; set; }
  }
}

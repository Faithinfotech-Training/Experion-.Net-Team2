using CMSAPI.Model;
using CMSAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CMSAPI.Repository
{
  public interface IStaffRepository
  {
    Task<List<Staff>> GetStaffs();
    Task<int> AddStaff(Staff staff);
    Task UpdateStaff(Staff staff);
    Task<Staff> DeleteStaff(int id);
    Task<StaffList> GetStaffById(int id);
    Task<StaffList> UpdateIsActive(int id);
    }
}

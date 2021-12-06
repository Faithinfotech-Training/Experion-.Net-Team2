using CMSAPI.Models;
using CMSAPI.View_Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CMSAPI.Repository
{
  public interface ILabTechnician
  {
    //Get all technicians
    Task<List<Labtechnician>> GetLabTechnician();

        //Get technician by Id
        Task<List<Labtechnician>> GetLabTechnicianById(int technicianid);

        //Add technician
        Task<int> AddLabTechnician(Labtechnician technician);

    //Update technician
    Task UpdateTechnician(Labtechnician technician);

        Task<List<TechnicianViewModel>> GetCustomLabTechnician(int id);

        Task<List<Labtechnician>> GetLabTechnisianByStaffId(int id);
    }
}

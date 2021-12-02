using CMSAPI.Models;
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
  }
}

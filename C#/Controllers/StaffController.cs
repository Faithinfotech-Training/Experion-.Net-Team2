using CMSAPI.Models;
using CMSAPI.Repository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CMSAPI.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class StaffController : ControllerBase
  {
    IStaffRepository StaffRepository;
    public StaffController(IStaffRepository _s)
    {
      StaffRepository = _s;
    }

    #region GetStaffs()
    [HttpGet]
    [Route("GetStaffs")]
    public async Task<IActionResult> GetStaffs()
    {
      try
      {
        var staffs = await StaffRepository.GetStaffs();
        if (staffs == null)
        {
          return NotFound();
        }
        return Ok(staffs);
      }
      catch (Exception)
      {
        return BadRequest();
      }
    }
    #endregion

    #region AddStaff()
    [HttpPost]
    [Route("AddStaff")]
    public async Task<IActionResult> AddStaff([FromBody] Staff model)
    {
      if (ModelState.IsValid)
      {
        try
        {
          var StaffId = await StaffRepository.AddStaff(model);
          if (StaffId > 0)
          {
            return Ok(StaffId);
          }
          else
          {
            return NotFound();
          }
        }
        catch (Exception)
        {
          return BadRequest();
        }
      }
      return BadRequest();
    }
    #endregion

    #region UpdateStaff()
    [HttpPut]
    [Route("UpdateStaff")]
    public async Task<IActionResult> UpdateStaff([FromBody] Staff model)
    {
      if (ModelState.IsValid)
      {
        try
        {
          await StaffRepository.UpdateStaff(model);
          return Ok();
        }
        catch (Exception)
        {
          return BadRequest();
        }

      }
      return BadRequest();
    }
    #endregion

    #region DeleteStaff()
    [HttpDelete]
    [Route("DeleteStaff")]
    public async Task<IActionResult> DeleteStaff(int id)
    {
      try
      {
        var staff = await StaffRepository.DeleteStaff(id);
        if (staff == null)
        {
          return NotFound();
        }
        return Ok(staff);
      }
      catch (Exception)
      {
        return BadRequest();
      }
    }
    #endregion

    #region GetStaffById
    [HttpGet]
    [Route("GetStaffById")]
    public async Task<IActionResult> GetStaffById(int id)
    {
      try
      {
        var staff = await StaffRepository.GetStaffById(id);
        if (staff == null)
        {
          return NotFound();
        }
        return Ok(staff);
      }
      catch (Exception)
      {
        return BadRequest();
      }
    }
        #endregion

        #region Update Is Active
        [HttpGet]
        [Route("UpdateIsActive")]
        public async Task<IActionResult> UpdateIsActive(int id)
        {
            try
            {
                var staff = await StaffRepository.UpdateIsActive(id);
                if (staff == null)
                {
                    return NotFound();
                }
                return Ok(staff);
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }
        #endregion

    }
}

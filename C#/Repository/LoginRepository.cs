using CMSAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CMSAPI.Repository
{
  
  public class LoginRepository : ILoginRepository
  {
    ClinicManagementDBContext db;

    public LoginRepository(ClinicManagementDBContext _db)
    {
      db = _db;
    }

        #region getLogin
        public async Task<Login> GetLoginById(int id)
        {
            if (db != null)
            {
                //LINQ
                //join post and category
                return await (from l in db.Login
                              from r in db.Roles
                              where l.Loginid == id && l.Roleid == r.RoleId
                              select new Login
                              {
                                  Loginid = l.Loginid,
                                  Username=l.Username,
                                  Password=l.Password,
                                  Roleid=r.RoleId

                              }).FirstOrDefaultAsync();
            }
            return null;
        }
        #endregion

        #region AddLogin
        public async Task<int> AddLogin(Login login)
        {
            if (db != null)
            {
                await db.Login.AddAsync(login);
                await db.SaveChangesAsync();
                return login.Loginid;
            }
            return 0;
        }

        
        #endregion

        #region getRole
        public async Task<List<Roles>> GetRole()
        {
            if (db != null)
            {
                return await db.Roles.ToListAsync();
            }
            return null;
        }
        #endregion

        #region Get Users
        public Login GetUser(Login user)
    {
      if (db != null)
      {
        Login dbUser = db.Login.FirstOrDefault(em => em.Username == user.Username && em.Password == user.Password);
        if (dbUser != null)
        {
          return dbUser;
        }
      }
      return null;
    }

    #endregion

    #region GetUserByPassword
    public async Task<ActionResult<Login>> GetUserByPassword(string un, string pwd)
    {
      if (db != null)
      {
        Login user = await db.Login.FirstOrDefaultAsync(em => em.Username == un && em.Password == pwd);
        return user;
      }
      return null;
    }
    #endregion

    #region Validate User
    public Login validateUser(string Username, string Password)
    {
      if (db != null)
      {
        Login dbuser = db.Login.FirstOrDefault(em => em.Username == Username && em.Password == Password);
        if (dbuser != null)
        {
          return dbuser;
        }
      }
      return null;
    }

    #endregion




  }
}

using System;
using System.Collections.Generic;

namespace CMSAPI.Models
{
    public partial class Login
    {
        public int Loginid { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public int Roleid { get; set; }

        public virtual Staff LoginNavigation { get; set; }
        public virtual Roles Role { get; set; }
    }
}

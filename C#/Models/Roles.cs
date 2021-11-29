using System;
using System.Collections.Generic;

namespace CMSAPI.Models
{
    public partial class Roles
    {
        public Roles()
        {
            Login = new HashSet<Login>();
        }

        public int RoleId { get; set; }
        public string RoleName { get; set; }

        public virtual ICollection<Login> Login { get; set; }
    }
}

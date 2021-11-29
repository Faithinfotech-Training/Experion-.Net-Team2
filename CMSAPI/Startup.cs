using CMSAPI.Models;
using CMSAPI.Repository;
using CMSAPI.Models;
using CMSAPI.Repository;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using CMSAPI.Models;
using CMSAPI.Repository;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CMSAPI
{

    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers();
      //add dependency injection for DemoBlogDBContext
      services.AddDbContext<ClinicManagementDBContext>(item =>
      item.UseSqlServer(Configuration.GetConnectionString("ClinicManagementDBConnection")));

      //add dependency injection for PostRepository
      services.AddScoped<IDoctorRepository, DoctorRepository>();
    }

            //add dependency injection for ClinicManagementDBContext


            services.AddDbContext<ClinicManagementDBContext>(item =>
            item.UseSqlServer(Configuration.GetConnectionString("CmsCon"))
            );

            //add dependency injection for EmployeeRepository
            services.AddScoped<ILabReport, LabReport>();
            services.AddScoped<ILabTechnician, LabTechnician>();
            services.AddScoped<ITestDetails, TestDetails>();
            services.AddScoped<ITests, Tests>();
    


    }
        
            services.AddDbContext<ClinicManagementDBContext>(item =>item.UseSqlServer(Configuration.GetConnectionString("ClinicConnection")));


            services.AddScoped<IDoctorManagePatient, DoctorManagePatient>();
    }

    // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
    public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}

using CMSAPI.Models;
using CMSAPI.Repository;
using Microsoft.AspNetCore.Authentication.JwtBearer;
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
using Newtonsoft.Json.Serialization;
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
      //add dependency injection for Clinic
            services.AddDbContext<ClinicManagementDBContext>(item => item.UseSqlServer(Configuration.GetConnectionString("ClinicManagementConnection")));

            services.AddScoped<ILoginRepository, LoginRepository>();
            services.AddScoped<IStaffRepository, StaffRepository>();

            services.AddControllers().AddNewtonsoftJson(
                      options => {
                      options.SerializerSettings.ContractResolver = new DefaultContractResolver();
                      options.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore;
                      });
            services.AddCors();
      
            //add dependency injection for PostRepository
            services.AddScoped<IDoctorRepository, DoctorRepository>();
    
            //add dependency injection
            services.AddScoped<ILabReport, LabReport>();
            services.AddScoped<ILabTechnician, LabTechnician>();
            services.AddScoped<ITestDetails, TestDetails>();
            services.AddScoped<ITests, Tests>();
            services.AddScoped<IDoctorManagePatient, DoctorManagePatient>();

            //add dependency injection for EmployeeRepository

              

            services.AddScoped<IDoctorManagePatient, DoctorManagePatient>();
            services.AddScoped<ILabReport, LabReport>();
            services.AddScoped<ILabTechnician, LabTechnician>();
            services.AddScoped<ITestDetails, TestDetails>();
            services.AddScoped<ITests, Tests>();


      //register a JWT authentication schema
            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
            .AddJwtBearer(options =>
            {
               options.TokenValidationParameters = new TokenValidationParameters
                {
                  //configure the authentication schema eith JWT bearer options
                  ValidateIssuer = true,
                  ValidateAudience = true,
                  ValidateLifetime = true,
                  ValidateIssuerSigningKey = true,
                  ValidIssuer = Configuration["Jwt:Issuer"],
                  ValidAudience = Configuration["Jwt:Issuer"],
                  IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Configuration["Jwt:Key"]))
              };
            });

            services.AddMvc();
    }

            
    public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            app.UseCors(options =>
            options.WithOrigins("http://localhost:4200")
            .AllowAnyMethod()
            .AllowAnyHeader()
            .AllowCredentials()
            );

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            //configure authentication: make the authentication service available to the application
            app.UseAuthentication();

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

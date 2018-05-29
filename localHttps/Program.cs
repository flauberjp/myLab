using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Sockets;
using System.Security.Cryptography.X509Certificates;
using System.Threading.Tasks;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http.Features;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;

namespace localHttps
{
    public class Program
    {

        public static void Main(string[] args)
        {
            var config = new ConfigurationBuilder()
               .SetBasePath(Directory.GetCurrentDirectory())
               .AddEnvironmentVariables()
               .AddJsonFile("certificate.json", optional: true, reloadOnChange: true)
               .AddJsonFile($"certificate.{Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT")}.json", optional: true, reloadOnChange: true)
               .Build();

            var certificateSettings = config.GetSection("certificateSettings");
            string certificateFileName = certificateSettings.GetValue<string>("filename");
            string certificatePassword = certificateSettings.GetValue<string>("password");

            var certificate = new X509Certificate2(certificateFileName, certificatePassword);

            var host = new WebHostBuilder()
               .UseKestrel(
                   options =>
                   {
                       options.AddServerHeader = false;
                       options.Listen(IPAddress.Parse(GetLocalIPAddress()), 44321, listenOptions =>
                       {
                           listenOptions.UseHttps(certificate);
                       });
                   }
               )
               .UseConfiguration(config)
               .UseContentRoot(Directory.GetCurrentDirectory())
               .UseStartup<Startup>()
               //.UseUrls("https://localhost:44321")
               .Build();

            host.Run();
        }

        public static string GetLocalIPAddress()
        {
            var host = Dns.GetHostEntry(Dns.GetHostName());
            foreach (var ip in host.AddressList)
            {
                if (ip.AddressFamily == AddressFamily.InterNetwork)
                {
                    return ip.ToString();
                }
            }
            throw new Exception("No network adapters with an IPv4 address in the system!");
        }
    }
}

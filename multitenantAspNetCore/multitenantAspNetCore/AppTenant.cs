using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace multitenantAspNetCore
{
    public class AppTenant
    {
        public string Name { get; set; }
        public string[] HostNames { get; set; }
    }
}

using IdentityModel.Client;
using Newtonsoft.Json.Linq;
using System;
using System.Net.Http;
using System.Threading.Tasks;

namespace IdentityServer4QuickStart.Client
{
    class Program
    {
        public static void Main(string[] args) => MainAsync(args).GetAwaiter().GetResult();

        private static async Task MainAsync(string[] args)
        {
            string clientId = "client";
            string secret = "secret";
            string scope = "api1";
            if (args.Length >= 1)
            {
                clientId = args[0];
            }
            if (args.Length >= 2)
            {
                secret = args[1];
            }
            if (args.Length >= 3)
            {
                scope = args[2];
            }
            Console.WriteLine("Amount of parameters: " + args.Length);
            Console.WriteLine("client: " + clientId);
            Console.WriteLine("secret: " + secret);
            Console.WriteLine("scope: " + scope);
            //discover endpoints from metadata
            var disco = await DiscoveryClient.GetAsync("http://localhost:5000");
            if (disco.IsError)
            {
                Console.WriteLine(disco.Error);
                return;
            }

            //request token

            for (int i = 1; i <= 2; i++)
            {
                TokenClient tokenClient = null;
                TokenResponse tokenResponse = null;
                if (i == 1)
                {
                    Console.WriteLine("Grant type: GrantTypes.ClientCredentials");
                    tokenClient = new TokenClient(disco.TokenEndpoint, clientId, secret);
                    tokenResponse = await tokenClient.RequestClientCredentialsAsync(scope);
                }
                else if (i == 2)
                {
                    Console.WriteLine("Grant type: GrantTypes.ResourceOwnerPassword");
                    tokenClient = new TokenClient(disco.TokenEndpoint, "ro.client", "secret");
                    tokenResponse = await tokenClient.RequestResourceOwnerPasswordAsync("bob", "password", "api1");

                }
                if (tokenResponse.IsError)
                {
                    Console.WriteLine(tokenResponse.Error);
                    return;
                }

                Console.WriteLine(tokenResponse.Json);



                //call api
                var client = new HttpClient();
                client.SetBearerToken(tokenResponse.AccessToken);

                var response = await client.GetAsync("http://localhost:5001/identity");
                if (!response.IsSuccessStatusCode)
                {
                    Console.WriteLine(response.StatusCode);
                }
                else
                {
                    var content = await response.Content.ReadAsStringAsync();
                    Console.WriteLine(JArray.Parse(content));
                }
            }

        }
    }
}

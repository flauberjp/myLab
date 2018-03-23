using IdentityServer4;
using IdentityServer4.Models;
using IdentityServer4.Test;
using System;
using System.Collections.Generic;
using System.Security.Claims;
using static IdentityServer4.IdentityServerConstants;

namespace identityserver4_samples.IdentityServer
{
    public class Config
    {
        public static IEnumerable<IdentityResource> GetIdentityResources()
        {
            return new List<IdentityResource>
            {
                new IdentityResources.OpenId(),
                new IdentityResources.Profile()
            };
        }

        public static IEnumerable<Client> GetClients() =>
            new List<Client>
            {
                    new Client
                    {
                        ClientId = "mvc",
                        ClientName = "MVC Client",
                        AllowedGrantTypes = GrantTypes.Implicit,

                        RedirectUris = { "http://localhost:5000/signin-oidc" },
                        PostLogoutRedirectUris = { "http://localhost:5000" },

                        AllowedScopes =
                        {
                            StandardScopes.OpenId,
                            StandardScopes.Profile
                        }
                    }
            };

        public static List<TestUser> GetUsers()
        {
            return new List<TestUser>
                {
                    new TestUser
                    {
                        SubjectId = "1",
                        Username = "alice",
                        Password = "password",

                        Claims = new []
                        {
                            new Claim("name", "Alice"),
                            new Claim("website", "https://alice.com")
                        }
                    },
                    new TestUser
                    {
                        SubjectId = "2",
                        Username = "bob",
                        Password = "password",
                        Claims = new []
                        {
                            new Claim("name", "bob"),
                            new Claim("website", "https://bob.com")
                        }
                    }
                    
                };
        }
    }
}
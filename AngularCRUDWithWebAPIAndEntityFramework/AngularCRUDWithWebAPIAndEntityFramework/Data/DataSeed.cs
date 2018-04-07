using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularCRUDWithWebAPIAndEntityFramework.Data
{
    public class DataSeed
    {
        public static void AddTestData(MusicStoreDB context)
        {

            if (!context.Albums.Any())
            {
                var artist = new Artist
                {
                    /*int*/
                    ArtistId = 1,
                    /*string*/
                    Name = "Linkin Park",
                };

                var albums = new List<Album>
                {
                    new Album {
                        /*int*/   AlbumId = 1,
                        /*string*/ Title = "Meteora", 
                        /*Artist*/ Artist = artist // forenign key
                    },
                    new Album {
                        /*int*/   AlbumId = 2,
                        /*string*/ Title = "Hybrid Theory", 
                        /*Artist*/ Artist = artist // forenign key
                    },
                };
                context.AddRange(albums);
                context.SaveChanges();
            }
        }
    }
}

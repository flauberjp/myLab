using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace AngularCRUDWithWebAPIAndEntityFramework.Data
{
    public class Album
    {
        public int AlbumId { get; set; }
        public string GenreId { get; set; }
        public string Title { get; set; }
        public string Price { get; set; }
        public string AlbumArtUrl { get; set; }

        [ForeignKey("ArtistId")]
        public Artist Artist { get; set; }
    }
}

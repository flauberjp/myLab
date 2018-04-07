using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using AngularCRUDWithWebAPIAndEntityFramework.Data;

namespace AngularCRUDWithWebAPIAndEntityFramework.Controllers
{
    [Produces("application/json")]
    [Route("api/Albums")]
    public class AlbumsController : Controller
    {
        private readonly MusicStoreDB _context;

        public AlbumsController(MusicStoreDB context)
        {
            _context = context;
        }

        // GET: api/Albums
        [HttpGet]
        public IEnumerable<Album> GetAlbums()
        {
            return _context.Albums.Include(p => p.Artist);
        }

        // GET: api/Albums/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetAlbum([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var album = await _context.Albums.Include(p => p.Artist).SingleOrDefaultAsync(m => m.AlbumId == id);

            if (album == null)
            {
                return NotFound();
            }

            return Ok(album);
        }

        // PUT: api/Albums/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutAlbum([FromRoute] int id, [FromBody] Album album)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != album.AlbumId)
            {
                return BadRequest();
            }

            _context.Entry(album).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AlbumExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Albums
        [HttpPost]
        public async Task<IActionResult> PostAlbum([FromBody] Album album)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Albums.Add(album);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetAlbum", new { id = album.AlbumId }, album);
        }

        // DELETE: api/Albums/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAlbum([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var album = await _context.Albums.SingleOrDefaultAsync(m => m.AlbumId == id);
            if (album == null)
            {
                return NotFound();
            }

            _context.Albums.Remove(album);
            await _context.SaveChangesAsync();

            return Ok(album);
        }

        private bool AlbumExists(int id)
        {
            return _context.Albums.Any(e => e.AlbumId == id);
        }
    }
}
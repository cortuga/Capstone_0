using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Capstone_0.Models;
using capstone_0;

namespace sdg_react_template.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserProfileController : ControllerBase
    {
        private readonly DatabaseContext _context;

        public UserProfileController(DatabaseContext context)
        {
            _context = context;
        }

        // GET: api/UserProfile
        [HttpGet]
        public async Task<ActionResult<IEnumerable<UserProfileModel>>> GetUserProfileModel()
        {
            return await _context.UserProfileModel.ToListAsync();
        }

        // GET: api/UserProfile/5
        [HttpGet("{id}")]
        public async Task<ActionResult<UserProfileModel>> GetUserProfileModel(int id)
        {
            var userProfileModel = await _context.UserProfileModel.FindAsync(id);

            if (userProfileModel == null)
            {
                return NotFound();
            }

            return userProfileModel;
        }

        // PUT: api/UserProfile/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutUserProfileModel(int id, UserProfileModel userProfileModel)
        {
            if (id != userProfileModel.Id)
            {
                return BadRequest();
            }

            _context.Entry(userProfileModel).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserProfileModelExists(id))
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

        // POST: api/UserProfile
        [HttpPost]
        public async Task<ActionResult<UserProfileModel>> PostUserProfileModel(UserProfileModel userProfileModel)
        {
            _context.UserProfileModel.Add(userProfileModel);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetUserProfileModel", new { id = userProfileModel.Id }, userProfileModel);
        }

        // DELETE: api/UserProfile/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<UserProfileModel>> DeleteUserProfileModel(int id)
        {
            var userProfileModel = await _context.UserProfileModel.FindAsync(id);
            if (userProfileModel == null)
            {
                return NotFound();
            }

            _context.UserProfileModel.Remove(userProfileModel);
            await _context.SaveChangesAsync();

            return userProfileModel;
        }

        private bool UserProfileModelExists(int id)
        {
            return _context.UserProfileModel.Any(e => e.Id == id);
        }
    }
}

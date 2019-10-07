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
    public class LongTermGoalsController : ControllerBase
    {
        private readonly DatabaseContext _context;

        public LongTermGoalsController(DatabaseContext context)
        {
            _context = context;
        }

        // GET: api/LongTermGoals
        [HttpGet]
        public async Task<ActionResult<IEnumerable<LongTermGoalsModel>>> GetLongTermGoalsModel()
        {
            return await _context.LongTermGoalsModel.ToListAsync();
        }

        // GET: api/LongTermGoals/5
        [HttpGet("{id}")]
        public async Task<ActionResult<LongTermGoalsModel>> GetLongTermGoalsModel(int id)
        {
            var longTermGoalsModel = await _context.LongTermGoalsModel.FindAsync(id);

            if (longTermGoalsModel == null)
            {
                return NotFound();
            }

            return longTermGoalsModel;
        }

        // PUT: api/LongTermGoals/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutLongTermGoalsModel(int id, LongTermGoalsModel longTermGoalsModel)
        {
            if (id != longTermGoalsModel.ID)
            {
                return BadRequest();
            }

            _context.Entry(longTermGoalsModel).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!LongTermGoalsModelExists(id))
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

        // POST: api/LongTermGoals
        [HttpPost]
        public async Task<ActionResult<LongTermGoalsModel>> PostLongTermGoalsModel(LongTermGoalsModel longTermGoalsModel)
        {
            _context.LongTermGoalsModel.Add(longTermGoalsModel);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetLongTermGoalsModel", new { id = longTermGoalsModel.ID }, longTermGoalsModel);
        }

        // DELETE: api/LongTermGoals/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<LongTermGoalsModel>> DeleteLongTermGoalsModel(int id)
        {
            var longTermGoalsModel = await _context.LongTermGoalsModel.FindAsync(id);
            if (longTermGoalsModel == null)
            {
                return NotFound();
            }

            _context.LongTermGoalsModel.Remove(longTermGoalsModel);
            await _context.SaveChangesAsync();

            return longTermGoalsModel;
        }

        private bool LongTermGoalsModelExists(int id)
        {
            return _context.LongTermGoalsModel.Any(e => e.ID == id);
        }
    }
}

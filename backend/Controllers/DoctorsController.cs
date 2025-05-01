using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace HealthcareAppointmentAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class DoctorsController : ControllerBase
    {
        private readonly HealthcareContext _context;
        public DoctorsController(HealthcareContext context) => _context = context;

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Doctor>>> GetDoctors() => await _context.Doctors.ToListAsync();

        [HttpPost]
        public async Task<ActionResult<Doctor>> AddDoctor(Doctor doctor)
        {
            _context.Doctors.Add(doctor);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetDoctors), new { id = doctor.Id }, doctor);
        }
    }
}

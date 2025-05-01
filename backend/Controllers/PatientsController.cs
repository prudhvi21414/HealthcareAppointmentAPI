using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace HealthcareAppointmentAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PatientsController : ControllerBase
    {
        private readonly HealthcareContext _context;
        public PatientsController(HealthcareContext context) => _context = context;

        [HttpPost]
        public async Task<ActionResult<Patient>> RegisterPatient(Patient patient)
        {
            _context.Patients.Add(patient);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(RegisterPatient), new { id = patient.Id }, patient);
        }
    }
}

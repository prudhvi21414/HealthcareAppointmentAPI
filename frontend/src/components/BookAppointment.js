import React, { useState, useEffect } from 'react';
import axios from 'axios';

function BookAppointment() {
    const [patients, setPatients] = useState([]);
    const [doctors, setDoctors] = useState([]);
    const [selectedPatient, setSelectedPatient] = useState('');
    const [selectedDoctor, setSelectedDoctor] = useState('');
    const [appointmentDate, setAppointmentDate] = useState('');

    useEffect(() => {
        async function fetchData() {
            const patientsRes = await axios.get('https://localhost:5001/api/Patients');
            const doctorsRes = await axios.get('https://localhost:5001/api/Doctors');
            setPatients(patientsRes.data);
            setDoctors(doctorsRes.data);
        }
        fetchData();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('https://localhost:5001/api/Appointments', {
            patientId: selectedPatient,
            doctorId: selectedDoctor,
            appointmentDate: appointmentDate,
        });
        alert('Appointment Booked Successfully!');
        setSelectedPatient('');
        setSelectedDoctor('');
        setAppointmentDate('');
    };

    return (
        <div>
            <h2>Book Appointment</h2>
            <form onSubmit={handleSubmit}>
                <select value={selectedPatient} onChange={(e) => setSelectedPatient(e.target.value)} required>
                    <option value="">Select Patient</option>
                    {patients.map((patient) => (
                        <option key={patient.id} value={patient.id}>{patient.name}</option>
                    ))}
                </select><br />

                <select value={selectedDoctor} onChange={(e) => setSelectedDoctor(e.target.value)} required>
                    <option value="">Select Doctor</option>
                    {doctors.map((doctor) => (
                        <option key={doctor.id} value={doctor.id}>{doctor.name} ({doctor.specialty})</option>
                    ))}
                </select><br />

                <input type="datetime-local" value={appointmentDate} onChange={(e) => setAppointmentDate(e.target.value)} required /><br />
                <button type="submit">Book Appointment</button>
            </form>
        </div>
    );
}

export default BookAppointment;

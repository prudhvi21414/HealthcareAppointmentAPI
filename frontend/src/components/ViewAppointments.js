import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ViewAppointments() {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        async function fetchAppointments() {
            const res = await axios.get('https://localhost:5001/api/Appointments');
            setAppointments(res.data);
        }
        fetchAppointments();
    }, []);

    return (
        <div>
            <h2>All Appointments</h2>
            <table border="1" cellPadding="5">
                <thead>
                    <tr>
                        <th>Patient Name</th>
                        <th>Doctor Name</th>
                        <th>Specialty</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {appointments.map((appt) => (
                        <tr key={appt.id}>
                            <td>{appt.patient?.name}</td>
                            <td>{appt.doctor?.name}</td>
                            <td>{appt.doctor?.specialty}</td>
                            <td>{new Date(appt.appointmentDate).toLocaleString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ViewAppointments;

import React, { useState } from 'react';
import axios from 'axios';

function PatientRegister() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('https://localhost:5001/api/Patients', { name, email });
        alert('Patient Registered Successfully!');
        setName('');
        setEmail('');
    };

    return (
        <div>
            <h2>Register Patient</h2>
            <form onSubmit={handleSubmit}>
                <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required /><br />
                <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required /><br />
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default PatientRegister;

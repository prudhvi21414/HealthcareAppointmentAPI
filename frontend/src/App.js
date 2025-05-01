import React from 'react';
import PatientRegister from './components/PatientRegister';
import BookAppointment from './components/BookAppointment';
import ViewAppointments from './components/ViewAppointments';

function App() {
    return (
        <div className="App">
            <h1>Healthcare Appointment Portal</h1>
            <PatientRegister />
            <BookAppointment />
            <ViewAppointments />
        </div>
    );
}

export default App;

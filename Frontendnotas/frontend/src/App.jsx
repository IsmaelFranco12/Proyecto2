
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EstudiantesPage from './pages/EstudiantesPages';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<EstudiantesPage />} />
            </Routes>
        </Router>
    );
}

export default App;


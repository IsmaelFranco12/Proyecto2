import React, { useState } from 'react';
import { createEstudiante } from '../services/api';

const EstudianteForm = ({ onSuccess }) => {
    const [nombre, setNombre] = useState('');
    const [actividades, setActividades] = useState('');
    const [primerParcial, setPrimerParcial] = useState('');
    const [segundoParcial, setSegundoParcial] = useState('');
    const [examenFinal, setExamenFinal] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const nuevoEstudiante = {
            nombre,
            actividades: parseFloat(actividades),
            primerParcial: parseFloat(primerParcial),
            segundoParcial: parseFloat(segundoParcial),
            examenFinal: parseFloat(examenFinal),
        };

        try {
            await createEstudiante(nuevoEstudiante);
            onSuccess();
        } catch (error) {
            console.error("Error al guardar el estudiante:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
            />
            <input
                type="number"
                placeholder="Actividades"
                value={actividades}
                onChange={(e) => setActividades(e.target.value)}
            />
            <input
                type="number"
                placeholder="Primer Parcial"
                value={primerParcial}
                onChange={(e) => setPrimerParcial(e.target.value)}
            />
            <input
                type="number"
                placeholder="Segundo Parcial"
                value={segundoParcial}
                onChange={(e) => setSegundoParcial(e.target.value)}
            />
            <input
                type="number"
                placeholder="Examen Final"
                value={examenFinal}
                onChange={(e) => setExamenFinal(e.target.value)}
            />
            <button type="submit">Guardar</button>
        </form>
    );
};

export default EstudianteForm;

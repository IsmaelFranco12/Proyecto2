import React, { useEffect, useState } from "react";
import { getEstudiantes, deleteEstudiante } from "../services/api"; // Ruta corregida
import EstudianteForm from "../components/EstudianteForm"; // Importar el formulario
import "./EstudiantesPage.css"; // Archivo de estilos

const EstudiantesPage = () => {
    const [estudiantes, setEstudiantes] = useState([]);

    // Función para obtener los estudiantes
    const cargarEstudiantes = () => {
        getEstudiantes()
            .then((response) => {
                setEstudiantes(response.data);
            })
            .catch((error) => {
                console.error("Error al obtener estudiantes", error);
            });
    };

    // useEffect para cargar los estudiantes cuando el componente se monta
    useEffect(() => {
        cargarEstudiantes();
    }, []);

    // Función para eliminar un estudiante
    const handleDelete = (id) => {
        deleteEstudiante(id)
            .then(() => {
                setEstudiantes((prev) => prev.filter((est) => est.id !== id));
            })
            .catch((error) => {
                console.error("Error al eliminar estudiante", error);
            });
    };

    return (
        <div className="container">
            <h1>Lista de Estudiantes</h1>

            {/* Formulario para agregar estudiantes */}
            <EstudianteForm onSuccess={cargarEstudiantes} />

            <div className="table-container">
                <div className="grid-table">
                    <div className="grid-header">Nombre</div>
                    <div className="grid-header">Actividades</div>
                    <div className="grid-header">Primer Parcial</div>
                    <div className="grid-header">Segundo Parcial</div>
                    <div className="grid-header">Examen Final</div>
                    <div className="grid-header">Acciones</div>

                    {estudiantes.map((estudiante) => (
                        <React.Fragment key={estudiante.id}>
                            <div className="grid-item">{estudiante.nombre}</div>
                            <div className="grid-item">{estudiante.actividades}</div>
                            <div className="grid-item">{estudiante.primerParcial}</div>
                            <div className="grid-item">{estudiante.segundoParcial}</div>
                            <div className="grid-item">{estudiante.examenFinal}</div>
                            <div className="grid-item">
                                <button className="delete-button" onClick={() => handleDelete(estudiante.id)}>
                                    Eliminar
                                </button>
                            </div>
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default EstudiantesPage;



import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8080/api', // Asegúrate de que esta URL esté configurada correctamente
    headers: {
        'Content-Type': 'application/json',
    },
});

// Función para obtener todos los estudiantes
export const getEstudiantes = async () => {
    try {
        const response = await api.get('/estudiantes');
        return response;
    } catch (error) {
        console.error("Error al obtener estudiantes:", error);
        throw error; // Propaga el error para que se pueda manejar en el componente
    }
};

// Función para crear un nuevo estudiante
export const createEstudiante = async (data) => {
    try {
        const response = await api.post('/estudiantes', data);
        return response;
    } catch (error) {
        console.error("Error al crear estudiante:", error);
        throw error; // Propaga el error para que se pueda manejar en el componente
    }
};

// Función para actualizar un estudiante existente
export const updateEstudiante = async (id, data) => {
    try {
        const response = await api.put(`/estudiantes/${id}`, data);
        return response;
    } catch (error) {
        console.error(`Error al actualizar estudiante con id ${id}:`, error);
        throw error; // Propaga el error para que se pueda manejar en el componente
    }
};

// Función para eliminar un estudiante por su id
export const deleteEstudiante = async (id) => {
    try {
        const response = await api.delete(`/estudiantes/${id}`);
        return response;
    } catch (error) {
        console.error(`Error al eliminar estudiante con id ${id}:`, error);
        throw error; // Propaga el error para que se pueda manejar en el componente
    }
};

export default api;


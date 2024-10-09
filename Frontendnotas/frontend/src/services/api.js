import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8080/api',
    headers: {
        'Content-Type': 'application/json',
    },
});


export const getEstudiantes = async () => {
    try {
        const response = await api.get('/estudiantes');
        return response;
    } catch (error) {
        console.error("Error al obtener estudiantes:", error);
        throw error;
    }
};


export const createEstudiante = async (data) => {
    try {
        const response = await api.post('/estudiantes', data);
        return response;
    } catch (error) {
        console.error("Error al crear estudiante:", error);
        throw error;
    }
};


export const updateEstudiante = async (id, data) => {
    try {
        const response = await api.put(`/estudiantes/${id}`, data);
        return response;
    } catch (error) {
        console.error(`Error al actualizar estudiante con id ${id}:`, error);
        throw error;
    }
};


export const deleteEstudiante = async (id) => {
    try {
        const response = await api.delete(`/estudiantes/${id}`);
        return response;
    } catch (error) {
        console.error(`Error al eliminar estudiante con id ${id}:`, error);
        throw error;
    }
};

export default api;


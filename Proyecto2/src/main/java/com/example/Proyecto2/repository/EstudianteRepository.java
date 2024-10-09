package com.example.Proyecto2.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.Proyecto2.model.Estudiante;

public interface EstudianteRepository extends JpaRepository<Estudiante, Long> {
    // Métodos personalizados si es necesario
}
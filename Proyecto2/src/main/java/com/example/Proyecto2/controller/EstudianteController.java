package com.example.Proyecto2.controller;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.Proyecto2.model.Estudiante;
import com.example.Proyecto2.service.EstudianteService;

import java.util.List;

@RestController
@RequestMapping("/api/estudiantes")
@CrossOrigin(origins = "http://localhost:3000")
public class EstudianteController {

    @Autowired
    private EstudianteService estudianteService;

    @GetMapping
    public List<Estudiante> listarEstudiantes() {
        return estudianteService.obtenerTodos();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Estudiante> obtenerEstudiante(@PathVariable Long id) {
        return estudianteService.obtenerPorId(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Estudiante crearEstudiante(@Valid @RequestBody Estudiante estudiante) {
        return estudianteService.guardar(estudiante);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Estudiante> actualizarEstudiante(@PathVariable Long id, @Valid @RequestBody Estudiante estudiante) {
        return estudianteService.obtenerPorId(id)
                .map(existente -> {
                    existente.setNombre(estudiante.getNombre());
                    existente.setActividades(estudiante.getActividades());
                    existente.setPrimerParcial(estudiante.getPrimerParcial());
                    existente.setSegundoParcial(estudiante.getSegundoParcial());
                    existente.setExamenFinal(estudiante.getExamenFinal());
                    Estudiante actualizado = estudianteService.guardar(existente);
                    return ResponseEntity.ok(actualizado);
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminarEstudiante(@PathVariable Long id) {
        if (estudianteService.obtenerPorId(id).isPresent()) {
            estudianteService.eliminar(id);
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}

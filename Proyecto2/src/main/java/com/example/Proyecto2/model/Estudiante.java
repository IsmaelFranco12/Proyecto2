package com.example.Proyecto2.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

@Entity

public class Estudiante {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "El nombre es obligatorio")
    private String nombre;

    @NotNull(message = "La nota de actividades es obligatoria")
    @Min(value = 0, message = "La nota mínima es 0")
    @Max(value = 35, message = "La nota máxima es 35")
    private Double actividades;

    @NotNull(message = "La nota del primer parcial es obligatoria")
    @Min(value = 0, message = "La nota mínima es 0")
    @Max(value = 15, message = "La nota máxima es 15")
    private Double primerParcial;

    @NotNull(message = "La nota del segundo parcial es obligatoria")
    @Min(value = 0, message = "La nota mínima es 0")
    @Max(value = 15, message = "La nota máxima es 15")
    private Double segundoParcial;

    @NotNull(message = "La nota del examen final es obligatoria")
    @Min(value = 0, message = "La nota mínima es 0")
    @Max(value = 35, message = "La nota máxima es 35")
    private Double examenFinal;

    private Double puntajeTotal;

    // Getters y Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public Double getActividades() {
        return actividades;
    }

    public void setActividades(Double actividades) {
        this.actividades = actividades;
    }

    public Double getPrimerParcial() {
        return primerParcial;
    }

    public void setPrimerParcial(Double primerParcial) {
        this.primerParcial = primerParcial;
    }

    public Double getSegundoParcial() {
        return segundoParcial;
    }

    public void setSegundoParcial(Double segundoParcial) {
        this.segundoParcial = segundoParcial;
    }

    public Double getExamenFinal() {
        return examenFinal;
    }

    public void setExamenFinal(Double examenFinal) {
        this.examenFinal = examenFinal;
    }

    public Double getPuntajeTotal() {
        return puntajeTotal;
    }

    public void setPuntajeTotal(Double puntajeTotal) {
        this.puntajeTotal = puntajeTotal;
    }

    @PrePersist
    @PreUpdate
    public void calcularPuntajeTotal() {
        // Asegurarse de que los valores no sean nulos antes de sumarlos
        if (actividades != null && primerParcial != null && segundoParcial != null && examenFinal != null) {
            this.puntajeTotal = actividades + primerParcial + segundoParcial + examenFinal;
        } else {
            this.puntajeTotal = 0.0;
        }
    }
}

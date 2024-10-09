package com.example.Proyecto2.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/api/**") // Ajusta esto según tus necesidades
                .allowedOrigins("http://localhost:5173") // Cambia esto a la URL de tu frontend
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
                .allowedHeaders("*") // Permitir todos los encabezados
                .allowCredentials(true); // Si necesitas enviar cookies o credenciales
    }
}

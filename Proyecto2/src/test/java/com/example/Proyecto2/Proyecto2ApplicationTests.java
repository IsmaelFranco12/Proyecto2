package com.example.Proyecto2;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class Proyecto2ApplicationTests {

	// Constructor privado para evitar instanciación externa.
	private Proyecto2ApplicationTests() {
	}

	// Método estático que devuelve una instancia de esta clase.
	static Proyecto2ApplicationTests createProyecto2ApplicationTests() {
		return new Proyecto2ApplicationTests();
	}

	@Test
	void contextLoads() {
		// Este test verifica si el contexto de Spring Boot se carga correctamente.
		Proyecto2ApplicationTests instance = createProyecto2ApplicationTests();

		// Puedes agregar lógica adicional aquí si lo necesitas
		System.out.println("Context loaded for: " + instance);
	}
}



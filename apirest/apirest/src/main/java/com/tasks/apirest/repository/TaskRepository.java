package com.tasks.apirest.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tasks.apirest.models.Task;

public interface TaskRepository extends JpaRepository<Task, Long> {

	/* Método específico para retorar uma Task específica por id, demais métodos são herdados do JpaRepository */
	Task findById(long id);
}

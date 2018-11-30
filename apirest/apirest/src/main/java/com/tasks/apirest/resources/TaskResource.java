package com.tasks.apirest.resources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tasks.apirest.models.Task;
import com.tasks.apirest.repository.TaskRepository;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

@RestController
@RequestMapping(value="/api")
@Api(value="API REST Tasks")
@CrossOrigin(origins="*")
public class TaskResource {

	@Autowired
	TaskRepository taskRepository;
	
	@GetMapping("/task")
	@ApiOperation(value="Retorna uma lista de tarefas")
	public List<Task> listTasks() {
		return taskRepository.findAll();
	}
	
	@GetMapping("/task/{id}")
	@ApiOperation(value="Retorna tarefa específica")
	public Task buscaTask(@PathVariable(value="id") long id) {	
		return taskRepository.findById(id);
	}
	
	@PostMapping("/task")
	@ApiOperation(value="Salva uma tarefa")
	public Task salvaTask(@RequestBody Task task) {
		return taskRepository.save(task);
	}
	
	@DeleteMapping("/task/{id}")
	@ApiOperation(value="Deleta uma tarefa específica")
	public void deletaTask(@PathVariable(value="id") long id) {
		taskRepository.deleteById(id);
	}
	
	@PutMapping("/task")
	@ApiOperation(value="Atualiza uma tarefa")
	public Task atualizaTask(@RequestBody Task task) {		
		return taskRepository.save(task);
	}
}

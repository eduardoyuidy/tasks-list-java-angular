import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { Task } from '../models/tasks';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-tasks-add',
  templateUrl: './tasks-add.component.html',
  styleUrls: ['./tasks-add.component.css']
})
export class TasksAddComponent implements OnInit {

  public enviado: boolean;
  public task: Task;
  public message: string;

  constructor(
    private taskService: TaskService,
    private location: Location) {  }

  ngOnInit() {

    // Inicializa a nova tarefa para inclusão
    this.newTask();
  }

  // Prepara tela para nova inclusão
  public newTask(): void {
    this.enviado = false;
    this.task = new Task();
    this.task.done = false;
  }

  public addTask(): void {

    this.enviado = true;
    this.message = 'Tarefa cadastrada com sucesso.';
    this.save();
  }

  // Retorna para componente anterior
  public voltar(): void {
    this.location.back();
  }

  private save(): void {

    // Prepara data de inclusão
    const dateAux = new Date();
    this.task.dateInc = `${dateAux.getDate()}/${dateAux.getMonth()}/${dateAux.getFullYear()}`;

    this.taskService.addTask(this.task)
      .subscribe();
  }
}

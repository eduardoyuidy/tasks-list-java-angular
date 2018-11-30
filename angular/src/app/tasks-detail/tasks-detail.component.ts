import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { TaskService } from '../services/task.service';
import { Task } from '../models/tasks';

@Component({
  selector: 'app-tasks-detail',
  templateUrl: './tasks-detail.component.html',
  styleUrls: ['./tasks-detail.component.css']
})
export class TasksDetailComponent implements OnInit {

  public task: Task;
  public enviado: boolean;
  public message: string;

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private location: Location
  ) {  }

  ngOnInit() {

    const id = parseInt(this.route.snapshot.paramMap.get('id'), 10);

    this.taskService.getTask(id)
      .subscribe(task => {
        this.task = task;
    });

    this.enviado = false;
  }

  public salvar(): void {

    const dateAux = new Date();
    this.task.dateEdit = `${dateAux.getDate()}/${dateAux.getMonth()}/${dateAux.getFullYear()}`;

    this.taskService.updateTask(this.task)
      .subscribe(result => {
        this.message = 'Tarefa foi salva com sucesso.';
      });

    this.enviado = true;
  }

  public delete(): void {

    this.enviado = true;

    this.taskService.deleteTask(this.task)
      .subscribe(result => {
        this.message = 'Tarefa foi excluída.';
      });
  }

  public voltar(): void {
    this.location.back();
  }
}

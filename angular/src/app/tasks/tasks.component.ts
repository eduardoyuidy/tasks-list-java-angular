import { Component, OnInit } from '@angular/core';

import { Task } from '../models/tasks';
import { TaskService} from '../services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  public tasksList: Task[];

  constructor(private taskService: TaskService) {

    // Inicializa listagem de tarefas.
    this.tasksList = [];
  }

  ngOnInit() {

    this.getTasks();
  }

  // Método para buscar listagem de tarefas cadastradas.
  private getTasks() {

    return this.taskService.getAllTasks()
        .subscribe(tasks => {
          this.tasksList = tasks;
        });
  }
}

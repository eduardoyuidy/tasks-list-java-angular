import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Task } from '../models/tasks';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
};

@Injectable({
    providedIn: 'root'
})
export class TaskService {

    private apiUrl = 'http://localhost:8080/api/task';

    constructor(private http: HttpClient) { }

    public getAllTasks(): Observable<Task[]> {

        // Implementação Heroku (URI: https://apirest-taskslists.herokuapp.com/)

        // Retorna um observable com a listagem de Tarefas cadastradas.
        return this.http.get<Task[]>(this.apiUrl);
    }

    public getTask(id: number): Observable<Task> {
        const url = `${this.apiUrl}/${id}`;

        // Retorna um observable com a tarefa selecionada
        return this.http.get<Task>(url);
    }

    public addTask (task: Task): Observable<Task> {

        // Adiciona uma tarefa e retorna um observable
        return this.http.post<Task>(this.apiUrl, task, httpOptions);
    }

    public deleteTask (task: Task): Observable<any> {

        const id = typeof task === 'number' ? task : task.id;
        const url = `${this.apiUrl}/${id}`;

        // Exclui a tarefa e retorna um observable
        return this.http.delete<Task>(url, httpOptions);
    }

    public updateTask (task: Task): Observable<any> {

        // Executa o update da tarefa e retorna um observable
        return this.http.put(this.apiUrl, task, httpOptions);
    }
}

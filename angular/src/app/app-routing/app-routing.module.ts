import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TasksComponent } from '../tasks/tasks.component';
import { TasksAddComponent } from '../tasks-add/tasks-add.component';
import { TasksDetailComponent } from '../tasks-detail/tasks-detail.component';

const routes: Routes = [
    {
        path: 'tasks',
        component: TasksComponent
    },
    {
        path: 'tasks/add',
        component: TasksAddComponent
    },
    {
        path: 'tasks/:id',
        component: TasksDetailComponent
    },
    {
        path: '**',
        redirectTo: 'tasks',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }

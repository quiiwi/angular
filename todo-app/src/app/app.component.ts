import { Component } from '@angular/core';
import {Task} from '../shared/models/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mes tâches à faire !';
  /**
   * création d'un Objet: Tâches
   * il contiendra toutes les tâches
   * de notre application
   * @type {any[]}
   */
  tasks: Task[] = [
    {
      id: 1,
      name: 'Promener le chien',
      status: false
    },
    {
      id: 2,
      name: 'Sortir les Poubelles',
      status: false
    },
    {
      id: 3,
      name: 'Préparer un tarte',
      status: true
    },
    {
      id: 4,
      name: 'Faire la vaisellle',
      status: false
    }
  ];

  /**
   * l'utilisateur viens de
   * terminer une tâche
   * @param {Task} task
   */
  taskIsDone(task: Task) {
    task.status = true;
  }
}

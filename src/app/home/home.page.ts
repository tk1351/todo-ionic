import { Component, computed, signal } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from '@ionic/angular/standalone';
import { IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { personCircleOutline } from 'ionicons/icons';
import { TodoInputComponent } from '../components/features/todo-input/todo-input.component';
import { TodoListComponent } from '../components/features/todo-list/todo-list.component';
import { FilterStatus, Todo } from '../core/models/todo';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonIcon,
    TodoInputComponent,
    TodoListComponent,
  ],
})
export class HomePage {
  private today = new Date();
  isoDate = this.today.toISOString().split('T')[0];
  formattedDate = new Intl.DateTimeFormat(navigator.language, {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  }).format(this.today);

  todos = signal<Todo[]>([
    { id: 1, title: '買い物リストを作る', status: 'DONE' },
    { id: 2, title: 'Ionic のドキュメントを読む', status: 'IN_PROGRESS' },
    { id: 3, title: 'プロジェクトの仕様書を書く', status: 'NOT_YET' },
  ]);

  filter = signal<FilterStatus>('ALL');

  displayTodos = computed(() => {
    if (this.filter() === 'ALL') {
      return this.todos();
    }

    return this.todos().filter((todo) => todo.status === this.filter());
  });

  constructor() {
    addIcons({ personCircleOutline });
  }

  handleClickFilter(type: FilterStatus) {
    this.filter.set(type);
    console.log('clicked', type);
  }

  handleSubmitAddTask(value: string) {
    this.filter.set('ALL');
    this.todos.update((todos) => [
      ...todos,
      { id: todos.length + 1, title: value, status: 'NOT_YET' },
    ]);
  }
}

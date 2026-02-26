import { Component, input, output, signal } from '@angular/core';
import { FilterStatus, Status, Todo } from 'src/app/core/models/todo';
import { IonBadge, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-todo-list',
  templateUrl: 'todo-list.component.html',
  styleUrls: ['todo-list.component.scss'],
  imports: [IonBadge, IonButton],
})
export class TodoListComponent {
  todos = input.required<Todo[]>();
  clickFilter = output<FilterStatus>();
  selectedFilter = signal<FilterStatus>('ALL');

  labelMap: Record<FilterStatus, string> = {
    ALL: '全て',
    NOT_YET: '未着手',
    IN_PROGRESS: '進行中',
    DONE: '完了',
  };

  filterOptions: FilterStatus[] = ['ALL', 'NOT_YET', 'IN_PROGRESS', 'DONE'];

  statusColorMap = {
    NOT_YET: 'badge-not-yet',
    IN_PROGRESS: 'badge-in-progress',
    DONE: 'badge-done',
  } as const satisfies Record<Status, string>;

  constructor() {}

  handleClickFilter(type: FilterStatus) {
    this.selectedFilter.set(type);
    this.clickFilter.emit(type);
  }
}

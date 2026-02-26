import { Component, input, output, signal } from '@angular/core';
import { FilterStatus, Status, Todo } from 'src/app/core/models/todo';
import { IonBadge, IonButton } from '@ionic/angular/standalone';
import {
  FILTER_LABEL_MAP,
  FILTER_OPTIONS,
} from 'src/app/core/constants/todo.constants';

@Component({
  selector: 'app-todo-list',
  templateUrl: 'todo-list.component.html',
  styleUrls: ['todo-list.component.scss'],
  imports: [IonBadge, IonButton],
})
export class TodoListComponent {
  protected readonly filterOptions = FILTER_OPTIONS;
  protected readonly labelMap = FILTER_LABEL_MAP;

  todos = input.required<Todo[]>();
  clickFilter = output<FilterStatus>();
  clickItem = output<Todo['id']>();
  selectedFilter = signal<FilterStatus>('ALL');

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

  handleClickItem(id: Todo['id']) {
    this.clickItem.emit(id);
  }
}

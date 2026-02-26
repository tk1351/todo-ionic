import { Component, input, linkedSignal, output } from '@angular/core';
import { IonModal } from '@ionic/angular/standalone';
import {
  STATUS_LABEL_MAP,
  STATUS_OPTIONS,
} from 'src/app/core/constants/todo.constants';
import { Todo, UpdateStatusPayload } from 'src/app/core/models/todo';

@Component({
  selector: 'app-todo-modal',
  templateUrl: 'todo-modal.component.html',
  styleUrls: ['todo-modal.component.scss'],
  imports: [IonModal],
})
export class TodoModalComponent {
  protected readonly statusOptions = STATUS_OPTIONS;
  protected readonly statusLabelMap = STATUS_LABEL_MAP;
  protected selectedStatus = linkedSignal(() => this.todo().status);

  isOpen = input<boolean>(false);
  todo = input.required<Todo>();
  checked = input<boolean>(false);
  updateStatus = output<UpdateStatusPayload>();
  dismiss = output<void>();

  handleUpdateStatus(payload: UpdateStatusPayload) {
    this.selectedStatus.set(payload.status);
    this.updateStatus.emit(payload);
  }

  handleDismiss() {
    this.dismiss.emit();
  }
}

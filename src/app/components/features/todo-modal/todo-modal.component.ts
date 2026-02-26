import { Component, input, output } from '@angular/core';
import { IonModal } from '@ionic/angular/standalone';
import { Todo } from 'src/app/core/models/todo';

@Component({
  selector: 'app-todo-modal',
  templateUrl: 'todo-modal.component.html',
  styleUrls: ['todo-modal.component.scss'],
  imports: [IonModal],
})
export class TodoModalComponent {
  isOpen = input<boolean>(false);
  todo = input<Todo | null>(null);
  dismiss = output<void>();

  handleDismiss() {
    this.dismiss.emit();
  }
}

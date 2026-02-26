import { Component, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Keyboard } from '@capacitor/keyboard';

@Component({
  standalone: true,
  selector: 'app-todo-input',
  templateUrl: 'todo-input.component.html',
  styleUrls: ['todo-input.component.scss'],
  imports: [ReactiveFormsModule],
})
export class TodoInputComponent {
  form = new FormGroup({
    task: new FormControl('', { nonNullable: true }),
  });

  addTask = output<string>();

  constructor() {}

  async onFocus() {
    await Keyboard.show();
  }

  onSubmit() {
    const value = this.form.controls.task.value.trim();
    if (!value) return;
    this.addTask.emit(value);
    this.form.reset();
  }
}

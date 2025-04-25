import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoStore } from './state/todo.state';

@Component({
  selector: 'app-todo',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [TodoStore],
})
export class TodoComponent {
  readonly store = inject(TodoStore);

  title = 'ngrx-signal-store-todo';

  private readonly formbuilder = inject(FormBuilder);

  form = this.formbuilder.group({
    todoValue: ['', Validators.required],
    done: [false],
  });

  addTodo() {
    this.store.addItem(this.form.value.todoValue ?? '');
    this.form.reset();
  }
}

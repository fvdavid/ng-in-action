import { TodoState } from './todo.state';
import { computed } from '@angular/core';
import { signalStoreFeature, type, withComputed } from '@ngrx/signals';
import { Todo } from '../model/todo.model';

export function withTodoSelectors() {
  return signalStoreFeature(
    {
      state: type<TodoState>(),
    },

    withComputed(({ items }) => ({
      doneCount: computed(() => items().filter((x: Todo) => x.done).length),
      undoneCount: computed(() => items().filter((y: Todo) => !y.done).length),

      percentageDone: computed(() => {
        const done = items().filter((f: Todo) => f.done).length;
        const total = items().length;

        if (total === 0) {
          return 0;
        }

        return (done / total) * 100;
      }),
    }))
  );
}

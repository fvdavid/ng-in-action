import { signalStore, withHooks, withMethods, withState } from '@ngrx/signals';
import { Todo } from '../model/todo.model';
import { BaseState, withCrudOperations } from '../../shared/crud.state';
import { TodoService } from '../service/todo.service';
import { withTodoSelectors } from './todo.selectors';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type, @typescript-eslint/no-empty-interface
export interface TodoState extends BaseState<Todo> {}

export const initialState: BaseState<Todo> = {
  items: [],
  loading: false,
};

export const TodoStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),

  withCrudOperations<Todo>(TodoService),
  withTodoSelectors(),

  withMethods((store) => ({
    toggleDone(item: Todo) {
      store.update({ ...item, done: !item.done });
    },
  })),

  withHooks({
    onInit({ loadAllItemsByPromise }) {
      console.log('on init -> loadAllItemByPromise');
      loadAllItemsByPromise();
    },

    onDestroy() {
      console.log('on destroy');
    },
  })
);

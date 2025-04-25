import { computed, inject, Type } from '@angular/core';
import { BaseEntity } from '../todo/model/todo.model';
import { CrudService } from './crud-base.service';
import {
  patchState,
  signalStoreFeature,
  withComputed,
  withMethods,
  type,
} from '@ngrx/signals';
import { switchMap } from 'rxjs';
import { tapResponse } from '@ngrx/operators';
import { rxMethod } from '@ngrx/signals/rxjs-interop';

export type BaseState<Entity> = {
  items: Entity[];
  loading: boolean;
};

export function withCrudOperations<Entity extends BaseEntity>(
  dataServiceType: Type<CrudService<Entity>>
) {
  return signalStoreFeature(
    {
      state: type<BaseState<Entity>>(),
    },
    withMethods((store) => {
      const service = inject(dataServiceType);

      return {
        addItem: rxMethod<string>(
          switchMap((value) => {
            patchState(store, { loading: true });

            return service.addItem(value).pipe(
              tapResponse({
                next: (addedItem) => {
                  patchState(store, {
                    items: [...store.items(), addedItem],
                  });
                },
                error: console.error,
                finalize: () => patchState(store, { loading: false }),
              })
            );
          })
        ),

        async loadAllItemsByPromise() {
          patchState(store, { loading: true });

          const items = await service.getItemsAsPromise();

          patchState(store, { items, loading: false });
        },

        deleteItem: rxMethod<Entity>(
          switchMap((item) => {
            patchState(store, { loading: true });

            return service.deleteItem(item).pipe(
              tapResponse({
                next: () => {
                  patchState(store, {
                    items: [...store.items().filter((x) => x.id !== item.id)],
                  });
                },
                error: console.error,
                finalize: () => patchState(store, { loading: false }),
              })
            );
          })
        ),

        update: rxMethod<Entity>(
          switchMap((item) => {
            patchState(store, { loading: true });

            return service.updateItem(item).pipe(
              tapResponse({
                next: (updatedItem) => {
                  const allItems = [...store.items()];
                  const index = allItems.findIndex((x) => x.id === item.id);

                  allItems[index] = updatedItem;

                  patchState(store, {
                    items: allItems,
                  });
                },
                error: console.error,
                finalize: () => patchState(store, { loading: false }),
              })
            );
          })
        ),
      };
    }),

    withComputed(({ items }) => ({
      allItemsCount: computed(() => items().length),
    }))
  );
}

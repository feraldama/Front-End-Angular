import { createAction, props } from '@ngrx/store';

export const increment = createAction('increment');

export const customIncrement = createAction(
  'customincrement',
  props<{ count: string }>()
);

export const login = createAction(
  'image',
  props<{ likes: number; largeImageURL: string; views: number; tags: string }>()
);

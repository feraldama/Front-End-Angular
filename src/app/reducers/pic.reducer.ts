import { CounterState, initialState } from '../app.state';
import { Action } from '@ngrx/store';

export const _counterReducer = (state = initialState, actions: any) => {
  switch (actions.type) {
    case 'image':
      console.log('reducer state: ', state);
      console.log('reducer actions: ', actions);
      return {
        ...state,
        likes: actions.likes,
        largeImageURL: actions.largeImageURL,
        views: actions.views,
        tags: actions.tags,
      };

    default:
      return state;
  }
};

export function counterReducer(
  state: CounterState | undefined,
  action: Action
) {
  return _counterReducer(state, action);
}

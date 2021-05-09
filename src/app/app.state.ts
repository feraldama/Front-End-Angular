export interface CounterState {
  likes: number;
  largeImageURL: string;
  views: number;
  tags: string;
}

export const initialState: CounterState = {
  likes: 0,
  largeImageURL: '',
  views: 0,
  tags: '',
};

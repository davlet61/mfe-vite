import create from 'zustand';

export interface Movie {
  title: string;
  image: string;
}

export interface StoreProps {
  movies: Array<Movie>;
  addMovie: (movie: Movie) => void;
}

export const useStore = create<StoreProps>((set) => ({
  movies: [],
  addMovie: (movie) => set((state) => ({ movies: [...state.movies, movie] })),
}));

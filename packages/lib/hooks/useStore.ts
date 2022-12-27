import create from 'zustand';

export interface Movie {
  title: string;
  image: string;
}

export const useStore = create<{
  movies: Array<Movie>;
  addMovie: (movie: Movie) => void;
}>((set) => ({
  movies: [],
  addMovie: (movie) => set((state) => ({ movies: [...state.movies, movie] })),
}));

import type { WithId } from '@/shared/types';

export interface IJoke extends WithId {
  type: string;
  setup: string;
  punchline: string;
}

export interface IJokesState {
  jokes: IJoke[];
}

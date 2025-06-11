import type { ReactNode } from 'react';

export type StringOrNumber = string | number;

export interface WithId {
  id: StringOrNumber;
}

export interface WithChildren {
  children?: ReactNode;
}

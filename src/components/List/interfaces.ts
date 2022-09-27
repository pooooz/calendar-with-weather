import React from 'react';

export interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  direction?: 'column' | 'row';
}

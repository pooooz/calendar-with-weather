import React from 'react';

import { RowContainer, ColumnContainer } from './styled';

interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  direction?: 'column' | 'row';
}

export function List<T>({
  items,
  renderItem,
  direction = 'row',
}: ListProps<T>) {
  if (direction === 'row') {
    return <RowContainer>{items.map(renderItem)}</RowContainer>;
  }
  return <ColumnContainer>{items.map(renderItem)}</ColumnContainer>;
}

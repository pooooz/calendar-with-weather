import React from 'react';

import { ColumnContainer, RowContainer } from './styled';
import { ListProps } from './interfaces';

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

import { memo } from 'react';
import cn from 'classnames';
import ITask from '../../types';
import styles from './ListItem.module.scss';

interface IListItem {
  task: ITask;
  toggleIsDone(id: string): void;
}

export const ListItem = memo(function ListItem({ task, toggleIsDone }: IListItem) {
  const { isDone, text, id } = task;

  return (
    <div
      className={cn('list-item', {
        'list-item-done': isDone,
      })}
      onClick={() => toggleIsDone(id)}>
      {text}
    </div>
  );
});

import { FC } from 'react';

import { ListItem } from './ListItem';
import ITask from '../../types';
import styles from './index.module.scss';

interface iList {
  tasks: ITask[];
  toggleIsDone(id: string): void;
}

export const List: FC<iList> = ({ tasks, toggleIsDone }) => {
  return (
    <div className="list">
      {tasks.map((task) => (
        <ListItem toggleIsDone={toggleIsDone} key={task.id} task={task} />
      ))}
    </div>
  );
};

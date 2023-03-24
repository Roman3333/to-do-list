import { FC } from 'react';
import cn from 'classnames';

import styles from './index.module.scss';

interface iFilters {
  search: string;
  setSearch: (e: string) => void;
  showOnlyDone: boolean;
  setShowOnlyDone: (e: boolean) => void;
}

export const Filters: FC<iFilters> = ({ search, setSearch, showOnlyDone, setShowOnlyDone }) => {
  return (
    <div className={styles.filters}>
      <input
        value={search}
        placeholder="Search.."
        className={styles.input}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button
        onClick={() => setShowOnlyDone(true)}
        className={cn(styles.filtersDone, {
          [styles.filtersDoneActive]: showOnlyDone,
        })}>
        Done
      </button>
      <button
        onClick={() => setShowOnlyDone(false)}
        className={cn(styles.filtersAll, {
          [styles.filtersAllActive]: !showOnlyDone,
        })}>
        All
      </button>
    </div>
  );
};

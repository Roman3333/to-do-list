import { useState, useMemo } from 'react';
import { nanoid } from 'nanoid';
import ITask from './types';
import { Form, Filters, List } from './components';

function App() {
  const [tasks, setTasks] = useState<ITask[]>([
    { id: nanoid(), text: 'buy a bread', isDone: false },
    { id: nanoid(), text: 'go to the gym', isDone: false },
    { id: nanoid(), text: 'wash a car', isDone: false },
  ]);
  const [search, setSearch] = useState('');
  const [showOnlyDone, setShowOnlyDone] = useState(false);

  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => {
      if (!task.isDone && showOnlyDone) {
        return false;
      }

      return task.text.toLowerCase().includes(search.toLowerCase());
    });
  }, [tasks, search, showOnlyDone]);

  const toggleIsDone = (id: string) => {
    setTasks((prev) => {
      return prev.map((task) => {
        if (task.id !== id) {
          return task;
        } else {
          return {
            ...task,
            isDone: !Boolean(task.isDone),
          };
        }
      });
    });
  };

  const addTask = (text: string) => {
    setTasks((prev) => [...prev, { id: nanoid(), text, isDone: false }]);
  };

  return (
    <div className="App" style={{ width: '400px' }}>
      <div className="container">
        <Filters
          search={search}
          setSearch={setSearch}
          showOnlyDone={showOnlyDone}
          setShowOnlyDone={setShowOnlyDone}
        />
        <List toggleIsDone={toggleIsDone} tasks={filteredTasks} />
        <Form addTask={addTask} />
      </div>
    </div>
  );
}

export default App;

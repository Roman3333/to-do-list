import { FC, useState, FormEvent, ChangeEvent } from 'react';

interface IForm {
  addTask: (e: string) => void;
}

export const Form: FC<IForm> = ({ addTask }) => {
  const [text, setText] = useState('');

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!text) return;
    addTask(text);
    setText('');
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <div>
      <form action="" onSubmit={submit}>
        <input placeholder="task" type="text" value={text} onChange={onChange} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

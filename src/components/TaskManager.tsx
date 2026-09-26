import { useReducer, useState } from 'react';
import { taskReducer, initialState } from '../reducers/taskReducer';
import { useTheme } from '../context/ThemeContext';
import '../styles/TaskManager.css';

const TaskManager: React.FC = () => {
  const { theme } = useTheme();
  const [state, dispatch] = useReducer(taskReducer, initialState);
  const [inputText, setInputText] = useState<string>('');

  const handleAdd = () => {
    if (inputText.trim() === '') return;
    dispatch({ type: 'ADD_TASK', payload: inputText.trim() });
    setInputText('');
  };

  const handleRemove = (id: number) => {
    dispatch({ type: 'REMOVE_TASK', payload: id });
  };

  const handleToggle = (id: number) => {
    dispatch({ type: 'TOGGLE_TASK', payload: id });
  };

  return (
    <div className={`task-manager task-manager-${theme}`}>
      <h2 className="task-manager-title">Task Manager</h2>

      <div className="task-input-row">
        <input
          className={`task-input task-input-${theme}`}
          type="text"
          placeholder="Add a new task..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
        />
        <button className="task-add-button" onClick={handleAdd}>
          Add Task
        </button>
      </div>

      <ul className="task-list">
        {state.tasks.map((task) => (
          <li
            key={task.id}
            className={`task-item task-item-${theme}`}
            style={{
              textDecoration: task.completed ? 'line-through' : 'none',
              opacity: task.completed ? 0.6 : 1,
            }}
          >
            <span className="task-text" onClick={() => handleToggle(task.id)}>
              {task.completed ? '✅' : '⬜'} {task.text}
            </span>
            <button
              className="task-remove-button"
              onClick={() => handleRemove(task.id)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>

      <p className="task-count">
        {state.tasks.filter((t) => !t.completed).length} tasks remaining
      </p>
    </div>
  );
};

export default TaskManager;

// Theme types
export type Theme = 'light' | 'dark';

export type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

// Task types
export type Task = {
  id: number;
  text: string;
  completed: boolean;
};

export type TaskState = {
  tasks: Task[];
};

export type TaskAction =
  | { type: 'ADD_TASK'; payload: string }
  | { type: 'REMOVE_TASK'; payload: number }
  | { type: 'TOGGLE_TASK'; payload: number };
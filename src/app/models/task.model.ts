export interface Task {
  id: string;
  projectId: string;
  name: string;
  component: string;
  dueDate: string;
  status: 'backlog' | 'in progress' | 'verify' | 'completed';
}

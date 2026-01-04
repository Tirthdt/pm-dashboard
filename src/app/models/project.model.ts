export interface Project {
  id: string;
  name: string;
  status: 'active' | 'paused' | 'completed';
  startDate: string;
  endDate: string;
  ownerId: string;
  progress: number;
}

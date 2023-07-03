import { TaskInterface } from 'interfaces/task';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface HistoryInterface {
  id?: string;
  task_id?: string;
  user_id?: string;
  completed_date?: any;
  created_at?: any;
  updated_at?: any;

  task?: TaskInterface;
  user?: UserInterface;
  _count?: {};
}

export interface HistoryGetQueryInterface extends GetQueryInterface {
  id?: string;
  task_id?: string;
  user_id?: string;
}

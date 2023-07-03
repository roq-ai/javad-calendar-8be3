import { HistoryInterface } from 'interfaces/history';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface TaskInterface {
  id?: string;
  name: string;
  description?: string;
  due_date?: any;
  user_id?: string;
  created_at?: any;
  updated_at?: any;
  history?: HistoryInterface[];
  user?: UserInterface;
  _count?: {
    history?: number;
  };
}

export interface TaskGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  user_id?: string;
}

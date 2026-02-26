export type Status = 'IN_PROGRESS' | 'NOT_YET' | 'DONE';
export type FilterStatus = Status | 'ALL';

export type Todo = {
  id: number;
  title: string;
  status: Status;
};

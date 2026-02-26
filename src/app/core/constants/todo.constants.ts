import { FilterStatus, Status } from '../models/todo';

export const STATUS_OPTIONS: Status[] = ['NOT_YET', 'IN_PROGRESS', 'DONE'];

export const FILTER_OPTIONS: FilterStatus[] = [
  'ALL',
  'NOT_YET',
  'IN_PROGRESS',
  'DONE',
];

export const STATUS_LABEL_MAP: Record<Status, string> = {
  NOT_YET: '未着手',
  IN_PROGRESS: '進行中',
  DONE: '完了',
};

export const FILTER_LABEL_MAP: Record<FilterStatus, string> = {
  ALL: '全て',
  ...STATUS_LABEL_MAP,
};

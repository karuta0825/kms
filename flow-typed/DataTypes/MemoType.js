declare type MemoPriorityType =
  | 'emergency'
  | 'important'
  | 'reminder'
  | 'special'
  | '';

declare type MemoType = {
  id: number,
  kids_id: string,
  title: string,
  priority_id: number,
  priority: MemoPriorityType,
  message: string,
  short_msg: string,
  create_on: string,
  name: string,
};

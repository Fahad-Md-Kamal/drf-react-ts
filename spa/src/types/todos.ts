export interface Todo {
  id: number;
  name: string;
  is_complete: boolean;
  created_at: string;
  updated_at: string;
  created_since: string;
  updated_since: string;
}

export interface TodoResponse {
  result: Todo[];
}

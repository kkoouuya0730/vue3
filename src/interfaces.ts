export interface Member { 
    id: number;
    name: string;
    email: string;
    points: number;
    note?: string;
}

export interface Todo {
    id: string,
    title: string
    done: boolean
  }
  
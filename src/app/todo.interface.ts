export interface Todo {
    task: string;
    completed: boolean;
    duration: number;
    priority: 'low' | 'normal' | 'high';
}
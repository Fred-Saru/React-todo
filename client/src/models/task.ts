export interface ITaskModel {
    _id?: string;
    content: string;
    isDone?: boolean;
    rank: number;
    listId: string;
}
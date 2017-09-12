// import {IAction} from './i-common'

export enum EFILTER {Active, Finished, All}

export interface ITodoItem {
    contents: string,
    id: string,
    finished: boolean,
}

export interface ITodoItemHanlder {
    onDelete(id: string): void,
    onEdit(id: string, contents: string): void,
    onToggleTodo(id: string): void
}

export interface ITodoHeaderHandler {
    onAdd(contents:string): void
}

export type ITodoHanler = ITodoItemHanlder & ITodoHeaderHandler & ITodoFooterHandler;

export interface ITodoFooterHandler {
    onFilter(filter:EFILTER): void
}

export interface ITodoState {
    filter: EFILTER.All,
    todos:ITodoItem[]
}

export type ITodoItemProps = ITodoItem & ITodoItemHanlder;


export type ITodoListProps = {
    todos: ITodoItem[],
} & ITodoItemHanlder;

export interface IHOFCommonEvent{
    (key: string): (e:React.SyntheticEvent<HTMLElement>) => void;
}

export interface IHOFInputEvent{
    (key: string): (e:React.SyntheticEvent<HTMLInputElement>) => void;
}

export interface ICommonHTMLEvent {
    (e:React.SyntheticEvent<HTMLElement>): void;
}



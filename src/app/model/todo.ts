export class Todo {
    id: number = -1;
    title: string = '';
    complete: boolean = false;
    note?: string;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}

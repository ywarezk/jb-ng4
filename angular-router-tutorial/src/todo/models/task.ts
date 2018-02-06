

export interface ITask {
    title: string;
    description: string;
    id: number;
}

export class Task implements ITask{
    public id: number = 0;
    public title: string = '';
    public description: string = '';

    constructor(json: ITask) {
        this.id = json.id || 0;
        this.title = json.title || '';
        this.description = json.description || '';
    }
}
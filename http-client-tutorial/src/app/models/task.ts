


export interface ITask {
    title: string;
    description: string;
}

export class Task implements ITask {

    public title: string = '';
    public description: string = '';

    constructor(json: {[key: string]: any}) {
        this.title = json.title;
        this.description = json.description;
    }

    public toJson() {
        
    }

}
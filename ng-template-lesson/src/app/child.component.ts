

import {Component, Input, Output, EventEmitter} from "@angular/core";

@Component({
    selector: 'jb-child',
    template: `
    <h1 [hidden]="!isVisible">
        {{message}}
    </h1>
    <button (click)="toggleVisility()">
        Change Visibility
    </button>
    `
})
export class ChildComponent {
    @Input() public message: string = "";
    @Input("messageFromParent") public otherMessage: string = ""
    // @Output() public visibilityEvent: EventEmitter<boolean> = new EventEmitter();
    @Output("visibility") public visibilityEvent: EventEmitter<boolean> = new EventEmitter();
    public isVisible: boolean = true;

    public toggleVisility() {
        this.isVisible = !this.isVisible;
        this.visibilityEvent.emit(this.isVisible);
    }
}
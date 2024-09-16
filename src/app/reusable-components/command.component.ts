import { Component } from "@angular/core";

@Component({
    selector: 'app-command',
    standalone: true,
    template: `
    
        <ng-content />
        
    `,
    styles: `
    
        :host
        {
            border: 1px solid rgb(225, 225, 225);
            background-color: rgb(255, 245, 228);
            padding: 0px 5px 0px 4px;
            margin: 0px 3px;
        }

    `
})
export class CommandComponent {}
import { Component } from "@angular/core";

import { CommandComponent } from "./command.component";

@Component({
    selector: 'app-right-arrow',
    standalone: true,
    imports: [
        CommandComponent
    ],
    template: `
    
        <app-command>
            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-arrow-right mb-1" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
            </svg>
        </app-command>
        
    `
})
export class RightArrowComponent {}
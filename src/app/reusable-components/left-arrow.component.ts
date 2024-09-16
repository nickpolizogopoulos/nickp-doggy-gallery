import { Component } from "@angular/core";

import { CommandComponent } from "./command.component";

@Component({
    selector: 'app-left-arrow',
    standalone: true,
    imports: [
        CommandComponent
    ],
    template: `

        <app-command>
            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-arrow-left mb-1" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
            </svg>
        </app-command>
    
    `
})
export class LeftArrowComponent {}
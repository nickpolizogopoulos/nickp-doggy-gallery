import { Component } from "@angular/core";

import { FirebaseLogoComponent } from "../reusable-components/firebase-logo.component";
import { AngularLogoComponent } from "../reusable-components/angular-logo.component";

@Component({
    selector: 'header[appHeader]',
    standalone: true,
    imports:
    [
        AngularLogoComponent,
        FirebaseLogoComponent
    ],
    template: `

        <h1>[ Project ] - Doggy Gallery</h1>
        <section>
            <app-angular-logo />
            <app-firebase-logo />
        </section>
        
    `,
    styles:`

        :host
        {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            border-bottom: 1px solid rgb(199, 199, 199);
            padding: 0 0 20px 0;
            margin: 0 0 20px 0;
            text-align: center;

            @media screen and (max-width: 1200px)
            {
                flex-direction: column;
                justify-content: center;
                align-items: center;
                h1 
                {
                    margin: 0 0 20px 0;
                }
            }
            @media screen and (max-width: 768px)
            {
                h1
                {
                    font-size: 3rem;
                }
            }
            @media screen and (max-width: 600px)
            {
                h1
                {
                    font-size: 2.5rem;
                }
            }
            
        }
        
        section 
        {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 2rem;
        }
    
    `
})
export class HeaderComponent {}
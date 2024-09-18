import { Component } from "@angular/core";
import { SocialMediaComponent } from "../reusable-components/social-media.component";

@Component({
    selector: 'footer[appFooter]',
    standalone: true,
    imports: [
        SocialMediaComponent
    ],
    template: `

        <ul>
            <li>
                <app-social-media />
            </li>
            <li>
                <a class="link" href="https://github.com/nickpolizogopoulos/nickp-doggy-gallery" target="_blank">
                    source code
                </a>
            </li>
        </ul>
        <span class="small-text">
            Images source: Instagram
        </span>

    `,
    styles: `   

        :host
        {
            margin-top: 50px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            
            @media screen and (max-width: 768px)
            {
                flex-direction: column;
                gap: 20px;
            }
        }

        ul
        {
            list-style-type: none;
            display: flex;
            gap: 30px;
            align-items: end;
            @media screen and (max-width: 465px)
            {
                flex-direction: column;
                align-items: center;
                gap: 20px;
            }
        }
    
        .link
        {
            color: orangered;
            text-decoration: none;
            &:hover
            {
                text-decoration: underline;
                text-decoration-thickness: 2px;
            }
        }

        .link,
        .small-text
        {
            &::before
            {
                content: '[ ';
            }
            &::after
            {
                content: ' ]';
            }
        }
    
    `,
})
export class FooterComponent {}
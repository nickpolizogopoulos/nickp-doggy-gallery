import { Component } from "@angular/core";
import { SocialMediaComponent } from "../reusable-components/social-media.component";

@Component({
    selector: 'footer[appFooter]',
    standalone: true,
    imports: [
        SocialMediaComponent
    ],
    template: `
    
        <section class="row">
            <div class="col-12 col-sm-6 col-md-6"> 
                <div class="row d-flex align-items-end">
                    <div class="col-block col-md-6 col-lg-5 col-xl-4 pt-4">
                        <app-social-media />
                    </div>
                    <div class="col-block col-md-6 col-lg-5 col-xl-4 pt-4">
                        <a class="alink" href="https://github.com/nickpolizogopoulos/nickp-doggy-gallery" target="_blank">[ source code ]</a>
                    </div>
                </div>
            </div>
            <div class="col-block col-sm-6 col-md-6 pt-4 d-flex justify-content-end align-items-end">
                <span class="small-text">[ Images source: Instagram ]</span>
            </div>
        </section>
    
    `,
    styles: `   
    
        .alink
        {
            color: orangered;
            text-decoration: none;
            &:hover
            {
                text-decoration: underline;
                text-decoration-thickness: 2px;
            }
        }
    
    `,
})
export class FooterComponent {}
import { Component, ViewEncapsulation } from '@angular/core';

@Component(
{
  selector: 'app-angular-logo',
  standalone: true,
  template: `

    <a href="https://angular.dev/" target="_blank">
      <img src="../assets/images/tools/angular.png" alt="Angular logo">
    </a>
  `,
  styles: `
  
    img
    {
      max-width: 12rem;
      
      @media screen and (max-width: 600px)
      {
        max-width: 9rem;
      }
      @media screen and (max-width: 477px)
      {
          max-width: 7rem;
      }
    }
  
  `
})
export class AngularLogoComponent {}
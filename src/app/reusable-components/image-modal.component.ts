import
{
    Component,
    EventEmitter,
    Input,
    Output
} from '@angular/core';

@Component(
{
  selector: 'app-image-modal',
  standalone: true,
  imports: [],
  template: `
  
    <div class="backdrop" (click)="onClose()">
        <div class="image-box user-select-none" (click)="$event.stopPropagation()">
            <img [src]="imageSrc" [alt]="sourceAlt">
            <p class="image-text"><i>#{{ imageNumber }} - {{ sourceAlt }}</i></p>
        </div>
        <div (click)="onClose()" class="close cursor-pointer user-select-none">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
            </svg>
        </div>
    </div>
  `,
  styles: [`

    .backdrop
    {
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.84);
        backdrop-filter: blur(2.5px);
        -webkit-backdrop-filter: blur(2px);
        z-index: 100;
        cursor: pointer;
    }

    .image-box
    {
        position: relative;
        width: 40vw;
        max-width: 90vw;
        z-index: 101;
        text-align: center;
        cursor: default;
    }

    img
    {
        width: 100%;
        height: auto;
    }

    .image-text
    {
        font-size: 16px;
        color: rgb(220,220,220);
    }

    .close
    {
        position: fixed;
        top: 30px;
        right: 30px;
        color: #D2D2D2;
        transition: transform 0.1s ease;
        border: 1px solid grey;
        border-radius: 4px;
        z-index: 102;
    }

    .close:hover
    {
        color: white;
        transform: scale(1.1);
    }
    
    .close:focus
    {
        transform: scale(-1.3);
    }

    @media screen and (max-width: 1300px)
    {
        .image-box
        {
            width: 50%;
        }
    }

    @media screen and (max-width: 1000px)
    {
        .image-box
        {
            width: 75%;
        }
    }

    @media screen and (max-width: 500px)
    {
        .image-box
        {
            width: 90%;
        }
    }
  `]
})
export class ImageModalComponent
{

  @Input() imageSrc?: string;
  @Input() sourceAlt?: string;
  @Input() imageNumber?: number;
  @Output() close = new EventEmitter<void>();

  onClose(): void
  {
    this.close.emit();
  }

}

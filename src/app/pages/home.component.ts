import 
{
    Component,
    HostListener,
    OnInit
} from "@angular/core";
import { NgClass } from "@angular/common";

import { AngularLogoComponent } from "../reusable-components/angular-logo.component";
import { ImageModalComponent } from "../reusable-components/image-modal.component";
import { RemoveIconComponent } from "../reusable-components/remove-icon.component";
import { LeftArrowComponent } from "../reusable-components/left-arrow.component";
import { RightArrowComponent } from "../reusable-components/right-arrow.component";
import { SocialMediaComponent } from "../reusable-components/social-media.component";
import { FirebaseLogoComponent } from "../reusable-components/firebase-logo.component";

interface Image
{
  id: number;
  source: string;
  alt: string;
}

@Component(
    {
        selector: 'app-home',
        templateUrl: 'home.component.html',
        standalone: true,
        imports:
        [
            NgClass,
            AngularLogoComponent,
            ImageModalComponent,
            RemoveIconComponent,
            LeftArrowComponent,
            RightArrowComponent,
            SocialMediaComponent,
            FirebaseLogoComponent
        ],
    }
)
export class HomeComponent implements OnInit
{

    ngOnInit(): void
    {
        this.addImages();
    }
    
    selectedImage: Image | null = null;
    dogImagesLocation: string = '././assets/images/dogs/';
    imageFileType: string = '.jpg'
    numberOfImages: number = 12;
    images: Image[] = [];
    editModeOn: boolean = false;
    toast: boolean = false;
    
    addImages(): void
    {
      this.editModeOn = false;
      for (let i = 1; i <= this.numberOfImages; i++ )
        this.images.push(
          {
            id: i,
            source: this.dogImagesLocation + i.toString() + this.imageFileType,
            alt: 'Good boy no.' + i.toString()
          }
        );
    }
  
    onEdit(): void
    {
      this.editModeOn = true;
    }
  
    onSave(): void
    {
      this.editModeOn = false;
    }
    
    showImage( id: number ): void
    {
      if (!this.editModeOn)
        for (let image of this.images)
          if (id === image.id)
            {
              this.selectedImage = image;
              return;
            }
    }
        
    onDeleteManual( id: number ): void
    {  
      const index = this.images.findIndex(image => image.id === id);
      if (index !== -1)
        this.images.splice(index, 1);
    }
  
    onDeleteFirst(): void {
      if (!this.editModeOn)
        return;
      this.images.shift();
    }
  
    closeImage(): void
    {
      this.selectedImage = null;
    }
  
    nextImage(): void
    {
      if (!this.selectedImage)
        return;
      const index = this.images.findIndex(image => image.id === this.selectedImage!.id);
      if (index === this.images.length - 1) //* for infinite next
        this.selectedImage = this.images[index - (this.images.length - 1)]; //* for infinite next
      if (index < this.images.length - 1)
        this.selectedImage = this.images[index + 1];
    }
  
    previousImage(): void
    {
      if (!this.selectedImage)
        return;
      const index = this.images.findIndex(image => image.id === this.selectedImage!.id);
      if (index === 0) //* for infinite previous
        this.selectedImage = this.images[index + (this.images.length - 1)]; //* for infinite previous
      if (index > 0)
        this.selectedImage = this.images[index - 1];
    }
    
    @HostListener('document:keydown.escape', ['$event']) 
    onEscKeyPress(): void
    {
      this.closeImage();
      this.editModeOn = false;
      this.toast = false;
    }
    
    @HostListener('document:keydown.ArrowRight', ['$event'])
    onRightArrowKeyPress(): void
    {
      this.nextImage();
    }
    
    @HostListener('document:keydown.ArrowLeft', ['$event'])
    onLeftArrowKeyPress(): void
    {
      this.previousImage();
    }

    //* the onKeyDown method can have the event.preventDefault();
    //* to avoid duplicating it in every other method below
    //* but this will affect the whole keyboard while I only
    //* need cmd + S, E, D, G combinations.
  
    @HostListener('document:keydown', ['$event'])
    onKeydown( event: KeyboardEvent ): void
    {
      if ((event.key || event.ctrlKey) && event.key === 's')
        this.onCmdS(event);
  
      if ((event.key || event.ctrlKey) && event.key === 'e')
        this.onCmdE(event);
  
      if ((event.key || event.ctrlKey) && event.key === 'd')
        this.onCmdD(event);
  
      if ((event.key || event.ctrlKey) && event.key === 'g')
        this.onCmdG(event);
    }
  
    onCmdS( event: KeyboardEvent ): void
    {
      event.preventDefault();
      if (!this.editModeOn)
        return;
      this.onSave();
    }
  
    onCmdE( event: KeyboardEvent ): void
    {
      event.preventDefault();
      if (this.selectedImage)
      {
        this.toast = true;
        setTimeout( () => this.toast = false, 2200);
        return;
      }
      this.onEdit();
    }
  
    onCmdD( event: KeyboardEvent ): void
    {
      event.preventDefault();
      if (this.selectedImage)
        return;
      this.onDeleteFirst();
    }
  
    onCmdG( event: KeyboardEvent ): void
    {
      event.preventDefault();
      if (this.images.length !== 0)
        return;
      this.addImages();
    }
  
  }
  
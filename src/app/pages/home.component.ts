import 
{
    Component,
    HostListener,
    OnInit,
    signal
} from "@angular/core";

import { ImageModalComponent } from "../reusable-components/image-modal.component";
import { RemoveIconComponent } from "../reusable-components/remove-icon.component";
import { LeftArrowComponent } from "../reusable-components/left-arrow.component";
import { RightArrowComponent } from "../reusable-components/right-arrow.component";
import { CommandComponent } from "../reusable-components/command.component";
import { type Image } from '../utilities/image'
import { HeaderComponent } from "../common/header.component";
import { FooterComponent } from "../common/footer.component";

@Component(
{
  selector: 'app-home',
  templateUrl: 'home.component.html',
  standalone: true,
  imports:
  [
    HeaderComponent,
    ImageModalComponent,
    RemoveIconComponent,
    CommandComponent,
    LeftArrowComponent,
    RightArrowComponent,
    FooterComponent
  ]
})
export class HomeComponent implements OnInit
{

  ngOnInit(): void
  {
      this.addImages();
  }
  
  private dogImagesLocation = signal<string>('././assets/images/dogs/');
  private numberOfImages = signal<number>(12);
  
  selectedImage = signal<Image | null>(null);
  images = signal<Image[]> ([]);
  editModeOn = signal<boolean>(false);
  toast = signal<boolean>(false);

  addImages(): void
  {
    this.editModeOn.set(false);
    for (let i = 1; i <= this.numberOfImages(); i++ )
      this.images().push(
        {
          id: i,
          source: this.dogImagesLocation() + i.toString() + '.jpg',
          alt: 'Good boy no.' + i.toString()
        }
      );
  }

  onEdit(): void
  {
    this.editModeOn.set(true);
  }

  onSave(): void
  {
    this.editModeOn.set(false);
  }
  
  showImage( id: number ): void
  {
    if (!this.editModeOn())
      for (let image of this.images())
        if (id === image.id)
          {
            this.selectedImage.set(image);
            return;
          }
  }
      
  onDeleteManual( id: number ): void
  {  
    const index = this.images().findIndex(image => image.id === id);
    if (index !== -1)
      this.images().splice(index, 1);
  }

  onDeleteFirst(): void
  {
    if (!this.editModeOn())
      return;
    this.images().shift();
  }

  closeImage(): void
  {
    this.selectedImage.set(null);
  }

  nextImage(): void
  {
    if (!this.selectedImage())
      return;

    const index = this.images().findIndex(image => image.id === this.selectedImage()!.id);

    if (index === this.images().length - 1) //* for infinite next
      this.selectedImage.set(this.images()[index - (this.images().length - 1)]); //* for infinite next
      
    if (index < this.images().length - 1)
      this.selectedImage.set(this.images()[index + 1]);
  }

  previousImage(): void
  {
    if (!this.selectedImage())
      return;

    const index = this.images().findIndex(image => image.id === this.selectedImage()!.id);
    
    if (index === 0) //* for infinite previous
      this.selectedImage.set(this.images()[index + (this.images().length - 1)]); //* for infinite previous

    if (index > 0)
      this.selectedImage.set(this.images()[index - 1]);
  }
  
  @HostListener('document:keydown.escape', ['$event']) 
  onEscKeyPress(): void
  {
    this.closeImage();
    this.editModeOn.set(false);
    this.toast.set(false);
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
    if ((event.metaKey || event.ctrlKey) && event.key === 's')
      this.onCmdS(event);

    if ((event.metaKey || event.ctrlKey) && event.key === 'e')
      this.onCmdE(event);

    if ((event.metaKey || event.ctrlKey) && event.key === 'd')
      this.onCmdD(event);

    if ((event.metaKey || event.ctrlKey) && event.key === 'g')
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
    if (this.selectedImage())
    {
      this.toast.set(true);
      setTimeout( () => this.toast.set(false), 2200);
      return;
    }
    this.onEdit();
  }

  onCmdD( event: KeyboardEvent ): void
  {
    event.preventDefault();
    if (this.selectedImage())
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
  
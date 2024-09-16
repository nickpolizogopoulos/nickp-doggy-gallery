import
{
    Component,
    output,
} from "@angular/core";

@Component(
{
    selector: 'app-remove-icon',
    standalone: true,
    template: `
    
        <div (click)="onDelete()" class="remove-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor" class="bi bi-trash text-danger" viewBox="0 0 16 16">
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
            </svg>
        </div>
    
    `,
    styles: `
    
        :host
        {
            position: absolute;
            background-color: rgba(255, 255, 255, 0.5);
            display: flex;
            border-radius: 5px;
            padding: 3px;
            margin: 9px -2px;
            border: 1px solid white;
            cursor: pointer;
            transition: all .1s ease-in-out; 

            &:hover
            {
                background-color: rgba(255, 255, 255, 0.8);
                transform: scale(1.12);
            }
        }
    
    `
})
export class RemoveIconComponent
{

    delete = output<void>();

    onDelete(): void
    {
        this.delete.emit();
    }

}
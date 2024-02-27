import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-open-ticket',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './open-ticket.component.html',
  styles: ``
})
export class OpenTicketComponent {

  TicketValue!:string
  isDisplayed:boolean=true
  toggleDisplay(){
    this.isDisplayed = !this.isDisplayed
  
  }
  
  
  @Output() confirmDelete=new EventEmitter();
  ConfirmTicket(){
 if(this.TicketValue)
      {console.log(this.TicketValue); }   
    
   

    // this.confirmDelete.emit();
  }
 
}


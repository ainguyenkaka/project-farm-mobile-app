import { Component , Input} from '@angular/core';


@Component({
  selector: 'customer-info',
  templateUrl: 'customer-info.html'
})
export class CustomerInfoComponent {

  @Input() customInfo: any;

  constructor() {
    
  }
  

}

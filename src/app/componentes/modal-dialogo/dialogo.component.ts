import { Component, OnInit , Input, ViewChild} from '@angular/core';
import { NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-dialogo',
  templateUrl: './dialogo.component.html',
  styleUrls: ['./dialogo.component.css']
})
export class DialogoComponent implements OnInit {
 
    @Input() my_modal_title;
    @Input() my_modal_content;
    @Input() esVisible = false;
    
    constructor(public activeModal: NgbActiveModal) {  }
   
    ngOnInit() {
    }  
}

import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() msg:any;
  @Input() name:any;
  @Output() toParent =new EventEmitter();
  constructor() {
    

   }

  ngOnInit() {
  
  }

  requestData(){
    this.toParent.emit("this a board cast from header")
  }
}

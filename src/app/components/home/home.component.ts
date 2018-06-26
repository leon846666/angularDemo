import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public msg="this is a msg from home";


  constructor() { }

  ngOnInit() {
  }

  run(){
    alert("click run()")
  }

  getData(data){
    alert(data+"   test ")
  }

}

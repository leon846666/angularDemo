import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public msg="this is a data from child";
  public name="cart name from child";
  constructor() { }

  ngOnInit() {
  }


  testCart(){
    alert("test cart() is called!")
  }
}

import { Component, OnInit,ViewChild } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  // define  the child component, note the parameter must be same with <app-cart #cart></app-cart>
  @ViewChild('cart') cart;

  constructor() { }

  ngOnInit() {
  }

  getDataFromChild(){
   // this.cart.testCart();
    alert(this.cart.msg) 
    this.cart.name="parent component can change the name from child ";

  }

}

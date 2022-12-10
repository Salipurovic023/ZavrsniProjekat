import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ShoppingService } from 'src/app/services/shopping.service';

@Component({
  selector: 'app-productorder',
  templateUrl: './productorder.component.html',
  styleUrls: ['./productorder.component.css']
})
export class ProductorderComponent implements OnInit {

  constructor(
    private router: Router,
    private shoppingService: ShoppingService
  ) { }

  ngOnInit(): void {
  }
  confirmOrder(myForm:NgForm) {
    console.log(myForm);
    this.router.navigate(['/']);
    this.shoppingService.cartChange.emit(0);
    this.shoppingService.cart = [];
  }
}

import { Component, OnInit } from '@angular/core';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import {faCircleUser} from '@fortawesome/free-solid-svg-icons';
import{faSortDown} from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth.service';
import { ShoppingService } from 'src/app/services/shopping.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  faShoppingCart = faShoppingCart;
  faCircleUser = faCircleUser;
  faSortDown = faSortDown;

  numberOfProducts = 0;

  constructor(
    private shoppingService: ShoppingService,
    public authService: AuthService
  ) { }

  ngOnInit(): void {
    this.shoppingService.cartChange.subscribe(
      item => this.numberOfProducts = item
    )
  }

}

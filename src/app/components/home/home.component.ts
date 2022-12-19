import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    console.log(form);
  }

  loadShop(){
    this.router.navigate(['/shop','Sympathy']);
  }

  shopGetWell(){
    this.router.navigate(['/shop','Get-well'])
  }
}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  onSubmit(form:NgForm){
    console.log(form);
  }

  logIn(email:string, password:string){
    this.authService.signIn(email,password);
    this.router.navigate(['/shop','Sympathy']);
  }

}

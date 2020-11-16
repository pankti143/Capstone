
import { ILogin, Login } from 'src/app/entities/login/login.model';
import{LoginService} from 'src/app/entities/login/login.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import{NgForm} from '@angular/forms'
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userloginForm: FormGroup;
  name: string = '';
  email:string='';
  password:string='';
  error: boolean = false;

  @Output() createdLogin = new EventEmitter<ILogin>();

  constructor(private router:Router,protected loginService:LoginService, protected formBuilder: FormBuilder) { }

  // Init the form when starting the view.
  ngOnInit(): void {
    this.initForm();
  }

  // Manage the submit action and create the new product.
  onSubmit() {
    const login = new Login(this.userloginForm.value['name'],this.userloginForm.value['email'],this.userloginForm.value['password'], null);
    this.loginService.create(login).then((result: ILogin) => {
      if (result === undefined) {
        this.error = true;
      } else {
        this.error = false;
        this.createdLogin.emit(result);
      }
      this.router.navigate(['userhomepage'])
    });
  }
  // Hide the error message.
  hideError() {
    this.error = false;
  }

  // Init the creation form.
  private initForm() {
    this.userloginForm = new FormGroup({
      name: new FormControl(this.name, Validators.required),
  //name:new FormControl(this.name,Validators.pattern(/[a-zA-Z0-9] +@[a-zA-Z0-9]+[.][a-zA-Z0-9]+/)),
      email:new FormControl(this.email,Validators.pattern(/^([A-Za-z0-9_\-\.])+\@gmail.com$/)),
      password:new FormControl(this.password,Validators.required),
    });
  }

}


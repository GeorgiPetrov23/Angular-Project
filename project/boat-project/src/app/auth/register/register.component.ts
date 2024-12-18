import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { emailValidator } from '../../utils/email.validator';
import { DOMAINS } from '../../constants';
import { matchPasswordsValidator } from '../../utils/match-passwords.validator';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  imports: [RouterLink, ReactiveFormsModule],
  standalone: true,
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  constructor(private router: Router, private userService: UserService){}
  form = new FormGroup({
    username: new FormControl('', [
      Validators.required, 
      Validators.minLength(5),
    ]),
    email: new FormControl('', [
      Validators.required,
      emailValidator(DOMAINS),
    ]),
    passGroup:  new FormGroup({
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      rePassword: new FormControl('', [Validators.required]),
    },
    {
      validators: [matchPasswordsValidator('password', "rePassword")],
    }
  ),
});

  get passGroup(){
    return this.form.get('passGroup');
  }

  register(){
    if(this.form.invalid){
      return;
    }
    const {username, email, passGroup:{ password, rePassword } = {} } = this.form.value;
    this.userService.register(username!, email!, password!, rePassword!)
    .subscribe(() => {
      this.router.navigate(["/"]);
    })
  }
}

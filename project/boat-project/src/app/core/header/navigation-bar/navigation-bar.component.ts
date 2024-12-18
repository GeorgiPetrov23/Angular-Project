import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserService } from '../../../auth/user.service';

@Component({
  selector: 'app-navigation-bar',
  imports: [RouterLink],
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.css'
})
export class NavigationBarComponent {

  get isLoggedIn(): boolean {
    return this.userService.isLoggedIn;
  }
  constructor(private userService: UserService) {}

  logout(){
    this.userService.logout();
  }
} 

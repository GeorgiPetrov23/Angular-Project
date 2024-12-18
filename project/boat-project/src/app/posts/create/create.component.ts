import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ApiService } from '../../api.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-create',
  imports: [FormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {

  constructor(private router: Router, private apiService: ApiService){}

  create(form: NgForm){
    if(form.invalid){
      return; 
    }
    const {name, companyName, length, range, rechargeTime, imageUrl} = form.value;
    this.apiService.postBoat(name, companyName, length, range, rechargeTime, imageUrl).subscribe(() =>{
      this.router.navigate(['/catalog'])
    })
  };
}

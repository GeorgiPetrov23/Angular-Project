import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../api.service';
import { Boat } from '../../types/Boat';

@Component({
  selector: 'app-catalog',
  imports: [RouterLink],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})
export class CatalogComponent implements OnInit {
  boats: Boat[] = [];
  
  constructor(private apiService: ApiService){}

  ngOnInit(): void {
    debugger;
    this.apiService.getBoats().subscribe((boats) => {
      debugger;
      console.log(boats);
      this.boats = boats;
    })
  } 
}

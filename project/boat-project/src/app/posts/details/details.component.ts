import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../api.service';
import { Boat } from '../../types/Boat';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit{
  constructor(private route: ActivatedRoute, private apiService: ApiService) {}
  boat : Boat | null = null;
  ngOnInit(): void {
    
    this.route.params.subscribe((data) => {
      return this.apiService.getSingleBoat(data['boatId']).subscribe((boat) => {
        this.boat = boat;
      });
    })

  }
}

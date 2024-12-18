import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { User } from './types/User';
import { Boat, BoatForCreate } from './types/Boat';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getUsers(){
    const { apiURL } = environment;
    return this.http.get<User[]>(`${apiURL}/api/users`);
  }

  getBoats() {
    const request = this.http.get<Boat[]>(`/api/boats`); 
    debugger;
    return request;
  }

  getSingleBoat(id: string){
    return this.http.get<Boat>(`/api/boats/${id}`);
  }

  postBoat(name: string,
    companyName: string,
    length: number,
    range: number,
    rechargeTime: number,
    imageUrl: string,){
    const payload = {name, companyName, length, range, rechargeTime, imageUrl};
    return this.http.post<BoatForCreate>(`/create`, payload);
  }

  editPost(name: string,
    companyName: string,
    length: number,
    range: number,
    rechargeTime: number,
    imageUrl: string,){

    };
}

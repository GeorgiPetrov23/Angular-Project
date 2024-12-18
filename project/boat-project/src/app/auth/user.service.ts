import { Injectable } from '@angular/core';
import { User } from '../types/User';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user$$ = new BehaviorSubject<User | undefined>(undefined);
  private user$ = this.user$$.asObservable();


  USER_KEY = '[user]';
  user : User | null = null;

  get isLoggedIn(): boolean {
    return !!this.user;
  }
  constructor(private http: HttpClient) {
    try{
      const lsUser = localStorage.getItem(this.USER_KEY) || '';
      this.user = JSON.parse(lsUser);
    }catch(err){
      this.user = null
    }
  }

  register(username: string, email: string, password: string, rePassword: string){
    return this.http
    .post<User>('/api/register', {username, email, password, rePassword})
    .pipe(tap((user) => this.user$$.next(user)));

  }
  login(email: string, password: string){
    return this.http.post<User>('/api/login', {email, password})
    .pipe(tap((user) => this.user$$.next(user)));
  }

  logout(){
    this.user = null;
    localStorage.clear();
  }

}

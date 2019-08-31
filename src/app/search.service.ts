import { Injectable } from '@angular/core';
import { User } from "./user";
import { Repo } from "./repo";
import { HttpClient } from '@angular/common/http';
import {environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  user: User;
  repo: Repo[];

  constructor(private http:HttpClient) { 
    this.user = new User(0,"","",0);
    this.repo = [];
  }
  
  userRequest(){
    interface ApiResponse{
      login:string;
      id: number;
      avatar_url:string;
      public_repos: number;
    }
    
}

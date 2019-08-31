import { Injectable } from '@angular/core';
import { User } from "./user";
import { Repo } from "./repo";
import { HttpClient } from '@angular/common/http';
import {environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  users: User;
  repos: Repo[];

  constructor(private http:HttpClient) { 
    this.users = new User(0,"","",0);
    this.repos = [];
  }
  
  userRequest(){
    interface ApiResponse{
      login:string;
      id: number;
      avatar_url:string;
      public_repos: number;
    }

    let promise = new Promise((resolve,reject)=>{
      this.http.get<ApiResponse>(environment.apikey).toPromise().then(response=>{
        this.users.name = response.login;
            this.users.avatar = response.avatar_url;
            this.users.repos = response.public_repos;
            this.users.id = response.id;
            console.log(this.users);

        resolve()
      },
      error=>{
        this.users.name = "next next time";
            this.users.avatar = "ooops!! next time";
            this.users.repos = 0;
            this.users.name = "next time";

        reject(error);
      });
    });
    return promise;
  }

  repoDemand(ide) {
    interface ApiResponse {
      name: string;
      description: string;
    }
    let promise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse>("https://api.github.com/users/" + ide +"/repos?access_token=" +environment.apikey).toPromise().then(response => {
            for (var j in response) {
              this.repos.push(response[j]);
            }
            console.log(this.repos);
            resolve();
          },
          error => {
            this.users.name = "next time next time";
            this.users.avatar = "ooops!! next time";
            this.users.repos = 0;
            this.users.name = "next time";
            reject(error);
          }
        );
    });
    return promise;
  }
}

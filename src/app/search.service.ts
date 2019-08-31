import { Injectable } from '@angular/core';
import { User } from "./user";
import { Repo } from "./repo";

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  getuser(){
    return User
  }

  constructor() { }
}

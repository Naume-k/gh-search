import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { User } from "../user";
import { Repo } from "../repo";

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  goToUrl(id) {
    this.router.navigate(["/search-details", id]);
  }
  repo: Repo[];
  user: User;

  constructor() { }

  ngOnInit() {
  }

}

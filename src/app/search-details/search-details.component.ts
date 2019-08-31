import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { User } from "../user";
import { Repo } from "../repo";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-search-details',
  templateUrl: './search-details.component.html',
  styleUrls: ['./search-details.component.css']
})
export class SearchDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

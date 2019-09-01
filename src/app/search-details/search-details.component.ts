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
  searchservice: SearchService;
  user: User;
  repo: Repo[];

  constructor(
    private search: SearchService,
    private router: ActivatedRoute
  ) { }

  ngOnInit() {
    let id = this.router.snapshot.paramMap.get("id");
    this.search.userDemand(id);
    this.search.repoDemand(id);

    this.user = this.search.users;
    this.repo = this.search.repos;
  }

}

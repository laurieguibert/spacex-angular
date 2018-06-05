import { Component, OnInit } from '@angular/core';
import { SpacexApiService } from '../spacex-api.service';

@Component({
  selector: 'app-missions',
  templateUrl: './missions.component.html',
  styleUrls: ['./missions.component.css']
})
export class MissionsComponent implements OnInit {
  launches: Launch[];

  constructor(private spacexApi: SpacexApiService) {
    this.spacexApi.getLaunches().subscribe(data => {
      this.launches = data;
    });
  }

  ngOnInit() {
  }

}

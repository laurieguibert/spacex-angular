import { Component, OnInit } from '@angular/core';
import { SpacexApiService } from 'src/app/Services/spacex-api.service';
import { LaunchEndpoints } from 'src/app/Services/LaunchEndpoint';

@Component({
  selector: 'app-missions',
  templateUrl: './missions.component.html',
  styleUrls: ['./missions.component.css']
})
export class MissionsComponent implements OnInit {
  launches: Launch[] | Launch;

  /*constructor(private spacexApi: SpacexApiService) {
    this.spacexApi.getAllLaunches({flight_number: 63}).subscribe(data => {
      this.launches = data;
    });
  }*/

  constructor(private spacexApi: SpacexApiService) {
    this.spacexApi.getAllLaunches().subscribe(data => {
      this.launches = data;
    });
  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { SpacexApiService } from 'src/app/Services/spacex-api.service';
import { LaunchEndpoints } from 'src/app/Services/LaunchEndpoint';
import { ActivatedRoute } from '@angular/router';
import { MatTabChangeEvent } from '@angular/material';

@Component({
  selector: 'app-missions',
  templateUrl: './missions.component.html',
  styleUrls: ['./missions.component.css']
})
export class MissionsComponent implements OnInit {
  upcomingLaunches: Launch[];
  pastLaunches: Launch[];

  constructor(private spacexApi: SpacexApiService,
    private activatedRoute: ActivatedRoute) {
      this.loadPastLaunch();
      this.loadUpcomingLaunch();
  }

  ngOnInit() {
  }

  loadMissions(event: MatTabChangeEvent) {
    switch (event.index) {
      case 0:
        this.loadUpcomingLaunch();
        break;
      case 1:
        this.loadPastLaunch();
        break;
    }
  }

  loadUpcomingLaunch() {
    this.spacexApi.getUpcomingLaunches({ id: true, order: 'desc' })
      .subscribe((data: Launch[]) => {
        this.upcomingLaunches = data;
      });
  }

  loadPastLaunch() {
    this.spacexApi.getPastLaunches({ id: true, order: 'desc' })
      .subscribe((data: Launch[]) => {
        this.pastLaunches = data;
      });
  }
}

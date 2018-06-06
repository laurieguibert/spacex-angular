import { Component, OnInit } from '@angular/core';
import { SpacexApiService } from 'src/app/Services/spacex-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rocket-list',
  templateUrl: './rocket-list.component.html',
  styleUrls: ['./rocket-list.component.scss']
})
export class RocketListComponent implements OnInit {
  rockets: Rocket[];
  constructor(private spacexApi: SpacexApiService,
    private router: Router) {
    this.spacexApi.getAllRockets().subscribe(data => this.rockets = data);
   }

  ngOnInit() {

  }

  goToRocketDetails(rocketId: string) {
    this.router.navigate(['rockets/' + rocketId]);
  }
}

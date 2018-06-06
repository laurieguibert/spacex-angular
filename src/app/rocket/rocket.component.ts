import { Component, OnInit } from '@angular/core';
import { SpacexApiService } from 'src/app/Services/spacex-api.service';

@Component({
  selector: 'app-rocket',
  templateUrl: './rocket.component.html',
  styleUrls: ['./rocket.component.css']
})
export class RocketComponent implements OnInit {
  rockets : Rocket[];
  rocket : Rocket;

  constructor(private spacexApi: SpacexApiService) {
    this.spacexApi.getAllRockets().subscribe((data : Rocket[]) => {
      this.rockets = data;
    });
  }

  ngOnInit() {
  }

  loadDetailsRocket(rocketId : string){
    this.spacexApi.getRocket(rocketId).subscribe((data : Rocket) => {
      this.rocket = data;
    });
  }
}

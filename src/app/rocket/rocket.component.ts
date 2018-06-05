import { Component, OnInit } from '@angular/core';
import { SpacexApiService } from 'src/app/services/spacex-api.service';

@Component({
  selector: 'app-rocket',
  templateUrl: './rocket.component.html',
  styleUrls: ['./rocket.component.css']
})
export class RocketComponent implements OnInit {

  constructor(private spacexApi: SpacexApiService) {
  }

  ngOnInit() {
  }

}

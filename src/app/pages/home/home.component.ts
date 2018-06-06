import { Component, OnInit } from '@angular/core';
import { SpacexApiService } from 'src/app/Services/spacex-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  launch: Launch;

  constructor(private spacexApi: SpacexApiService,
    private route: ActivatedRoute) {
    this.spacexApi.getLaunchDetails(63).subscribe(data =>
    this.launch = data);
  }
  ngOnInit() {
  }
}

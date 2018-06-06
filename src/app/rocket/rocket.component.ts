import { Component, OnInit , Input} from '@angular/core';
import { SpacexApiService } from 'src/app/Services/spacex-api.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rocket',
  templateUrl: './rocket.component.html',
  styleUrls: ['./rocket.component.css']
})
export class RocketComponent implements OnInit {
  @Input() rocket: Rocket;

  constructor(private spacexApi: SpacexApiService,
    private route: ActivatedRoute,
    private router: Router ) {
    const rocketId = this.route.snapshot.params.rocket_id;
    this.loadDetailsRocket(rocketId);
  }

  ngOnInit() {
  }

  loadDetailsRocket(rocketId: string) {
    this.spacexApi.getRocket(rocketId).subscribe((data: Rocket) => {
      this.rocket = data;
    });
  }
}

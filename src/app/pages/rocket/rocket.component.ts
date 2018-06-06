import { Component, OnInit , Input} from '@angular/core';
import { SpacexApiService } from '../../Services/spacex-api.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rocket',
  templateUrl: './rocket.component.html',
  styleUrls: ['./rocket.component.scss']
})
export class RocketComponent implements OnInit {
  @Input() rocket: Rocket;

  links = [
    {
      name: 'Falcon 9 pricing',
      href: '',
      action: '',
      isActive: false
    },
    {
      name: 'launch manifest',
      href: '',
      action: '',
      isActive: false
    },
    {
      name: 'Falcon 9 user\'s guide',
      href: '',
      action: '',
      isActive: false
    },
  ];

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

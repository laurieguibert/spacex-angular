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

  items = [
    {
      thumbnail: 'https://image.ibb.co/krOwno/falcon9_thumb_droneship.jpg',
      title: 'droneship landing',
      created_at: 'April 8, 2016',
      description: 'First successful landing of Falcon 9 first stage on droneship.'
    },
    {
      thumbnail: 'https://image.ibb.co/hhZmno/dragon_thumb.jpg',
      title: 'space station resupply',
      created_at: 'April 8, 2016',
      description: 'Dragon returns to the Space Station, delivering supplies for the crew.'
    },
    {
      thumbnail: 'https://image.ibb.co/f4oJ08/falcon9_thumb_lz1.jpg',
      title: 'the falcon has landed',
      created_at: 'December 21, 2015',
      description: 'First successful landing of Falcon 9 first stage on land.'
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

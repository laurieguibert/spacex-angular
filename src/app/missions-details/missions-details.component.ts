import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpacexApiService } from 'src/app/Services/spacex-api.service';

@Component({
  selector: 'app-missions-details',
  templateUrl: './missions-details.component.html',
  styleUrls: ['./missions-details.component.scss']
})
export class MissionsDetailsComponent implements OnInit {
  launch: Launch;

  constructor(private spacexApi: SpacexApiService,
    private route: ActivatedRoute) { 
    const flight_number = this.route.snapshot.params.flight_number;
    this.spacexApi.getLaunchDetails(flight_number).subscribe(data => this.launch = data);
  }

  ngOnInit() {
  }

}

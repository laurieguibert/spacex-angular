import { Component, OnInit } from '@angular/core';
import { SpacexApiService } from 'src/app/services/spacex-api.service';

@Component({
  selector: 'app-capsule',
  templateUrl: './capsule.component.html',
  styleUrls: ['./capsule.component.scss']
})
export class CapsuleComponent implements OnInit {
  capsules : Capsule[];
  capsule : Capsule;

  constructor(private spacexApi: SpacexApiService) {
    this.spacexApi.getAllCapsules().subscribe((data : Capsule[]) => {
      this.capsules = data;
    });
  }

  ngOnInit() {
  }

  loadDetailsCapsule(capsuleId : string){
    this.spacexApi.getCapsule(capsuleId).subscribe((data : Capsule) => {
      this.capsule = data;
    });
  }
}

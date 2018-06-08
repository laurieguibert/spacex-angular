import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-launch',
  templateUrl: './launch.component.html',
  styleUrls: ['./launch.component.css']
})
export class LaunchComponent implements OnInit {
  @Input() launch: Launch;
  constructor(private router: Router) { }

  navigateToLaunchDetails() {
    this.router.navigate([`missions/${this.launch.flight_number}`]);
  }

  ngOnInit() {
  }
}

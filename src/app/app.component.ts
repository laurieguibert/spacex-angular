import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  links = [
    {
      name: 'Falcon 9',
      href: 'rockets/falcon9',
      action: 'goToRocketDetails(falcon9)',
      isActive: false
    },
    {
      name: 'Falcon Heavy',
      href: 'rockets/falconheavy',
      action: 'goToRocketDetails(falconheavy)',
      isActive: false
    },
    {
      name: 'Missions',
      href: 'missions',
      isActive: false
    },{
      name: 'About SpaceX',
      href: 'about',
      isActive: false
    }
  ];
}


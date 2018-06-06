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
      href: '/#!/'
    },
    {
      name: 'Falcon Heavy',
      href: '/#!/'
    },
    {
      name: 'Dragon',
        href: '/#!/'
    },
    {
      name: 'Updates',
        href: '/#!/'
    },
    {
      name: 'About SpaceX',
        href: '/#!/'
    }
  ];
}


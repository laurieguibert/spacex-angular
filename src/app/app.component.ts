import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'app';
links = [
  {name: 'Falcon 9', component: '', href: '/#!/'},
{name: 'Falcon Heavy', component: '', href: '/#!/'},
{name: 'Dragon', component: '', href: '/#!/'},
{name: 'Updates', component: '', href: '/#!/'},
{name: 'About SpaceX', component: '', href: '/#!/'},
{name: 'Careers', component: '', href: '/#!/'},
{name: 'Gallery', component: '', href: '/#!/'},
{name: 'Home', component: '', href: 'home'},
];
}


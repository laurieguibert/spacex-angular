import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})

export class NavigationComponent implements OnInit {
  @Input() links;

  constructor() { }

  ngOnInit() {
  }

  activeLink(link) {
    this.links.forEach(item => {
      item.isActive = false;
    });
    link.isActive = !link.isActive;
  }
}

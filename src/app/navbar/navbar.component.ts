import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {
  @Input() links;
  constructor() {
  }
  ngOnInit() {
  }
}

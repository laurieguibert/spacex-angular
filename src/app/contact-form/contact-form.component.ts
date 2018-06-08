import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/contact';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  model = new Contact(1, 'test@test.fr', 'this is the content of the contact form.');

  submitted = false;

  onSubmit() { this.submitted = true; }

  constructor() { }

  ngOnInit() {
  }
}

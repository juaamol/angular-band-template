import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  name = new FormControl('');
  mail = new FormControl('');
  message = new FormControl('');
  
  information = [
    { icon: 'place', info: 'Chicago, US'},
    { icon: 'local_phone', info: 'Phone: +00 151515'},
    { icon: 'mail', info: 'Email: mail@mail.com'},
  ]
  constructor() { }

  ngOnInit() {
  }

}

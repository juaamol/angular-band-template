import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-band-member',
  templateUrl: './band-member.component.html',
  styleUrls: ['./band-member.component.css']
})
export class BandMemberComponent implements OnInit {

  @Input() src: string;
  @Input() alt: string;
  @Input() name: string;
  
  constructor() { }

  ngOnInit() {
  }

}

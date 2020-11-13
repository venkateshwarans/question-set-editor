import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ld-sb-form',
  templateUrl: './sb-form.component.html',
  styleUrls: ['./sb-form.component.css']
})
export class SbFormComponent implements OnInit {
  @Input() editor: any;

  constructor() { }

  ngOnInit() {
  }

}

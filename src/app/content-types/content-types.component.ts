import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ld-content-types',
  templateUrl: './content-types.component.html',
  styleUrls: ['./content-types.component.css']
})
export class ContentTypesComponent implements OnInit {
  @Input() contentTypeCards: any;
  @Output() emitContentType = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {

  }

  selectContentType(event, data) {
    this.emitContentType.emit({
      event, data
    });
  }

}

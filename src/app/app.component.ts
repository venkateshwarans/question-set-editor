import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
// import { Show, SunbirdService } from 'sunbird';
import * as _ from 'lodash-es';
import { data1 } from './quml-library-data';
import { contentTypes } from './contentType-data';
enum modeType {
  Editor = 'Editor',
  Player = 'Player',
  ContentTypes = 'ContentTypes'
}

@Component({
  selector: 'ld-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public item;
  editorState: any = {};
  title = 'ckeditor-and-quml-player';
  treeData: any;
  contentTypeCards = _.groupBy(contentTypes, 'category');
  public mode: modeType;
  QumlPlayerConfig = data1;

  @Output() public contentSelect: EventEmitter<{id: string, title: string, parentId?: string}> = new EventEmitter();
  constructor() {
  }

  ngOnInit() {

  }

  public changeMode(value) {
    this.mode = value;
  }

  public onItemSelect(item: any) {
    if (!item.folder) {
      this.item = item;
      console.log(this.item.data);
      this.editorState.question = this.item.data.body;
      this.editorState.solution = this.item.data.solutions[0].value;
      this.editorState.options = this.item.data.interactions.response1.options;
      this.contentSelect.emit({ id: item.data.id, title: item.title, parentId: _.get(item, 'data.parent.id') });
    }
  }

  public chooseContentType () {
    this.mode = modeType.ContentTypes;
  }

  selectedContentType(e) {
    this.treeData = data1.data.result.content;
    this.mode = modeType.Editor;
  }
}

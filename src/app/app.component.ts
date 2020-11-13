import { AfterViewInit, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
// import { Show, SunbirdService } from 'sunbird';
import * as _ from 'lodash-es';
import { data1 } from './quml-library-data';
import { contentTypes } from './contentType-data';
import { collectionData } from './collection-data';
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
export class AppComponent implements OnInit, AfterViewInit {
  public item;
  editorState: any = {};
  title = 'ckeditor-and-quml-player';
  treeData: any;
  contentTypeCards = _.groupBy(contentTypes, 'category');
  public mode: modeType;
  public objectType: string;
  QumlPlayerConfig = data1;

  @Output() public contentSelect: EventEmitter<{id: string, title: string, parentId?: string}> = new EventEmitter();
  constructor() {
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
  }


  public changeMode(value) {
    this.mode = value;
  }

  public onItemSelect(item: any) {
    if (!item.folder) {
      this.item = item;
      console.log(this.item.data);
      this.mode = modeType.Editor;
      this.editorState.question = this.item.data.body;
      this.editorState.solution = this.item.data.solutions ? this.item.data.solutions[0].value : '';
      this.editorState.options = this.item.data.interactions ? this.item.data.interactions.response1.options : '';
      this.contentSelect.emit({ id: item.data.id, title: item.title, parentId: _.get(item, 'data.parent.id') });
    }
  }

  public chooseContentType () {
    this.mode = modeType.ContentTypes;
  }

  selectedContentType(e) {
    if (this.objectType === 'Collection') {
      this.treeData = collectionData;
    } else {
      this.treeData = data1.data.result.content;
    }
    this.mode = modeType.Editor;
  }

  switchToCollection() {
    this.treeData = collectionData;
    console.log(this.treeData);
  }

  goBack() {
    this.objectType = undefined;
  }

  switchObjectType(obj) {
    if (obj === 'Collection') {
      this.treeData = collectionData;
    } else {
      this.treeData = data1.data.result.content;
    }
    this.editorState  = {
      question: '',
      solution: '',
      options: ''
    }
    this.mode = modeType.Editor;
  }
}

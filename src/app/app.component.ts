import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Show, SunbirdService } from 'sunbird';
import * as _ from 'lodash-es';
import { data1 } from './quml-library-data';
enum modeType {
  Editor = 'Editor',
  Player = 'Player'
}

@Component({
  selector: 'ld-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  show$: Observable<Show>;
  public item;
  editorState: any = {};
  title = 'ckeditor-and-quml-player';
  public mode: modeType = modeType.Editor;
  QumlPlayerConfig = data1;

  @Output() public contentSelect: EventEmitter<{id: string, title: string, parentId?: string}> = new EventEmitter();
  constructor(private tvmaze: SunbirdService) {
    this.show$ = this.tvmaze.getShow(336);
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
}

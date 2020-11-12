import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild } from '@angular/core';
import InlineEditor from 'ckeditor5-custom-build-inline';

@Component({
  selector: 'ld-ckeditor-tool',
  templateUrl: './ckeditor-tool.component.html',
  styleUrls: ['./ckeditor-tool.component.css']
})
export class CkeditorToolComponent implements OnInit, AfterViewInit, OnChanges {
  public editorInstance: any;
  @ViewChild('editor') public editorRef: ElementRef;
  @Input() editorConfig: any;
  @Input() editorDataInput: any;
  @Input() editorId: any;
  @Output() editorDataOutput = new EventEmitter<any>();
  editorInitialized = false;
  ngOnInit() {
    console.log('asdadda');
  }

  ngOnChanges() {
    // this.initializeEditors();
    if (this.editorInitialized) {
      this.setEditorData();
    }
  }

  ngAfterViewInit() {
    this.initializeEditors();
    this.editorInitialized = true;
  }

  initializeEditors() {
    InlineEditor.create(this.editorRef.nativeElement)
      .then(editor => {
        this.editorInstance = editor;
        if (this.editorDataInput) {
          console.log(this.editorDataInput);
          this.editorInstance.setData(this.editorDataInput);
        } else {
          this.editorInstance.setData('');
        }
      })
      .catch(error => {
        console.error(error.stack);
      });
  }

  setEditorData() {
    this.editorInstance.setData(this.editorDataInput);
  }
}

import { WrappedNodeExpr } from '@angular/compiler';
import { Component, AfterViewInit, Input, ViewChild, ElementRef, Output, EventEmitter, OnChanges } from '@angular/core';
import 'jquery.fancytree';
import { data1 } from '../quml-library-data';

@Component({
  selector: 'ld-fancy-tree',
  templateUrl: './fancy-tree.component.html',
  styleUrls: ['./fancy-tree.component.css']
})
export class FancyTreeComponent implements AfterViewInit, OnChanges {
  @ViewChild('fancyTree') public tree: ElementRef;
  @Input() public nodes: any;
  @Input() public options: any;
  @Input() public rootNode;
  @Output() public itemSelect: EventEmitter<Fancytree.FancytreeNode> = new EventEmitter();



  constructor() { }

  ngOnChanges() {
    if (this.nodes) {
      // $(this.tree.nativeElement).fancytree({
      //   source: [this.nodes]
      // });
      const tree = $(this.tree.nativeElement).fancytree('getTree');
      tree.reload([this.nodes]);
      tree.visit((node) => {
        node.setExpanded(true);
      });
      // tree.getNodeByKey('_15').setActive();
      // this.itemSelect.emit(tree.getNodeByKey('_15'));
    }
  }

  ngAfterViewInit() {
    let options: any = {
      extensions: ['glyph'],
      clickFolderMode: 3,
      source: [data1.data.result.content],
      glyph: {
        preset: 'awesome4',
        map: {
          folder: 'fa fa-folder-o icon folder sb-fancyTree-icon',
          folderOpen: 'fa fa-folder-o icon folder outline sb-fancyTree-icon'
        }
      },
      click: (event, data): boolean => {
        this.tree.nativeElement.click();
        const node = data.node;
        console.log(node.title);
        this.itemSelect.emit(node);
        return true;
      },
    };
    options = { ...options, ...this.options };
    $(this.tree.nativeElement).fancytree(options);
  }
}

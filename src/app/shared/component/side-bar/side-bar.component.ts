import { SidebarItem } from './../../../shared/model/sidebar-item';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  @Input() items: SidebarItem[];
  @Output() actionHandler: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public execFunction(functionName: string): void {
    this.actionHandler.emit(functionName);
  }

}

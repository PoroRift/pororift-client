import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'analyst-drawer',
  templateUrl: './analyst-drawer-layout.component.html',
  styleUrls: ['./analyst-drawer-layout.component.scss']
})
export class AnalystDrawerLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public handler(event: any) {
    console.log(event);
  }

}

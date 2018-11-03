import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  public items: string[] = ['face', 'event', 'explore', 'shop'];
   
  constructor() { }

  ngOnInit() {
  }

}

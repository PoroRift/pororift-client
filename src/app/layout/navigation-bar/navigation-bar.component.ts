import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {

  @Output() toggleSideNav = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public toggleSideNavEvent(): void {
    this.toggleSideNav.emit(null);
  }

}

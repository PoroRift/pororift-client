import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public opened = true;

  public toggleSideNavEvent(): void {
    console.log(this.opened);
    this.opened = !this.opened;
  }
}

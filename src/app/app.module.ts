import { MatchViewerAppModule } from './match-viewer-app/match-viewer-app.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { MatchHistoryLayoutComponent } from './match-history-app/match-history-layout/match-history-layout.component';


@NgModule({
  declarations: [
    AppComponent,
    MatchHistoryLayoutComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    CoreModule,
    MatchViewerAppModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { MatchViewerAppModule } from './match-viewer-app/match-viewer-app.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { MatchHistoryAppModule } from './match-history-app/match-history-app.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    CoreModule,
    MatchViewerAppModule,
    MatchHistoryAppModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

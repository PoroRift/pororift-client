import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SummonerInfo } from 'src/app/match-viewer-app/match-viewer-model';
import { HttpClient } from '@angular/common/http';

interface MatchObject {
  matchViewer: SummonerInfo[];
}

@Injectable({
  providedIn: 'root'
})
export class MatchViewerService {

  private url: string;

  constructor(private _http: HttpClient) { }

  public getLiveMatch(matchId: string): Observable<MatchObject> {
    return this._http.get<MatchObject>(this.url + `\\${matchId}`);
  }
}

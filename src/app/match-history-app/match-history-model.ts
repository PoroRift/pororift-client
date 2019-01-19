import { Champion, KDA } from '../match-viewer-app/match-viewer-model';

export class Match {
  matchID: number;
  victory: boolean;
  champion: Champion;
  kda: KDA;
}

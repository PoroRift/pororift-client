import { RuneSet, BuildItem } from '../analyst-drawer-app/analyst-drawer-model';

// https://na.leagueoflegends.com/en/game-info/summoners/spells/
export class SummonerSpell {
  icon: string;
  name: string;
  description: string;
}

export class KDA {
  kill: number;
  death: number;
  assist: number;
}

export class SummonerInfo {
  summonerDetail: SummonerDetail;
  champion: Champion;
  firstSpellIcon: SummonerSpell;
  secondSpellIcon: SummonerSpell;
  runes: RuneSet;
  lastBuild: BuildItem[];
}

export class SummonerDetail {
  summonerName: string;
  summonerKDA: KDA;
  summonerRank: string;
}

export class Champion {
  championName: string;
  championIcon: string;
}

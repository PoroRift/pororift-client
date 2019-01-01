export class SpellIcon {
    url: string;
    alt: string;
}

export class SummonerKDA {
    kill: number;
    death: number;
    assist: number;
}

export class SummonerInfo {
    summonerDetail: SummonerDetail;
    champion: Champion;
    firstSpellIcon: SpellIcon;
    secondSpellIcon: SpellIcon;
}

export class SummonerDetail {
    summonerName: string;
    summonerKDA: SummonerKDA;
    summonerRank: string;
}

export class BuildItem {
    name: string;
    icon: string;
    description: string;
    cost: number;
}

export enum RunePath {
    Domination,
    Precision,
    Inspiration,
    Sorcery,
    Resolve
}

export class Rune {
    name: string;
    description: string;
    path: RunePath;
}

export class Champion {
  championName: string;
  championIcon: string;
}

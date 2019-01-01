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

export class Champion {
  championName: string;
  championIcon: string;
}

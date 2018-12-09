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
    summonerName: string;
    championIcon: string;
    firstSpellIcon: SpellIcon;
    secondSpellIcon: SpellIcon;
    summonerKDA: SummonerKDA;
    summonerRank: string;
}

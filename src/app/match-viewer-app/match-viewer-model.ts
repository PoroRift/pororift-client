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

export class Champion {
  championName: string;
  championIcon: string;
}

```
{
    "summonerDetail": {
        "summonerName": <string>,
        "summonerKDA": {
            "kill": <number>,
            "death": <number>,
            "assist": <number>
        },
        "summonerRank": <string>
    },
    "champion": {
        "championName": <string>,
        "championIcon": <string>
    },
    "firstSpellIcon": {
        "url": <string>,
        "alt": <string>
    },
    "secondSpellIcon": {
        "url": <string>,
        "alt": <string>
    }
}
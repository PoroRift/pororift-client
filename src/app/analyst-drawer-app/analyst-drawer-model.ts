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

export class BuildItem {
    name: string;
    icon: string;
    description: string;
    cost: number;
}
export class RunePath {
  name: string;
  icon: string;
}

export class Rune {
  name: string;
  icon: string;
  description: string;
}

export class RuneSet {
  primaryPath: RunePath;
  keystone: Rune;
  primaryPathRunes: Rune[];
  secondaryPath: RunePath;
  secondaryPathRunes: Rune[];
}

export class BuildItem {
  name: string;
  icon: string;
  description: string;
  cost: number;
}

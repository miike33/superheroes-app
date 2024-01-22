export interface Hero {
  id: string;
  name: string;
  aliases: string;
  team: Team;
  city: string;
  image?: string;
}

export enum Team {
  noTeam = 'Sin equipo',
  justiceLeague = 'Liga de la Justicia',
  xMen = 'X-Men',
  avengers = 'Vengadores',
}

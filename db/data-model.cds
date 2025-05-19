namespace my.tournament;

entity Teams {
  key ID       : UUID;
  Team_ID      : String(10);
  TeamName     : String(100);
  Captain      : String(100);
}

entity Players {
  key ID        : UUID;
  PlayerName    : String(100);
  Role          : String(50);
  Team_ID       : String(10);
}

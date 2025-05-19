namespace cricket;

entity Teams {
  key ID: UUID;
  name: String(50);
  city: String(50);
  foundedYear: Integer;
  players: Association to many Players on players.team = $self;
}

entity Players {
  key ID: UUID;
  name: String(50);
  role: String(30); // Batsman, Bowler, etc.
  age: Integer;
  team: Association to Teams;
  matchesPlayed: Integer;
  totalRuns: Integer;
  totalWickets: Integer;
}

entity Matches {
  key ID: UUID;
  date: Date;
  teamA: Association to Teams;
  teamB: Association to Teams;
  winner: Association to Teams;
  venue: String(50);
}

// srv/cricket-service.cds
using { my.tournament as db } from '../db/data-model';

service CricketService {
  entity Teams as projection on db.Teams;
  entity Players as projection on db.Players;
}

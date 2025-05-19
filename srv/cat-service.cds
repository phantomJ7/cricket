using cricket from '../db/schema';

service CatalogService {
  entity Teams as projection on cricket.Teams;
  entity Players as projection on cricket.Players;
  entity Matches as projection on cricket.Matches;
}

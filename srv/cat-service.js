const cds = require('@sap/cds');

module.exports = class CatalogService extends cds.ApplicationService {
  init() {

    const { Teams } = this.entities; // ✅ use this.entities

    this.after('READ', Teams, team => {
      if (team.name === 'Mumbai Indians') team.name += ' 🏆';
    });

    return super.init();
  }
};

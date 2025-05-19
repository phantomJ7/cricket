const Database = require('better-sqlite3');
const db = new Database(':memory:');
const row = db.prepare('SELECT 1 + 1 AS result').get();
console.log(row);
    
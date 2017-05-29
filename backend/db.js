const pg = require('pg');
const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://cmylunjh:8hqd45a2YC6vQuMUjevYwHSRZyKgpUy6@stampy.db.elephantsql.com:5432/cmylunjh')

sequelize
  .authenticate()
  .then(function(err) {
    console.log('database has been established successfully.');
  })
  .catch(function (err) {
    console.log('Unable to connect to the database:', err);
  });

const Job = sequelize.define('job', {
      company: {
        type: Sequelize.STRING
      },
      job: {
        type: Sequelize.STRING
      },
      link: {
        type: Sequelize.STRING
      },
      notes: {
        type: Sequelize.STRING
      }
});
//creates database I only need this the first 
// Job.sync({force: true}).then(function () {
//   // Table created
//   console.log("Table successfully created")
// });
module.exports = Job;
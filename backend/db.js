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

const Activity = sequelize.define('activity', {
      jobId: {
        type: Sequelize.INTEGER
      },
      content: {
        type: Sequelize.STRING
      }
})

Activity.belongsTo(Job);
Job.hasMany(Activity);

//creates database I only need this the first 

// Activity.sync({force: true}).then(function () {
//   // Table created
//   console.log("Activity successfully created")
// });

// Job.sync({force: true}).then(function () {
//   // Table created
//   console.log("Job successfully created")
// });

const db = {};
db.Job = Job;
db.Activity = Activity;

module.exports = db;
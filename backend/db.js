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

const FollowUp = sequelize.define('followup', {
      jobId: {
        type: Sequelize.INTEGER
      },
      content: {
        type: Sequelize.STRING
      },
      completed: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      duedate: {
        type: Sequelize.DATE
      }
})

Activity.belongsTo(Job);
Job.hasMany(Activity);

FollowUp.belongsTo(Job);
Job.hasMany(FollowUp);


//creates database I only need this the first 

// Activity.sync({force: true}).then(function () {
//   // Table created
//   console.log("Activity successfully created")
// });

// Job.sync({force: true}).then(function () {
//   // Table created
//   console.log("Job successfully created")
// });

// FollowUp.sync({force: true}).then(function () {
//   // Table created
//   console.log("FollowUp successfully created")
// });

const db = {};
db.Job = Job;
db.Activity = Activity;
db.FollowUp = FollowUp;

module.exports = db;
Jobs = new Meteor.Collection("jobs");

Meteor.methods({
  addJob: function (jobData) {
    // Make sure the user is logged in before inserting a task
    if (! Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }

    Jobs.insert(jobData);
  }
});

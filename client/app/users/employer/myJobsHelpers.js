Template.activeJobs.helpers({
  listMyJobs: function(){
      return Jobs.find({"employer":Meteor.userId()}).fetch();

    }
});

Template.activeJobs.events({
  'click #jobDeactivate': function (e) {
      e.preventDefault();
      Meteor.call("jobDeactivate", this._id)

  }
});

Template.unactiveJobs.helpers({
  listMyJobs: function(){
      return Jobs.find({"employer":Meteor.userId()}).fetch();

    }
});

Template.unactiveJobs.events({
  'click #jobActivate': function (e) {
      e.preventDefault();
      Meteor.call("jobActivate", this._id)

  }
});

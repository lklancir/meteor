Template.jobsDetailed.onRendered(function(){

    this.$( "#accordion" ).accordion({
      collapsible: true,
      active: false,
      heightStyle: "content"
    });
  });

  Template.jobsDetailed.events({
    'click .jobApply': function (e) {
        e.preventDefault();
        Meteor.call("employeeJobApply", this._id)
    }
  });

  Template.jobsDetailed.events({
    'click .jobCancelApply': function (e) {
        e.preventDefault();
        Meteor.call("employeeJobCancelApply", this._id)
    }
  });

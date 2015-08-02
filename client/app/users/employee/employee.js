Meteor.subscribe("jobs");

Template.employeeRegistration.events({
  'submit form': function(event){
      event.preventDefault();
      var name = $('[name=name]').val();
      var surname = $('[name=surname]').val();
      var email = $('[name=email]').val();
      var password = $('[name=password]').val();

      var options = {
        email:email,
        password:password,
        profile: {
          name:name,
          surname: surname,
          type:'2'
      }
    };
      var userId = Accounts.createUser(options);
      Router.go('verification');
  }
});


Template.jobs.helpers({
  jobListings: function(){
      return Jobs.find();
  }
});

Template.jobs.events({
  'click .jobApply': function (e) {
      e.preventDefault();
      Meteor.call("employeeJobApply", this._id)
  }
});

Template.jobs.events({
  'click .jobCancelApply': function (e) {
      e.preventDefault();
      Meteor.call("employeeJobCancelApply", this._id)
  }
});

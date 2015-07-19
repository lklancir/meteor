// Meteor.subscribe("profiles");

Template.employerProfile.helpers({
  getProfile: function(){
     return Users.findOne({_id:this.userId});
   }
});


Template.employerRegistration.events({
  'submit form': function(event){
      event.preventDefault();
      var name = $('[name=name]').val();
      var surname = $('[name=surname]').val();
      var username = $('[name=username]').val();
      var email = $('[name=email]').val();
      var password = $('[name=password]').val();

      var options = {
        email:email,
        password:password,
        profile: {
          name:name,
          surname: surname,
          username: username,
          type:'1'
      }
    };
      var userId = Accounts.createUser(options);
      Router.go('verification');
  }
});


Template.addJob.events({
  "submit form": function(event){
    event.preventDefault();
    var jobTitle = $('[name=jobTitle]').val();
    var jobDescription = $('[name=jobDescription]').val();
    var jobCategory = $('[name=jobCategory]').val();
    var jobLocation = $('[name=jobLocation]').val();

    var jobData = {
      jobTitle:jobTitle,
      jobDescription:jobDescription,
      jobCategory:jobCategory,
      jobLocation:jobLocation
    };

    Meteor.call("addJob", jobData);
  }
});





Template.name.events({
  "click #foo": function(event, template){

  }
});
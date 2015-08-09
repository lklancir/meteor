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

Template.addJob.onRendered(function(){

    this.$('#my-datepicker').datepicker();
    // this.$( "#number" )
    //   .selectmenu()
    //   .selectmenu( "menuWidget" )
    //     .addClass( "overflow" );

  });


Template.addJob.events({
  "submit form": function(event){
    event.preventDefault();
    var jobTitle = $('[name=jobTitle]').val();
    var jobDescription = $('[name=jobDescription]').val();
    var numberOfWorkers = $('[name=numberOfWorkers]').val();
    var jobOpeningDate = $('[name=jobOpeningDate]').val();
    var jobDeadline = $('[name=jobDeadline]').val();
    var jobCategory = $('[name=jobCategory]').val();
    var jobState = $('[name=jobState]').val();
    var jobLocation = $('[name=jobLocation]').val();

    var jobData = {
      employer:Meteor.userId(),
      jobTitle:jobTitle,
      jobDescription:jobDescription,
      numberOfWorkers:numberOfWorkers,
      jobOpeningDate:jobOpeningDate,
      jobDeadline:jobDeadline,
      jobCategory:jobCategory,
      jobState:jobState,
      jobLocation:jobLocation,
      jobLocation:jobLocation,
      jobStatus: {
        active: true,
        unactive: false,
        expired: false
      }
    };

    Meteor.call("addJob", jobData);
  }
});

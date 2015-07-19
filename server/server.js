Meteor.startup(function(){

    console.log('Running server startup code...');
    Houston.add_collection(Meteor.users);

  Accounts.onCreateUser(function (options, user) {
      if (options.profile.type == 1) {
        Roles.setRolesOnUserObj(user, ['employer']);
        user.profile = options.profile
        Employer.insert({
          createdAt: new Date(),
          user: user._id
        });
      }
      else{
        Roles.setRolesOnUserObj(user, ['employee']);
        user.profile = options.profile
        Employee.insert({
          createdAt: new Date(),
          user: user._id
        });
      }

  // we wait for Meteor to create the user before sending an email
  Meteor.setTimeout(function() {
    Accounts.sendVerificationEmail(user._id);
  }, 2 * 1000);

  return user;


  });

  // (server-side) called whenever a login is attempted
  Accounts.validateLoginAttempt(function(attempt){
    if (attempt.user && attempt.user.emails && !attempt.user.emails[0].verified ) {
      console.log('email not verified');


      return false;
    }
    return true;
  });





});

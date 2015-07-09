Meteor.startup(function(){

    console.log('Running server startup code...');

  Accounts.onCreateUser(function (options, user) {
    Roles.setRolesOnUserObj(user, ['admin','employer']);

    if (options.profile) {
      // include the user profile
      user.profile = options.profile
    }

    user.profile = {};

  // we wait for Meteor to create the user before sending an email
  Meteor.setTimeout(function() {
    Accounts.sendVerificationEmail(user._id);
  }, 2 * 1000);

  return user;


  });

  // (server-side) called whenever a login is attempted
// Accounts.validateLoginAttempt(function(attempt){
//   if (attempt.user && attempt.user.emails && !attempt.user.emails[0].verified ) {
//     console.log('email not verified');
//
//     Router.go('verification');
//
//     ///ser
//   }
//   return true;
// });


});

if (Meteor.isClient) {
Meteor.subscribe("jobs");
Template.home.helpers({
  jobListings: function(){
      return Jobs.find();
  }
});

// Template.Homepage.created = function() {
//   if (Accounts._verifyEmailToken) {
//     Accounts.verifyEmail(Accounts._verifyEmailToken, function(err) {
//       if (err != null) {
//         if (err.message = 'Verify email link expired [403]') {
//           console.log('Sorry this verification link has expired.')
//         }
//       } else {
//         console.log('Thank you! Your email address has been confirmed.')
//
//       }
//     });
//   }
// };









}

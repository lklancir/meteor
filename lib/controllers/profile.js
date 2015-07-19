// ProfileController=RouteController.extend({
//     template:"employer",
//     waitOn:function(){
//         var userId = Meteor.userId();
//         return Meteor.subscribe("employer",userId);
//     },
//     data:function(){
//         var username=Router.current().params.username;
//         return Meteor.users.findOne({
//             username:username
//         });
//     }
// });


// ProfileController=RouteController.extend({
//     template:"profile",
//     waitOn:function(){
//         return Meteor.subscribe("employer",this.params.employerId);
//     },
//     data:function(){
//         var employerId=Router.current().params.employerId;
//         return Meteor.employer.findOne({
//             _id:employerId
//         });
//     }
// });


//Main template layout - later loading template
Router.configure({
    layoutTemplate: 'main'
});

Router.route('/', {
    name: 'home',
    template: 'home'

});

Router.route('/signup', {
    name: 'signup',
    template: 'signup',
    layoutTemplate:'createAccount'
});

Router.route('/login', {
    name: 'login',
    template: 'login'
});

Router.route("/signup/employer", {
  name:"employerRegistration",
  template:"employerRegistration",
  layoutTemplate:'createAccount',
  // onAfterAction:function(){
  //   if (! Meteor.userId()) {
  //       this.setLayout("createAccount");
  //       this.render('verification');
  //   }
  // }
});

Router.route("/signup/employee", {
  name:"employeeRegistration",
  template:"employeeRegistration",
  layoutTemplate:'createAccount'


});


Router.route("/signup/verification", {
  name:"verification",
  template:"verification",
  layoutTemplate:'createAccount'

});


Router.route("/employer/profile", {
  name:"employerProfile",
  template:"employerProfile",
  layoutTemplate:'employerLayout',
  // controller:"ProfileController",
    data: function(){
      var currentuser = Meteor.userId();
      Meteor.call("getEmployer", currentuser, function(error, result){
        if(error){
          console.log("error", error);
        }
        if(result){
           return result;
        }
      });

    },
    onBeforeAction:function(){

        var user = Meteor.userId();
        if(!user || !Roles.userIsInRole(user, ['employer'])) {
              Router.go("verification");
        }
        else {
          this.next();
        }
        return true;

    },


});

Router.route("/employer/post-a-job", {
  name:"addJob",
  template:"addJob",
  layoutTemplate:'employerLayout'

});

Router.route("/employer/my-jobs", {
  name:"myJobs",
  template:"myJobs",
  layoutTemplate:'employerLayout'

});

Meteor.methods({
  addEmployer: function () {
    // Make sure the user is logged in before inserting a task

    Employer.insert({
      createdAt: new Date(),
      owner: Meteor.userId(),
    });
  },

  userAccessDeniedEmployer : function(user){
    if(!user || !Roles.userIsInRole(user, ['employer'])) {
      return true;
    }
    else{
      return false;
    }
  },
  userAccessDeniedEmployee : function(user){
    if(!user || !Roles.userIsInRole(user, ['employee'])) {
      return true;
    }
    else{
      return false;
    }
  },
  findEmployeeProfile:function(userId){
      return Users.findOne({_id:"userId"});
  }
  // deleteTask: function (taskId) {
  //   var task = Tasks.findOne(taskId);
  //   if (task.private && task.owner !== Meteor.userId()) {
  //     // If the task is private, make sure only the owner can delete it
  //     throw new Meteor.Error("not-authorized");
  //   }
  //
  //   Tasks.remove(taskId);
  // },
  // setChecked: function (taskId, setChecked) {
  //   var task = Tasks.findOne(taskId);
  //   if (task.private && task.owner !== Meteor.userId()) {
  //     // If the task is private, make sure only the owner can check it off
  //     throw new Meteor.Error("not-authorized");
  //   }
  //
  //   Tasks.update(taskId, { $set: { checked: setChecked} });
  // },
  // setPrivate: function (taskId, setToPrivate) {
  //   var task = Tasks.findOne(taskId);
  //
  //   // Make sure only the task owner can make a task private
  //   if (task.owner !== Meteor.userId()) {
  //     throw new Meteor.Error("not-authorized");
  //   }
  //
  //   Tasks.update(taskId, { $set: { private: setToPrivate } });
  // }
});

Meteor.publish("userProfile",function(employerId){
    // simulate network latency by sleeping 2s
    Meteor._sleepForMs(2000);
    // try to find the user by username
    var employer=Meteor.employer.findOne({
        _id:employerId
    });
    // if we can't find it, mark the subscription as ready and quit
    if(!employer){
        this.ready();
        return;
    }
    // if the user we want to display the profile is the currently logged in user...
    if(this.employerId==employer._id){
        // then we return the corresponding full document via a cursor
        return Meteor.employer.find(this.employerId);
    }
    else{
        // if we are viewing only the public part, strip the "profile"
        // property from the fetched document, you might want to
        // set only a nested property of the profile as private
        // instead of the whole property
        return Meteor.users.find(Meteor.userId(),{
            fields:{
                "profile":0
            }
        });
    }
});


Meteor.publish("jobs", function(){
    return Jobs.find();

});


// Meteor.publish("profiles", function(){
//   return Users.findOne();
//
// });

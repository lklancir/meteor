Router.map(function() {
  	this.route('index', {path: '/'});
    this.route('/home', {
        template: 'home',
        name: 'home'
    });
    this.route('/poslodavci', {
        template: 'employer',
        name: 'employer'
    });
    this.route('/posloprimci', {
        template: 'employee',
        name: 'employee'
    });
    this.route('/kako-radi', {
        template: 'howItWorks',
        name: 'howItWorks'
    });
    this.route('verification');

});

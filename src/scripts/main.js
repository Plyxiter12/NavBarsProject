function NavBarViewModel() {
    'use strict';

    var self = this;

    self.show = ko.observable(false);
    self.selectedNavBar = ko.observable('');

    self.showNav = function(){
      self.show(true);
    };
    self.changeBackground = function() {

    };
}
ko.applyBindings(new NavBarViewModel());
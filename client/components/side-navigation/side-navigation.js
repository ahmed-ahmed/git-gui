import app from '../../modules.js';
import template from './side-navigation.html'

class SideNavigation{
}

const component = {
    bindings: {
    },
    controller: SideNavigation,
    template
};

app.component('sideNavigation', component);

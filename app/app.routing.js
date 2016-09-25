"use strict";
var router_1 = require('@angular/router');
var pattern_component_1 = require('./login/pattern.component');
var register_component_1 = require('./registration/register.component');
var appRoutes = [
    {
        path: 'pattern',
        component: pattern_component_1.PatternComponent
    },
    {
        path: '',
        component: register_component_1.RegisterComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map
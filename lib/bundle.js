System.register("a", [], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function foo() {
        return 'hi';
    }
    exports_1("foo", foo);
    return {
        setters:[],
        execute: function() {
        }
    }
});
System.register("main", ['react', 'react-dom'], function(exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var React, react_dom_1;
    var App;
    return {
        setters:[
            function (React_1) {
                React = React_1;
            },
            function (react_dom_1_1) {
                react_dom_1 = react_dom_1_1;
            }],
        execute: function() {
            App = function () {
                return (React.createElement("div", null, "Welcome to React, We are a go!"));
            };
            react_dom_1.render(React.createElement(App, null), document.getElementById('container'));
        }
    }
});
//# sourceMappingURL=bundle.js.map
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
System.register("main", ["a"], function(exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var a_1;
    return {
        setters:[
            function (a_1_1) {
                a_1 = a_1_1;
            }],
        execute: function() {
            document.getElementById('app').innerHTML = a_1.foo();
        }
    }
});

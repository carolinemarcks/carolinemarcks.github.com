define(['jquery', 'underscore', 'handlebars', 'backbone',
        'bootstrap'],
function($, _, Handlebars, Backbone){
    var Router = Backbone.Router.extend({
        DEFAULT_ROUTE: '',
        routes: {
            ''  : 'home',
        },
        initialize  : function(){
        },
        home        : function(){
            $("body").html("<h3>WAZZUP dawg</h3>");
        }
    });

    function Main(){
        this.router = new Router();
    };

    Main.prototype.run = function(){
        console.log("running...");
        Backbone.history.start();
    };

    return new Main();
});

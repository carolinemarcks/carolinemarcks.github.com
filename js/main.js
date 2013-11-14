define(['jquery', 'underscore', 'handlebars', 'backbone',
        'text!templates/layout.html',
        'text!templates/home.html',
        'bootstrap'],
function($, _, Handlebars, Backbone,
    layout, home){
    var Router = Backbone.Router.extend({
        DEFAULT_ROUTE: '',
        routes: {
            ''  : 'home',
        },
        initialize  : function(){
            $("body").html(layout);
            Backbone.history.start({root: window.location.pathname});
        },
        home        : function(){
            $("#body-container").html(home);
        }
    });

    function Main(){
        this.router = new Router();
    };

    Main.prototype.run = function(){
        console.log("running...");
    };

    return new Main();
});

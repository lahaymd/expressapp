function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (title) {
buf.push("<head><title>" + (jade.escape(null == (jade_interp = title) ? "" : jade_interp)) + "</title><script src=\"http://ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js\"></script><script src=\"/javascripts/menu.js\"></script><script src=\"/javascripts/toggle.js\"></script><script src=\"/javascripts/global.js\"></script><meta name=\"viewport\" content=\"width=device-width, initial-scale=1, maximum-scale=1\"/><link rel=\"stylesheet\" href=\"/stylesheets/style.css\"/></head>");}.call(this,"title" in locals_for_with?locals_for_with.title:typeof title!=="undefined"?title:undefined));;return buf.join("");
}
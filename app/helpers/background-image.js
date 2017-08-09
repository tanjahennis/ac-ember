import Ember from 'ember';

export default Ember.Helper.helper(function(params) {
  let url = params[0];
  var escaped_css = "background-image: url(" + url +");".htmlSafe();
  return Ember.String.htmlSafe(escaped_css);
});

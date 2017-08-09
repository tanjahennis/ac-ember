import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('recipes', function() {
    this.route('show', { path: '/:recipe_id' });
    this.route('new');
    this.route('edit', { path: '/:recipe_id/edit' });
  });
});

export default Router;

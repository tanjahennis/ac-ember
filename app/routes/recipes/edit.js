import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.get('store').findRecord('recipe', params.recipe_id);
  },
  actions: {
    save() {
      this.currentModel.save().then(() => this.transitionTo('recipes'));
    },
    willTransition() {
      this.controller.get('model').rollbackAttributes();
    }
  },
});

import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.get('store').createRecord('recipe')
  },
  actions: {
    save() {
      this.currentModel.save().then(() => this.transitionTo('recipes'));
    }
  },
});

import Ember from 'ember';

export default Ember.Component.extend({
  isLarge: false,
  actions: {
    toggleImageSize() {
      this.toggleProperty('isLarge');
    }
  }
});

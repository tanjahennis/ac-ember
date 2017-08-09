import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    save(){
      this.currentModel.save()
        .then((model) => this.transitionTo('recipes.show', model))
        .catch(e => {
          console.log(e.errors);
        });
    },

    willTransition() {
      this.controller.get('model').rollbackAttributes();
    },

    addIngredient() {
      this.currentModel.get('ingredients').pushObject(this.get('store').createRecord('ingredient'));
    },

    removeIngredient(model, ingredient) {
      model.get('ingredients').removeObject(ingredient);
      model.save();
    },

    addInstruction() {
      this.currentModel.get('instructions').pushObject(this.get('store').createRecord('instruction'));
    },

    removeInstruction(model, instruction) {
      model.get('instructions').removeObject(instruction);
      model.save();
    },
  }
});

import RecipeActions from './actions';

export default RecipeActions.extend({
  model() {
    return this.get('store').createRecord('recipe');
  },
});

import RecipeActions from './actions';

export default RecipeActions.extend({
  model(params) {
    return this.get('store').findRecord('recipe', params.recipe_id);
  }
});

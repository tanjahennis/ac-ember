import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  description: DS.attr(),
  source: DS.attr(),
  prepTime: DS.attr(),
  cookTime: DS.attr(),
  image: DS.attr(),
  ingredients: DS.hasMany('ingredient', { async:  false, inverse: null }),
  instructions: DS.hasMany('instruction', { async: false, inverse: null }),
});

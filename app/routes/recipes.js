import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [{
      id: 'beef-broccoli',
      title: 'Crazy good beef and broccoli',
      description: 'An easy recipe for authentic Chinese beef and broccoli.',
      source: 'http://www.savorytooth.com/beef-broccoli/',
      prepTime: 15,
      cookTime: 20,
      image: 'http://www.savorytooth.com/wp-content/uploads/2017/02/crazy-good-beef-and-broccoli-2.jpg',
    }, {
      id: 'banana-pancakes-pecans',
      title: 'Banana pancakes with pecans',
      description: 'These heart-shaped banana pancakes are made using ripe bananas and topped with chopped pecans, maple syrup, and whipped cream.',
      source: 'http://www.savorytooth.com/banana-pancakes-pecans/',
      prepTime: 10,
      cookTime: 20,
      image: 'http://www.savorytooth.com/wp-content/uploads/2017/02/banana-pancake-recipe-pecans-1.jpg',
    }, {
      id: 'best-chicken-tikka-masala',
      title: 'Best chicken tikka masala',
      description: 'This chicken tikka masala recipe is restaurant quality, made from scratch, and easy to make.',
      source: 'http://www.savorytooth.com/best-chicken-tikka-masala/',
      prepTime: 90,
      cookTime: 30,
      image: 'http://www.savorytooth.com/wp-content/uploads/2016/01/chicken-tikka-masala-closeup-square.jpg',
    }];
  }
});

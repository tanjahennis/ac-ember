import Ember from 'ember';

export function instructionSteps(index) {
  let i = Number(index);
  return i + 1;
}

export default Ember.Helper.helper(instructionSteps);

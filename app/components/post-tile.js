import Ember from 'ember';

export default Ember.Component.extend({
  isBlogPostShowing: false,
  actions: {
    blogPostShow: function() {
      this.set('isBlogPostShowing', true);
    },
    blogPostHide: function() {
      this.set('isBlogPostShowing', false);
    }
  }
});

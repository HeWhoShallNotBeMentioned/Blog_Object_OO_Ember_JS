import Ember from 'ember';

export default Ember.Component.extend({
  isBlogPostShowing: false,
  actions: {
    blogPostShow: function() {
      this.set('isBlogPostShowing', true);
    },
    blogPostHide: function() {
      this.set('isBlogPostShowing', false);
    },

    delete(post) {
      if (confirm('Are you sure you want to delete this post?')) {
        this.sendAction('destroyPost', post);
      }
    },

    update(post, params) {
      this.sendAction('update', post, params);
    }
  }
});

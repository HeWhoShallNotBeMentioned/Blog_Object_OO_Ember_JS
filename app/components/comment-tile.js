import Ember from 'ember';

export default Ember.Component.extend({
  isCommentShowing: false,

  actions: {
    commentShow: function() {
      this.set('isCommentShowing', true);
    },
    commentHide: function() {
      this.set('isCommentShowing', false);
    },
    delete(comment) {
      if (confirm('Are you sure you want to delete this post?')) {
        this.sendAction('destroyComment', comment);
      }
    },

    update(comment, params) {
      this.sendAction('update', comment, params);
    }
  }
});

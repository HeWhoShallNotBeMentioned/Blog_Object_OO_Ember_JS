import Ember from 'ember';

export default Ember.Component.extend({
  addNewComment: false,
  actions: {
    commentShow() {
      this.set('addNewComment', true);
    },

    saveComment(post) {
      var params = {
        title: this.get('title'),
        username: this.get('username'),
        body: this.get('body'),
        post: post
      };
      this.set('addNewComment', false);
      this.sendAction('saveComment', post, params);
    }
  }
});

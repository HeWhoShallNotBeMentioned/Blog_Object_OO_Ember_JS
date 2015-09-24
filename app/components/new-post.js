import Ember from 'ember';

export default Ember.Component.extend({
  addNewBlogPost: false,
  actions: {
    blogFormShow() {
      this.set('addNewPost', true);
    },

    save1() {
      var params = {
        title: this.get('title'),
        user: this.get('user'),
        author: this.get('author'),
        body: this.get('body')
      };
      this.set('addNewPost', false);
      this.sendAction('save2', params);
    }
  }
});

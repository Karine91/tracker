import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    formatDate(value){
      let formatedDate = window.moment(value, 'YYYY-MM-DD').toDate();
      this.get('model.sighting').set('sightedAt', formatedDate);
      console.log(this.get('model.sighting'));
    }
  }
});

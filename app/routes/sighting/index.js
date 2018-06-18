import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    return this.store.findRecord('sighting', params.sighting_id);
  },
});

import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import { computed } from '@ember/object';

export default Route.extend({
  model() {
    return RSVP.hash({
      sighting: this.store.createRecord('sighting'),
      cryptids: this.store.findAll('cryptid'),
      witnesses: this.store.findAll('witness')
    });
  },
  sighting: computed.alias('controller.model.sighting'),
  actions: {
    willTransition() {
      var sighting = this.get('controller.model.sighting');
      if (sighting.get('hasDirtyAttributes')) {
        sighting.deleteRecord();
      }
    },
    create() {
      console.log(this.get('sighting').sightedAt);
      this.get('sighting').save().then(() => {
        // this.transitionTo('sightings');
      });
    },
    cancel(){
      this.get('sighting').deleteRecord();
      this.transitionTo('sightings');
    },
    didMakeWitnessSelection(value) {
      this.get('sighting').set('witnesses', value);
    },
    didMakeCryptidSelection(value) {
      console.log(value);
      this.get('sighting').set('cryptid', value);
    }
  }
});

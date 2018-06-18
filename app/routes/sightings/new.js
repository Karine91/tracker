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
      this.get('sighting').save().then((data) => {
        this.send('flash', {alertType: "success", message: "New sighting."});
        this.transitionTo('sightings');
      });
    },
    cancel(){
      this.get('sighting').deleteRecord();
      this.transitionTo('sightings');
    },
    didMakeWitnessSelection(value) {
      if(value){
        this.get('sighting').witnesses.addObject(value);
      }
    },
    didMakeCryptidSelection(value) {
      this.get('sighting').set('cryptid', value);
    },
    removeWitness(value) {
      this.get('sighting').witnesses.removeObject(value);
    }
  }
});

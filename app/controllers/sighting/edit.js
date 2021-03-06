import Controller from '@ember/controller';
import {
  computed
} from '@ember/object';

export default Controller.extend({
  sighting: computed.alias('model.sighting'),
  actions: {
    update() {
      if (this.get('sighting').get('hasDirtyAttributes')) {
        this.get('sighting').save().then(() => {
          this.transitionToRoute('sightings');
        });
      }
    },
    cancel() {
      if (this.get('sighting').get('hasDirtyAttributes')) {
        this.get('sighting').rollbackAttributes();
      }
      this.transitionToRoute('sightings');
    },
    delete() {
      if (window.confirm("Are you sure you want to delete this sighting?")) {
        this.get('sighting').destroyRecord().then(() => {
          this.transitionToRoute('sightings');
        });
      }
    }
  }
});

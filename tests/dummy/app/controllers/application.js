import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({

  quagga: service(),

  actions: {
    change(event) {
      const files = event.target.files;

      const src = URL.createObjectURL(files[0]);
      this.get('quagga').decodeSingle(src, code => this.set('code', code || ':('));
    }
  }

});

import Service from '@ember/service';

export default Service.extend({

  decodeSingle(source, callback) {
    Quagga.decodeSingle({ source }, result => {
      const code = result.codeResult ? result.codeResult.code : null;
      callback(code);
    });
  }

});

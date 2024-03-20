import oboe from 'oboe';

export class HomeContext {
  /**
   * @param {Event} event
   * */
  static handleFileUpload(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
      oboe(e.target.result)
        .node('!.*', function(node) {
          console.log(node);
        })
        .fail(function(error) {
          console.error('Error:', error);
        });
    };

    reader.readAsDataURL(file);
  }
}
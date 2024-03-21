import untruncateJson from "untruncate-json";

export class HomeContext {
  /**
   * @param {Event} event
   * */
  static async handleFileUpload(event) {
    const file = event.target.files[0];
    const response = await fetch(URL.createObjectURL(file));
    const reader = response.body.getReader();
    let result = '';
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      result += new TextDecoder("utf-8").decode(value);
      const output = JSON.parse(untruncateJson(result));
      const sizeInBytes = new TextEncoder().encode(JSON.stringify(output)).length;

      console.log(sizeInBytes)
      console.log(output);
    }
    // const json = JSON.parse(result);
    // console.log(json);
  }
}
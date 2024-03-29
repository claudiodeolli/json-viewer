import untruncateJson from "untruncate-json";

self.onmessage = async (event) => {
  const file = event.data;
  const response = await fetch(URL.createObjectURL(file));
  const reader = response.body.getReader();
  let result = '';
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    result += new TextDecoder("utf-8").decode(value);
    const output = JSON.parse(untruncateJson(result));
    const sizeInBytes = new TextEncoder().encode(JSON.stringify(output)).length;

    postMessage({ size: sizeInBytes, data: output });
  }

  const json = JSON.parse(result);
  postMessage(json);
};
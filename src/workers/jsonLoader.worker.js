import { JSONParser} from '@streamparser/json';

self.onmessage = async (event) => {
  const file = event.data;
  const response = await fetch(URL.createObjectURL(file));
  const reader = response.body.getReader();
  const jsonparser = new JSONParser({ stringBufferSize: undefined, paths: ['$.*'] });

  jsonparser.onValue = ({ value, key, parent, stack }) => {
    if (stack > 0) return;
    console.log(key, value)
  };

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    jsonparser.write(value);
  }
};
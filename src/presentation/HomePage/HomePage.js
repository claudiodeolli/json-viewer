import { HomeContext } from '../../application/Home/HomeContext.js';

class HomePage extends HTMLElement {
  
  constructor() {
    super();
  }

  connectedCallback() {
    this.#render();
  }

  #render() {
    this.setAttribute('class', 'flex flex-col gap-5 items-center justify-center h-full w-full');
    this.innerHTML = `
      <div class="flex flex-col items-center">
        <span class="font-semibold text-lg">JSON Tree Viewer</span>
        <span>Simple JSON Viewer that runs completely on-client. No data exchange</span>
      </div>

      <input type="file" class="hidden" id="jsonFile" accept=".json">

      <button
        type="button"
        id="uploadButton"
        class="bg-[#000000] text-[#FFFFFF] py-2 px-8 rounded-3xl hover:bg-[#1E1E1E] transition-all duration-300 ease-in-out"
      >Upload</button>
    `;

    this.querySelector('#jsonFile').addEventListener('change', (event) => HomeContext.handleFileUpload(event));
    this.querySelector('#uploadButton').addEventListener('click', () => document.getElementById('jsonFile').click());
  }
}

customElements.define('home-page', HomePage);
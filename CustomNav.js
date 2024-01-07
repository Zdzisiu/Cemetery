class CustomNavigation extends HTMLElement {
   async fetchTemplate(type) {
      const response = await fetch(`templates/${type}-nav-template.html`);
      return response.text();
   }

   async render() {
      const template = await this.fetchTemplate(this.type);

      if (template) {
         this.innerHTML = template;
      } else {
         console.error(`Template not found for type: ${this.type}`);
      }
   }

   connectedCallback() {
      if (!this.rendered) {
         this.render();
         this.rendered = true;
      }
   }

   get type(){
      return this.getAttribute("type");
   }

   set type(val){
      this.setAttribute("type",val);
   }
}

customElements.define("my-nav", CustomNavigation);
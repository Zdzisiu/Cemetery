class IndexRender extends HTMLElement {
   render() {

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

customElements.define("index-render", IndexRender);
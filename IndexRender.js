class IndexRender extends HTMLElement {
   render() {
      this.innerHTML = `Index`
   }

   connectedCallback() {
      if (!this.rendered) {
         this.render();
         this.rendered = true;
      }

      switch (this.type){
         case "ghost":
            this.info = ghosts;
            break;
         case "shells":
            this.info = shells;
            break;
         case "balloons":
            this.info = balloons;
            break;
         case "code":
            this.info = code;
            break;
         case "other":
            this.info = other;
            break;
         default:
            this.info = ghosts;
            break;
      }
   }

   renderNoteColumn() {

   }

   get type(){
      return this.getAttribute("type");
   }

   set type(val){
      this.setAttribute("type",val);
   }
}

customElements.define("index-render", IndexRender);
class IndexRender extends HTMLElement {
   render() {
      switch (this.type) {
         case "ghost":
            this.informations = ghosts;
            break;
         case "shell":
            this.informations = shells;
            break;
         case "balloon":
            this.informations = balloons;
            break;
         case "code":
            this.informations = code;
            break;
         case "misc":
            this.informations = other;
            break;
         default:
            this.informations = ghosts;
            break;
      }

      const stateArrays = {};
      const indexLinkArrays = {};

      this.informations.forEach(obj => {
         const { state } = obj;
         if (!stateArrays[state]) {
            stateArrays[state] = [];
         }

         stateArrays[state].push(obj)
      });
      
      const noteInfo = {}
      for (const state in stateArrays) {
         const stateArray = stateArrays[state];
         stateArray.sort((a, b) => {
            let fa = a.name.toLowerCase(),
                fb = b.name.toLowerCase();
        
            if (fa < fb) {
                return -1;
            }
            if (fa > fb) {
                return 1;
            }
            return 0;
        });

        stateArray.sort((a, b) => {
         let fa = a.state.toLowerCase(),
             fb = b.state.toLowerCase();
     
         if (fa < fb) {
             return -1;
         }
         if (fa > fb) {
             return 1;
         }
         return 0;
     });
         indexLinkArrays[state] = stateArray.map(obj => `<a href="javascript: scrollToForm('${obj.name.replaceAll(' ','_')}');">${obj.name}</a><br/>`)
         if (!noteInfo[state]) {
            noteInfo[state] = [];
         }

         noteInfo[state] = {
            noteCount: Math.round(indexLinkArrays[state].length / 14)
         }

         noteInfo[state].noteCount = (noteInfo[state].noteCount == 0) ? 1 : noteInfo[state].noteCount

         console.log(noteInfo[state].noteCount)
      }

      const noteClasses = ["noteMain", "noteAccent", "noteSecondary", "noteAccent"]
      const blockClasses = ["secondaryBlock", "accentBlock"]
      const slicedArray = [];
      const notes = []
      const blocks = [];
      let j = 0;
      let prevState = "";

      for (const state in indexLinkArrays) {
         const links = indexLinkArrays[state];
         const noteCount = noteInfo[state].noteCount;

         slicedArray[state] = slicedArray[state] || [];


         for (let i = 0; i < noteCount; i++) {
            const startIndex = i * 14;
            const endIndex = startIndex + 14;
            const slice = links.slice(startIndex, endIndex);
            slicedArray[state].push(slice);
         }

         const remainingLinks = links.slice(noteCount * 14);
         if (remainingLinks.length > 0) {
            slicedArray[state].push(remainingLinks);
         }

         console.log(slicedArray[state][0])

         const array = slicedArray[state]

         for (let i = 0; i < array.length; i++, j++) {
            const columns = [array[i].slice(0, 7), array[i].slice(7)]
            const noteId = (j < 4) ? j : Math.round(j % 4)
            const noteClass = noteClasses[noteId]
            const note = `
               <div class="noteWrapper">
                  <span class="noteTitle${(noteClass == 'noteAccent') ? 'Left' : 'Right'}">${state}</span>
                  <div class="${noteClass}">
                     <div class="list">
                        <div class="listColumnL">
                              ${columns[0].join('')}
                        </div>
                        <div class="listColumnR">
                           ${columns[1].join('')}
                        </div>
                     </div>
                  </div>
               </div>`
            notes.push(note)
            prevState = state
         }
         //(state == prevState) ? '' :

      }

      for (const state in stateArrays) {
         const stateArray =  stateArrays[state]
         for (let i = 0; i < stateArray.length; i++, j++) {
            const item = stateArray[i]
            if (stateArray[i].dates != null) {
               const blockId = (j < 2) ? j : Math.round(j % 2)
               const blockClass = blockClasses[blockId]
               const block = `
            <div class="workColumn${(blockClass == 'secondaryBlock') ? 'R' : 'L'}">
            <div class="${blockClass}">
                <div class="blockTitle" id="${item.name.replaceAll(' ','_')}">${item.name}</div>
                <div class="blockContent">
                <div class="infoContent">
                    <div class="left">
                        <div><span class="secondaryText">Release Date: </span>${(item.dates.constructor === Array) ? item.dates[0] : item.dates}</div>
                        ${(item.dates[1] != null && item.dates.constructor === Array) ? '<div><span class="secondaryText">Last Update: </span>' + item.dates[1] + '</div>' : ''}
                    </div>
                    ${(item.version != null) ? '<div class="right"><span class="secondaryText">Last Version: </span>' + item.version + '</div>' : ''}
                    </div>
                    <div class="desc">${item.desc}</div>
                    <div class="download right"><a href="${(item.link == null || item.link == '') ? 'project/' + this.type + '/' + item.state + '/' + item.name + '.nar': item.link}" download>DOWNLOAD</a></div>
                </div>
            </div>
            <div class="mainBlock">
                <div class="blockTitle"></div>
                <div class="blockContent">
                    <div class="imgWrapper">
                        <img src="img/${this.type}/${item.state}/${item.name}.png" alt="${(this.type == "code") ? "No image :(" : item.name}">
                    </div>
                </div>
            </div>
        </div>`
               blocks.push(block)
            }
         }
      }

      let column = `
      <div id="indexNotes">
         <span id="indexTitle">${this.type} Index</span>
         ${notes.join('')}
      </div>
      `
      let rows = `<div class="workWrapper">
         ${blocks.join('')}
      </div>`
      console.log(stateArrays)
      this.innerHTML = column
      this.innerHTML += rows
   }

   connectedCallback() {
      if (!this.rendered) {
         this.render();
         this.rendered = true;
      }
   }

   get type() {
      return this.getAttribute("type");
   }

   set type(val) {
      this.setAttribute("type", val);
   }
}

customElements.define("index-render", IndexRender);
class CustomNavigation extends HTMLElement {
   render() {
      let site = {};
      let navs = [];
      let color = "";

      switch (this.type) {
         case "ghost": 
            ({ home: site.home, work: site.work, name: site.name } = {
               home : "index.html",
               work: "work_index.html",
               name: "cemetery"
            })
            navs = ["ghost","shell","balloon","code","misc"]
            color = "#35baee";
            break;
         case "art":
            ({ home: site.home, work: site.work, name: site.name } = {
               home : "index_shop.html",
               work: "shop_work_index.html",
               name: "tea shop"
            })
            navs = ["commissions","projects","gallery","other"]
            color = "#FF9999";
            break;
      }

      let navHtml = navs.map(nav => `<a href="${site.work}?type=${nav}">${nav}</a>`).join('');

      let logoHtml = `<a href="${site.home}">
         <span class="logo">
            <svg
            viewBox="0 0 161.44453 18.720734"
            version="1.1"
            id="svg1"
            inkscape:version="1.3 (0e150ed6c4, 2023-07-21)"
            sodipodi:docname="logo-ractangle-long.svg"
            xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
            xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:svg="http://www.w3.org/2000/svg">
            <sodipodi:namedview
            id="namedview1"
               pagecolor="#ffffff"
               bordercolor="#000000"
               borderopacity="0.25"
               inkscape:showpageshadow="2"
               inkscape:pageopacity="0.0"
               inkscape:pagecheckerboard="0"
               inkscape:deskcolor="#d1d1d1"
               inkscape:document-units="mm"
               inkscape:zoom="0.66724888"
               inkscape:cx="231.54779"
               inkscape:cy="385.91298"
               inkscape:window-width="1680"
               inkscape:window-height="987"
               inkscape:window-x="-8"
               inkscape:window-y="-8"
               inkscape:window-maximized="1"
               inkscape:current-layer="layer1" />
            <defs
               id="defs1" />
            <g
               inkscape:label="Warstwa 1"
               inkscape:groupmode="layer"
               id="layer1"
               transform="translate(-43.656247,-46.566667)">
               <g
                  id="g7-4-0"
                  transform="matrix(0.41156753,0,0,0.41156753,88.979187,-5.188958)">
               <path
                  style="fill:none;stroke:${color};stroke-width:1.765;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1"
                  d="m 84.957604,146.64299 c 0,0 -0.810494,9.91264 2.295591,14.15985 3.106085,4.24721 8.656997,7.77957 15.368865,7.78052 6.71187,9.5e-4 11.53386,-3.12144 14.74151,-7.35435 3.20765,-4.23291 2.50236,-14.8664 2.50236,-14.8664 z"
                  id="path1-1-1"
                  sodipodi:nodetypes="cszzcc" />
               <path
                  style="fill:none;stroke:${color};stroke-width:1.765;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1"
                  d="m 119.8454,146.37464 c 0,0 4.08519,-0.27515 5.69839,0.75904 1.80759,1.15881 3.45679,3.29998 3.43828,5.44705 -0.0177,2.04768 -1.59793,4.1083 -3.36819,5.13761 -1.81315,1.05425 -6.2797,0.39507 -6.2797,0.39507"
                  id="path2-8-2"
                  sodipodi:nodetypes="caaac" />
               <path
                  style="fill:none;stroke:${color};stroke-width:0.965;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1"
                  d="m 109.54105,146.61649 0.0496,5.79923 -3.17223,0.0496 0.0496,8.22797 6.34446,-0.19827 -0.24783,-8.12884 -2.97397,0.0496 z"
                  id="path3-3-9"
                  sodipodi:nodetypes="cccccccc" />
               <path
                  style="fill:none;stroke:${color};stroke-width:1.265;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1"
                  d="m 98.696623,141.6661 c 0,0 -1.882469,-3.34222 -1.557684,-5.28983 0.292969,-1.75682 2.853797,-2.50241 3.310111,-4.31346 0.47917,-1.90175 -1.542137,-5.67786 -1.542137,-5.67786 m 7.044757,15.35125 c 0,0 -1.74776,-3.65129 -1.35942,-5.58723 0.36731,-1.83117 2.65553,-2.20501 3.11184,-4.01606 0.47917,-1.90175 -1.54213,-5.67786 -1.54213,-5.67786"
                  id="path4-6-1"
                  sodipodi:nodetypes="cssccssc" />
               <path
                  style="fill:none;stroke:${color};stroke-width:0.964999;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1"
                  d="m 82.924789,168.86375 37.992591,0.0701"
                  id="path6-0-9" />
               <path
                  style="fill:none;stroke:${color};stroke-width:0.964999;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1"
                  d="m 90.49527,170.75637 23.20212,-0.21029"
                  id="path7-6-3" />
               </g>
               <text
                  xml:space="preserve"
                  style="font-size:13.6838px;line-height:0;fill:white;fill-opacity:1;stroke:none;stroke-width:0.809108;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1"
                  x="174.66425"
                  y="51.118362"
                  id="text7-2-1"><tspan
                  sodipodi:role="line"
                  id="tspan7-7-9"
                  style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;line-height:1.25;font-family:Bahnschrift;-inkscape-font-specification:Bahnschrift;text-align:center;text-anchor:middle;fill:white;fill-opacity:1;stroke:none;stroke-width:0.809108;stroke-dasharray:none;stroke-opacity:1"
                  x="174.66425"
                  y="51.118362" /><tspan
                  sodipodi:role="line"
                  style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:17.485px;line-height:0.5;font-family:Bahnschrift;-inkscape-font-specification:Bahnschrift;text-align:center;text-anchor:middle;fill:white;fill-opacity:1;stroke:none;stroke-width:0.809108;stroke-dasharray:none;stroke-opacity:1"
                  x="174.66425"
                  y="65.159332"
                  id="tspan8-9-4">TEACUP</tspan></text>
               <text
                  xml:space="preserve"
                  style="font-size:13.6838px;line-height:0;fill:white;fill-opacity:1;stroke:none;stroke-width:0.809108;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1"
                  x="82.019943"
                  y="51.246429"
                  id="text7-2-1-3"><tspan
                  sodipodi:role="line"
                  id="tspan7-7-9-1"
                  style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;line-height:1.25;font-family:Bahnschrift;-inkscape-font-specification:Bahnschrift;text-align:center;text-anchor:middle;fill:white;fill-opacity:1;stroke:none;stroke-width:0.809108;stroke-dasharray:none;stroke-opacity:1"
                  x="82.019943"
                  y="51.246429" /><tspan
                  sodipodi:role="line"
                  style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:17.485px;line-height:0.5;font-family:Bahnschrift;-inkscape-font-specification:Bahnschrift;text-align:center;text-anchor:middle;fill:white;fill-opacity:1;stroke:none;stroke-width:0.809108;stroke-dasharray:none;stroke-opacity:1"
                  x="82.019943"
                  y="65.287399"
                  id="tspan8-9-4-4">INTERNET</tspan></text>
            </g>
            </svg>
            <p class="site_type">${site.name}</p>
         </span>
      </a>`   

      this.innerHTML = `<header>
         ${logoHtml}
         <nav>${navHtml}</nav>
      </header>`
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
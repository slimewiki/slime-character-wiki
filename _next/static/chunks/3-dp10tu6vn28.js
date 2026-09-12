(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,60305,e=>{"use strict";var r=e.i(43476),a=e.i(71645);let n=[{id:"NA",label:"NA",host:"api-us",code:3},{id:"EU",label:"EU",host:"api-eu",code:4},{id:"Asia",label:"Asia",host:"api-ap",code:2},{id:"Japan",label:"Japan",host:"api",code:1}],t="slime-news-region";e.s(["NewsClient",0,function(){let e,[o,s]=(0,a.useState)("NA"),i=(0,a.useRef)(null);(0,a.useEffect)(()=>{try{let e=localStorage.getItem(t);e&&n.some(r=>r.id===e)&&s(e)}catch{}},[]),(0,a.useEffect)(()=>{i.current?.style.setProperty("background","#1e1d1b","important")},[]);let l=n.find(e=>e.id===o)??n[0];return(0,r.jsxs)("div",{className:"nk-news",children:[(0,r.jsx)("div",{className:"nk-news-regions",role:"tablist","aria-label":"Server region",children:n.map(e=>(0,r.jsx)("button",{type:"button",role:"tab","aria-selected":e.id===o,onClick:()=>(function(e){s(e);try{localStorage.setItem(t,e)}catch{}})(e.id),className:`nk-news-region${e.id===o?" is-active":""}`,children:e.label},e.id))}),(0,r.jsx)("div",{className:"nk-news-frame",ref:i,style:{background:"#1e1d1b"},children:(0,r.jsx)("iframe",{title:`In-game notices (${l.label})`,src:(e="Japan"===l.id?1:2,`https://${l.host}.ten-sura-m.wfs.games/web/announcement?region=${l.code}&language=${e}`),referrerPolicy:"strict-origin-when-cross-origin",loading:"lazy",style:{colorScheme:"light"}},l.id)}),(0,r.jsx)("p",{className:"nk-news-note",children:"Official in-game notices, served live by the game per region. Switch regions above."}),(0,r.jsx)("style",{children:`
        .nk-news { display: flex; flex-direction: column; gap: 16px; }
        .nk-news-regions {
          display: flex; flex-wrap: wrap; gap: 8px; justify-content: center;
        }
        .nk-news-region {
          appearance: none; cursor: pointer;
          padding: 8px 20px; border-radius: 999px;
          font: 600 0.92rem/1 inherit; letter-spacing: 0.02em;
          color: rgba(233, 237, 250, 0.72);
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.12);
          transition: background 0.15s ease, color 0.15s ease, border-color 0.15s ease, transform 0.1s ease;
        }
        .nk-news-region:hover { background: rgba(255, 255, 255, 0.1); color: #fff; }
        .nk-news-region:active { transform: translateY(1px); }
        .nk-news-region.is-active {
          color: #fff;
          background: linear-gradient(180deg, #d24a40, #b23a31);
          border-color: rgba(210, 74, 64, 0.9);
          box-shadow: 0 6px 18px rgba(178, 58, 49, 0.35);
        }
        .nk-news-frame {
          width: 100%;
          height: min(80vh, 940px);
          min-height: 560px;
          border-radius: 18px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.1);
          /* Dark backdrop (#1e1d1b, matching the left banner column). The real value is set as an INLINE
             !important in the component — this stylesheet rule is dropped by Next's <style> hoisting — but
             it's kept as a same-value fallback. See the iframe rule below for why color-scheme matters. */
          background: #1e1d1b;
        }
        /* The game announcement page is opaque under the site's :root color-scheme:dark, which hides the
           backdrop → notices looked white. Forcing the iframe to a light color-scheme makes its canvas
           transparent so the #1e1d1b backdrop shows through. Also set inline on the element for certainty. */
        .nk-news-frame iframe { color-scheme: light; }
        .nk-news-frame iframe { width: 100%; height: 100%; border: 0; display: block; }
        .nk-news-note {
          text-align: center; margin: 0;
          font-size: 0.82rem; color: rgba(233, 237, 250, 0.55);
        }
      `})]})}])}]);
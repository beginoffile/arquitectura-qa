(()=>{"use strict";"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("./service-worker.js").then((function(e){console.log("SW registered",e)})).catch((function(e){console.log("Sw Registration failed",e)}))}))})();
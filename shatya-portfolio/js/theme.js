(function(){
  var root=document.documentElement;
  function set(m){root.setAttribute("data-theme",m);try{localStorage.setItem("theme",m)}catch(e){}
    var meta=document.querySelector('meta[name="theme-color"]'); if(meta) meta.content=m==="dark"?"#0B1522":"#0B7A75";
    document.dispatchEvent(new CustomEvent("themechange",{detail:m}))}
  window.Theme={get:function(){return root.getAttribute("data-theme")},toggle:function(){set(this.get()==="dark"?"light":"dark")}};
})();

(function(){
  var KEY="lang", cur="en";
  function t(k){var d=window.TRANSLATIONS;return (d[cur]&&d[cur][k])||d.en[k]||k}
  function apply(){
    document.documentElement.lang=cur;
    document.querySelectorAll("[data-i18n]").forEach(function(el){el.textContent=t(el.dataset.i18n)});
    document.querySelectorAll("[data-i18n-aria]").forEach(function(el){el.setAttribute("aria-label",t(el.dataset.i18nAria))});
    document.querySelectorAll("[data-i18n-alt]").forEach(function(el){el.setAttribute("alt",t(el.dataset.i18nAlt))});
    var l=document.getElementById("lang-label"); if(l) l.textContent=cur==="en"?"ID":"EN";
    document.title=t("meta.title");
    document.dispatchEvent(new CustomEvent("langchange",{detail:cur}));
  }
  function set(l){cur=l;try{localStorage.setItem(KEY,l)}catch(e){}apply()}
  function init(){try{var s=localStorage.getItem(KEY);if(s==="en"||s==="id")cur=s}catch(e){}}
  window.Lang={t:t,apply:apply,init:init,toggle:function(){set(cur==="en"?"id":"en")},get:function(){return cur}};
})();

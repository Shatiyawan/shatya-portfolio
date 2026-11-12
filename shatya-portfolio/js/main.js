(function(){
  var S=window.SITE, $=function(s,r){return (r||document).querySelector(s)}, $$=function(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s))};
  var t=function(k){return Lang.t(k)};
  var P={web:'<rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8M12 17v4"/>',uiux:'<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M3 9h18M9 21V9"/>',translate:'<path d="M4 5h9M8.5 3v2M6 5c.5 3 2.5 6 6 8M12 5c-.5 3-3 6.5-7 8.5"/><path d="M13 21l4-9 4 9M14.5 18h5"/>',graphic:'<path d="M12 3a9 9 0 100 18c1.5 0 2-1 1.5-2s0-2 1.5-2h2a4 4 0 004-4c0-5-4.5-10-9-10z"/><circle cx="7.5" cy="11" r="1"/><circle cx="11" cy="7" r="1"/><circle cx="16" cy="8" r="1"/>',video:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M10 9l5 3-5 3z"/>',multimedia:'<path d="M4 4h16v16H4zM4 9h16M9 4v5M15 4v5"/>',office:'<path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4M9 12h6M9 16h6"/>',code:'<path d="M8 8l-5 4 5 4M16 8l5 4-5 4M14 5l-4 14"/>',infographic:'<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',content:'<path d="M4 20h4L19 9a2.8 2.8 0 00-4-4L4 16z"/>',research:'<circle cx="11" cy="11" r="7"/><path d="M21 21l-5-5"/>',doc:'<path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4M9 13h6M9 17h4"/>',download:'<path d="M12 4v11M7 11l5 5 5-5M5 20h14"/>',eye:'<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',whatsapp:'<path d="M3 21l1.6-5A8.5 8.5 0 1112 20.5a8.4 8.4 0 01-4-1z"/><path d="M9 9c0 3 3 6 6 6l1-2-2-1-1 .8c-1-.4-2-1.4-2.4-2.4L11 10l-1-2z"/>',mail:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',link:'<path d="M10 14a4 4 0 005.7 0l3-3a4 4 0 00-5.7-5.7l-1 1M14 10a4 4 0 00-5.7 0l-3 3a4 4 0 005.7 5.7l1-1"/>',sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4 12H2M22 12h-2M5 5l1.5 1.5M17.5 17.5L19 19M19 5l-1.5 1.5M6.5 17.5L5 19"/>',moon:'<path d="M20 14.5A8 8 0 019.5 4 8 8 0 1020 14.5z"/>',menu:'<path d="M4 7h16M4 12h16M4 17h16"/>',close:'<path d="M6 6l12 12M18 6L6 18"/>',external:'<path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 01-1 1H5a1 1 0 01-1-1V7a1 1 0 011-1h5"/>'};
  function ico(n){return '<svg class="ico" viewBox="0 0 24 24" aria-hidden="true" focusable="false">'+(P[n]||P.link)+'</svg>'}
  function loc(o){return o[Lang.get()]||o.en}
  function esc(s){return String(s).replace(/[&<>"]/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})}
  function icons(root){$$("[data-icon]",root).forEach(function(el){if(!el.firstChild)el.innerHTML=ico(el.dataset.icon)})}
  function waUrl(topic){var m=t("wa.message");if(topic)m+=" "+t("wa.topic")+" "+topic+".";return "https://wa.me/"+S.whatsappNumber+"?text="+encodeURIComponent(m)}
  function updateWA(){$$("[data-wa]").forEach(function(a){a.href=waUrl(a.dataset.waTopic?t(a.dataset.waTopic):"")})}

  /* ---- static lists ---- */
  function renderSkills(){
    $("#skills-primary").innerHTML=S.skills.primary.map(function(s){return '<div class="primary" data-reveal>'+ico(s.icon)+'<strong data-i18n="'+s.key+'"></strong></div>'}).join("");
    $("#skills-additional").innerHTML=S.skills.additional.map(function(s){return '<li data-reveal>'+ico(s.icon)+'<span data-i18n="'+s.key+'"></span></li>'}).join("");
  }
  function renderExperience(){
    $("#timeline").innerHTML=S.experience.map(function(e){return '<li data-reveal><h3 data-i18n="'+e.key+'.role"></h3><p class="org" data-i18n="'+e.key+'.org"></p><span class="dur" data-i18n="'+e.key+'.duration"></span><p data-i18n="'+e.key+'.desc"></p>'+(e.tags?'<ul class="tags" data-tags="'+e.key+'.tags"></ul>':'')+'</li>'}).join("");
  }
  function renderTags(){$$("[data-tags]").forEach(function(ul){ul.innerHTML=t(ul.dataset.tags).split("|").map(function(x){return "<li><span>"+esc(x)+"</span></li>"}).join("")})}
  function renderServices(){
    $("#services-grid").innerHTML=S.services.map(function(s){return '<article class="card svc" data-reveal>'+ico(s.icon)+'<h3 data-i18n="'+s.key+'.title"></h3><p data-i18n="'+s.key+'.desc"></p><a class="btn btn-ghost" data-wa data-wa-topic="'+s.key+'.title" target="_blank" rel="noopener" href="#"><span data-i18n="services.cta"></span></a></article>'}).join("");
  }
  function renderCV(){
    $("#cv-grid").innerHTML=S.cvs.map(function(c){return '<article class="card cv-card '+c.tone+'" data-reveal><div class="cv-top"><div class="cv-icon">'+ico("doc")+'</div><div><span class="cv-type" data-i18n="'+c.key+'.type"></span><h3 data-i18n="'+c.key+'.title"></h3></div></div><p data-i18n="'+c.key+'.sub"></p><div class="cv-btns"><button class="btn btn-primary" type="button" data-cv="'+c.id+'">'+ico("eye")+'<span data-i18n="cv.preview"></span></button><a class="btn btn-ghost" href="'+c.file+'" download="'+c.downloadName+'">'+ico("download")+'<span data-i18n="cv.download"></span></a></div></article>'}).join("")+'<p class="muted small" data-i18n="cv.note" style="grid-column:1/-1;margin:0"></p>';
  }
  function renderContact(){
    var li=[];
    li.push(S.email?'<li><a href="mailto:'+esc(S.email)+'">'+ico("mail")+'<span><strong>'+t("contact.email")+'</strong><small>'+esc(S.email)+'</small></span></a></li>':'<li><span class="off">'+ico("mail")+'<span><strong>'+t("contact.email")+'</strong><small>'+t("contact.emailSoon")+'</small></span></span></li>');
    S.socials.forEach(function(s){li.push(s.url?'<li><a href="'+esc(s.url)+'" target="_blank" rel="noopener">'+ico("link")+'<span><strong>'+esc(s.label)+'</strong></span></a></li>':'<li><span class="off">'+ico("link")+'<span><strong>'+esc(s.label)+'</strong><small>'+t("contact.social")+'</small></span></span></li>')});
    $("#contact-list").innerHTML=li.join("");
  }

  /* ---- portfolio ---- */
  var filter="all";
  function renderFilters(){
    $("#filters").innerHTML=S.categories.map(function(c){return '<button type="button" data-cat="'+c+'" aria-pressed="'+(c===filter)+'">'+t("cat."+c)+'</button>'}).join("");
  }
  function catIcon(c){return {uiux:"uiux",web:"web",graphic:"graphic",infographic:"infographic",multimedia:"multimedia"}[c]||"graphic"}
  function renderProjects(){
    var list=PROJECTS.filter(function(p){return filter==="all"||p.category===filter});
    $("#project-grid").innerHTML=list.length?list.map(function(p){
      var cover=p.image?'<img src="'+esc(p.image)+'" alt="" loading="lazy" onerror="this.remove()">':ico(catIcon(p.category));
      return '<button class="card project" type="button" data-id="'+p.id+'"><div class="cover">'+cover+'</div><div class="project-info"><div class="badges"><span class="badge '+p.status+'">'+t("status."+p.status)+'</span><span class="badge">'+t("cat."+p.category)+'</span></div><h3>'+esc(loc(p.title))+'</h3><p>'+esc(loc(p.summary))+'</p></div></button>'}).join(""):'<p class="empty">'+t("portfolio.empty")+'</p>';
  }
  function openProject(id){
    var p=PROJECTS.filter(function(x){return x.id===id})[0]; if(!p)return;
    var d=$("#project-dialog");
    $("#pd-body").innerHTML='<button class="icon-btn close" type="button" aria-label="'+t("ui.close")+'" data-close>'+ico("close")+'</button><div class="badges"><span class="badge '+p.status+'">'+t("status."+p.status)+'</span></div><h3 id="pd-title">'+esc(loc(p.title))+'</h3><p>'+esc(loc(p.details))+'</p><dl><dt>'+t("portfolio.category")+'</dt><dd>'+t("cat."+p.category)+'</dd><dt>'+t("portfolio.role")+'</dt><dd>'+esc(loc(p.role))+'</dd><dt>'+t("portfolio.tools")+'</dt><dd>'+esc(p.tools.join(", "))+'</dd></dl>'+(p.link?'<a class="btn btn-primary" href="'+esc(p.link)+'" target="_blank" rel="noopener">'+t("portfolio.visit")+'</a>':'');
    d.showModal();
  }

  /* ---- CV preview ---- */
  function openCV(id){
    var c=S.cvs.filter(function(x){return x.id===id})[0]; if(!c)return;
    if(navigator.pdfViewerEnabled===false){window.open(c.file,"_blank","noopener");return}
    $("#cvd-title").textContent=t(c.key+".title");
    $("#cvd-frame").src=c.file+"#view=FitH";
    $("#cvd-tab").href=c.file; var dl=$("#cvd-dl"); dl.href=c.file; dl.setAttribute("download",c.downloadName);
    $("#cv-dialog").showModal();
  }

  /* ---- events ---- */
  function bind(){
    $("#lang-toggle").onclick=function(){Lang.toggle()};
    $("#theme-toggle").onclick=function(){Theme.toggle()};
    var nav=$("#nav"), mb=$("#menu-toggle");
    mb.onclick=function(){var o=nav.classList.toggle("open");mb.setAttribute("aria-expanded",o)};
    $$("#nav a").forEach(function(a){a.addEventListener("click",function(){nav.classList.remove("open");mb.setAttribute("aria-expanded","false")})});
    $("#filters").addEventListener("click",function(e){var b=e.target.closest("[data-cat]");if(!b)return;filter=b.dataset.cat;renderFilters();renderProjects()});
    $("#project-grid").addEventListener("click",function(e){var b=e.target.closest("[data-id]");if(b)openProject(b.dataset.id)});
    $("#cv-grid").addEventListener("click",function(e){var b=e.target.closest("[data-cv]");if(b)openCV(b.dataset.cv)});
    $$("dialog").forEach(function(d){d.addEventListener("click",function(e){if(e.target===d||e.target.closest("[data-close]"))d.close()})});
    $("#cvd-close").onclick=function(){$("#cv-dialog").close()};
    $("#cv-dialog").addEventListener("close",function(){$("#cvd-frame").removeAttribute("src")});
  }
  function themeIcon(){$("#theme-toggle").innerHTML=ico(Theme.get()==="dark"?"sun":"moon");$("#menu-toggle").innerHTML=ico("menu")}
  function observe(){
    var els=$$("[data-reveal]");
    if(!("IntersectionObserver" in window)){els.forEach(function(e){e.classList.add("in")});return}
    var io=new IntersectionObserver(function(en){en.forEach(function(x){if(x.isIntersecting){x.target.classList.add("in");io.unobserve(x.target)}})},{threshold:.12});
    els.forEach(function(e){io.observe(e)});
    var links=$$("#nav a"), secs=links.map(function(a){return $(a.getAttribute("href"))});
    var so=new IntersectionObserver(function(en){en.forEach(function(x){if(x.isIntersecting){links.forEach(function(a){a.classList.toggle("active",a.getAttribute("href")==="#"+x.target.id);if(a.classList.contains("active"))a.setAttribute("aria-current","true");else a.removeAttribute("aria-current")})}})},{rootMargin:"-45% 0px -50% 0px"});
    secs.forEach(function(s){if(s)so.observe(s)});
  }
  function boot(){
    Lang.init();
    ["about","skills","experience","services","portfolio","cv","contact"].forEach(function(id){var h=$("#"+id+" h2"),i=$("#"+id+" .section-intro");[h,i].forEach(function(el){if(el)el.setAttribute("data-reveal","")})});
    renderSkills();renderExperience();renderServices();renderCV();renderFilters();renderProjects();renderContact();
    icons();themeIcon();bind();
    $("#year").textContent=new Date().getFullYear();
    document.addEventListener("langchange",function(){renderTags();renderFilters();renderProjects();renderContact();updateWA()});
    document.addEventListener("themechange",themeIcon);
    Lang.apply(); observe();
  }
  document.addEventListener("DOMContentLoaded",boot);
})();

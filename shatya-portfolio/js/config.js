/* ===== Central site configuration. Edit here; no other file needs to change. ===== */
window.SITE = {
  whatsappNumber: "628524005509",          // international format, digits only
  email: "",                               // e.g. "you@example.com" (empty = placeholder shown)
  socials: [                               // add a full URL to activate each one
    { id: "linkedin",  label: "LinkedIn",  url: "" },
    { id: "instagram", label: "Instagram", url: "" },
    { id: "behance",   label: "Behance",   url: "" },
    { id: "github",    label: "GitHub",    url: "" }
  ],
  /* CV files. Use RELATIVE paths (no leading slash) so they work on GitHub Pages project sites.
     To replace a PDF, overwrite the file or change `file` here. */
  cvs: [
    { id: "glints",    key: "cv.glints",    tone: "glints",    file: "assets/cv/firgin-shatyawan-glints-cv.pdf",    downloadName: "Firgin-Shatyawan-Glints-CV.pdf" },
    { id: "siapkerja", key: "cv.siapkerja", tone: "siapkerja", file: "assets/cv/firgin-shatyawan-siapkerja-cv.pdf", downloadName: "Firgin-Shatyawan-SIAPkerja-CV.pdf" }
  ],
  /* Text for each key lives in translations.js */
  skills: {
    primary: [ { key: "skill.web", icon: "web" }, { key: "skill.uiux", icon: "uiux" }, { key: "skill.translation", icon: "translate" } ],
    additional: [
      { key: "skill.graphic", icon: "graphic" }, { key: "skill.video", icon: "video" }, { key: "skill.multimedia", icon: "multimedia" },
      { key: "skill.office", icon: "office" }, { key: "skill.code", icon: "code" }, { key: "skill.infographic", icon: "infographic" },
      { key: "skill.content", icon: "content" }, { key: "skill.research", icon: "research" }
    ]
  },
  experience: [ { key: "exp.freelance", tags: true }, { key: "exp.pr" }, { key: "exp.waitress" } ],
  services: [ { key: "svc.uiux", icon: "uiux" }, { key: "svc.translation", icon: "translate" }, { key: "svc.graphic", icon: "graphic" } ],
  categories: ["all", "uiux", "web", "graphic", "infographic", "multimedia"]
};

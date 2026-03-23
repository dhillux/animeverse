/* ═══════════════════════════════════════════════════
   MangaVerse — Global Stylesheet
   Bootstrap 5 + Custom Design System
   ═══════════════════════════════════════════════════ */

/* ── 1. CSS VARIABLES ── */
:root {
  --mv-red:    #7250dc;
  --mv-red2:   #5c3db0;
  --mv-gold:   #ffd166;
  --mv-dark:   #08080e;
  --mv-dark2:  #0f0f1a;
  --mv-card:   #121220;
  --mv-border: rgba(114, 80, 220, 0.25);
  --mv-muted:  #6a6a8a;
  --mv-trans:  rgba(114, 80, 220, 0.08);
}

/* ── 2. BASE ── */
*, *::before, *::after { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  background: var(--mv-dark);
  font-family: 'Nunito', sans-serif;
  color: #e8e8f0;
  min-height: 100vh;
  -webkit-font-smoothing: antialiased;
}
::selection { background: var(--mv-red); color: #fff; }
::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: var(--mv-dark2); }
::-webkit-scrollbar-thumb { background: #7250dc; border-radius: 3px; }

h1, h2, h3, h4,
.display-1, .display-2, .display-3,
.display-4, .display-5, .display-6 {
  font-family: 'Bebas Neue', sans-serif;
  letter-spacing: 2px;
}

/* ── 3. TYPOGRAPHY UTILITIES ── */
.label-text {
  font-family: 'Oswald', sans-serif;
  font-size: .72rem;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--mv-red);
}

/* ── 4. NAVBAR ── */
.navbar {
  background: rgba(8, 8, 14, 0.92) !important;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--mv-border);
  padding: .75rem 0;
}
.navbar-brand {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.7rem;
  letter-spacing: 3px;
  color: #fff !important;
  text-decoration: none;
}
.navbar-brand span { color: var(--mv-red); }
.nav-link {
  font-family: 'Oswald', sans-serif;
  font-size: .82rem;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: var(--mv-muted) !important;
  transition: color .2s;
  padding: .4rem .75rem !important;
  position: relative;
}
.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0; left: .75rem; right: .75rem;
  height: 1px;
  background: var(--mv-red);
  transform: scaleX(0);
  transition: transform .25s;
}
.nav-link:hover, .nav-link.active { color: #fff !important; }
.nav-link:hover::after, .nav-link.active::after { transform: scaleX(1); }
.navbar-toggler { border: none; box-shadow: none !important; }

/* ── 5. BUTTONS ── */
.btn-mv-primary {
  background: var(--mv-red);
  color: #fff;
  border: none;
  font-family: 'Oswald', sans-serif;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  transition: background .2s, transform .15s, box-shadow .2s;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: .4rem;
  border-radius: 6px;
  padding: .45rem 1.1rem;
}
.btn-mv-primary:hover {
  background: var(--mv-red2);
  color: #fff;
  transform: translateY(-1px);
  box-shadow: 0 6px 20px rgba(114, 80, 220, .35);
}
.btn-mv-outline {
  border: 1px solid var(--mv-border);
  color: #fff;
  font-family: 'Oswald', sans-serif;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  background: transparent;
  transition: border-color .2s, color .2s, background .2s, transform .15s;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: .4rem;
  border-radius: 6px;
  padding: .45rem 1.1rem;
}
.btn-mv-outline:hover {
  border-color: var(--mv-red);
  color: var(--mv-red);
  background: rgba(114, 80, 220, .06);
  transform: translateY(-1px);
}

/* ── 6. TICKER ── */
.ticker-wrap { background: var(--mv-red); overflow: hidden; padding: .45rem 0; }
.ticker {
  display: flex;
  gap: 3rem;
  animation: ticker 35s linear infinite;
  white-space: nowrap;
  width: max-content;
}
.ticker-item {
  font-family: 'Oswald', sans-serif;
  font-size: .75rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #fff;
  display: flex;
  align-items: center;
  gap: .5rem;
}
.ticker-item::before { content: '◆'; font-size: .45rem; opacity: .7; }
@keyframes ticker {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}

/* ── 7. COMIC CARDS ── */
.mv-card {
  background: var(--mv-card);
  border: 1px solid rgba(255, 255, 255, .05);
  border-radius: 10px;
  transition: transform .25s, border-color .25s, box-shadow .25s;
}
.mv-card:hover {
  transform: translateY(-6px);
  border-color: var(--mv-border);
  box-shadow: 0 16px 40px rgba(0, 0, 0, .5);
}
.comic-thumb {
  aspect-ratio: .72;
  border-radius: 8px 8px 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  position: relative;
  overflow: hidden;
}
.comic-thumb-overlay {
  position: absolute; inset: 0;
  background: linear-gradient(0deg, rgba(0,0,0,.85), transparent 55%);
}
.badge-mv {
  font-family: 'Oswald', sans-serif;
  font-size: .58rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: .18rem .55rem;
  border-radius: 4px;
  position: absolute;
  top: .5rem; left: .5rem;
}
.ch-label {
  position: absolute;
  bottom: .5rem; right: .6rem;
  font-family: 'Oswald', sans-serif;
  font-size: .62rem;
  color: var(--mv-gold);
  letter-spacing: 1px;
}
.comic-title-card {
  font-family: 'Oswald', sans-serif;
  font-size: .9rem;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.comic-genre-card { font-size: .72rem; color: var(--mv-muted); }
.star-gold { color: var(--mv-gold); font-size: .72rem; }

/* ── 8. GENRE PILLS ── */
.genre-pill {
  font-family: 'Oswald', sans-serif;
  font-size: .72rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: .32rem .95rem;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, .1);
  color: var(--mv-muted);
  background: transparent;
  cursor: pointer;
  transition: all .2s;
}
.genre-pill:hover, .genre-pill.active {
  background: var(--mv-red);
  border-color: var(--mv-red);
  color: #fff;
}

/* ── 9. UPDATE LIST ── */
.update-item {
  display: grid;
  grid-template-columns: 60px 1fr auto;
  gap: 1rem;
  align-items: center;
  background: var(--mv-card);
  border: 1px solid rgba(255, 255, 255, .04);
  border-radius: 8px;
  padding: .75rem 1rem;
  text-decoration: none;
  color: inherit;
  transition: border-color .2s, transform .2s;
}
.update-item:hover { border-color: var(--mv-border); transform: translateX(5px); color: inherit; }
.update-thumb-sm {
  width: 60px; height: 78px; border-radius: 5px;
  display: flex; align-items: center; justify-content: center;
  font-size: 1.7rem;
}
.update-title-sm { font-family: 'Oswald', sans-serif; font-size: .92rem; font-weight: 600; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.update-ch-sm   { font-size: .78rem; color: var(--mv-red); }
.update-time-sm { font-size: .68rem; color: var(--mv-muted); }

/* ── 10. GENRE SECTION CARDS ── */
.genre-card-mv {
  background: var(--mv-card);
  border: 1px solid rgba(255, 255, 255, .05);
  border-radius: 8px;
  padding: 1.5rem 1rem;
  text-align: center;
  text-decoration: none;
  color: inherit;
  display: block;
  transition: all .25s;
}
.genre-card-mv:hover {
  border-color: var(--mv-red);
  transform: translateY(-4px);
  background: rgba(114, 80, 220, .06);
  color: inherit;
}
.genre-card-mv .g-name {
  font-family: 'Oswald', sans-serif;
  font-size: .75rem;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: var(--mv-muted);
  transition: color .2s;
}
.genre-card-mv:hover .g-name { color: #fff; }
.genre-card-mv .g-count { font-size: .68rem; color: var(--mv-red); margin-top: .2rem; }

/* ── 11. FEATURE CARDS ── */
.feature-card-mv {
  background: var(--mv-card);
  border: 1px solid rgba(255, 255, 255, .05);
  border-radius: 10px;
  padding: 2rem;
  transition: border-color .2s, transform .2s;
  height: 100%;
}
.feature-card-mv:hover { border-color: var(--mv-border); transform: translateY(-3px); }
.feature-title-mv { font-family: 'Oswald', sans-serif; font-size: 1.05rem; font-weight: 600; letter-spacing: 1px; margin-bottom: .5rem; }

/* ── 12. FEATURED BANNER ── */
.featured-banner {
  background: var(--mv-card);
  border: 1px solid var(--mv-border);
  border-radius: 14px;
  overflow: hidden;
}
.featured-art {
  background: linear-gradient(135deg, #1a0a2e, #7250dc, #ff6b35);
  min-height: 280px;
  display: flex; align-items: center;
  justify-content: center; font-size: 6rem;
  position: relative;
}
.featured-art::after {
  content: ''; position: absolute; inset: 0;
  background: linear-gradient(90deg, transparent 40%, var(--mv-card));
}
.featured-tag-mv {
  font-family: 'Oswald', sans-serif;
  font-size: .65rem; letter-spacing: 1.5px; text-transform: uppercase;
  padding: .25rem .75rem; border-radius: 4px;
  background: rgba(114,80,220,.12);
  border: 1px solid rgba(114,80,220,.3);
  color: var(--mv-red);
}

/* ── 13. SECTION BG ── */
.bg-mv-dark2 {
  background: var(--mv-dark2) !important;
  border-top: 1px solid rgba(255, 255, 255, .04);
  border-bottom: 1px solid rgba(255, 255, 255, .04);
}

/* ── 14. FOOTER ── */
footer { background: var(--mv-dark2); border-top: 1px solid rgba(255, 255, 255, .06); }
.footer-heading { font-family: 'Oswald', sans-serif; font-size: .78rem; letter-spacing: 2.5px; text-transform: uppercase; margin-bottom: 1.2rem; color: #fff; }
.footer-link { color: var(--mv-muted); text-decoration: none; font-size: .87rem; display: block; margin-bottom: .5rem; transition: color .2s, transform .2s; }
.footer-link:hover { color: #fff; transform: translateX(3px); }
.social-btn-mv {
  width: 36px; height: 36px; border-radius: 6px;
  border: 1px solid var(--mv-border);
  display: inline-flex; align-items: center; justify-content: center;
  font-size: 1rem; transition: all .2s;
  text-decoration: none; color: var(--mv-muted);
}
.social-btn-mv:hover { background: var(--mv-red); border-color: var(--mv-red); color: #fff; transform: translateY(-2px); }

/* ── 15. CTA SECTION ── */
.cta-section { position: relative; overflow: hidden; }
.cta-section::before {
  content: ''; position: absolute; inset: 0;
  background: radial-gradient(ellipse 60% 80% at 50% 50%, rgba(114,80,220,.1), transparent);
  pointer-events: none;
}

/* ── 16. SCROLL REVEAL ── */
[data-reveal] {
  opacity: 0;
  transform: translateY(28px);
  transition: opacity .65s ease, transform .65s ease;
}
[data-reveal].revealed { opacity: 1; transform: translateY(0); }
[data-delay="100"] { transition-delay: .1s; }
[data-delay="150"] { transition-delay: .15s; }
[data-delay="200"] { transition-delay: .2s; }
[data-delay="250"] { transition-delay: .25s; }
[data-delay="300"] { transition-delay: .3s; }
[data-delay="350"] { transition-delay: .35s; }
[data-delay="400"] { transition-delay: .4s; }
[data-delay="450"] { transition-delay: .45s; }
[data-delay="500"] { transition-delay: .5s; }

/* ── 17. THUMB GRADIENTS ── */
.t1  { background: linear-gradient(135deg, #1a1a2e, #7250dc); }
.t2  { background: linear-gradient(135deg, #0d1b2a, #1b4965); }
.t3  { background: linear-gradient(135deg, #2d1b69, #9b2335); }
.t4  { background: linear-gradient(135deg, #1a2f1a, #2d7a3a); }
.t5  { background: linear-gradient(135deg, #3d1c02, #c76b2a); }
.t6  { background: linear-gradient(135deg, #1a0a2e, #6b35d3); }
.t7  { background: linear-gradient(135deg, #0a1f2e, #0d4f6e); }
.t8  { background: linear-gradient(135deg, #2e1a0a, #8c4a1a); }
.t9  { background: linear-gradient(135deg, #1a2e2e, #2d8a7a); }
.t10 { background: linear-gradient(135deg, #2e2a0a, #8a7a2d); }
.t11 { background: linear-gradient(135deg, #0a1a2e, #2d5a8f); }
.t12 { background: linear-gradient(135deg, #2e0a1a, #8f2d5a); }

/* ── 18. PAGE HERO (shared inner pages) ── */
.page-hero {
  padding: 9rem 0 5rem;
  background: linear-gradient(135deg, var(--mv-dark) 0%, #180a0f 60%, #0a0a1a 100%);
  position: relative; overflow: hidden; text-align: center;
}
.page-hero::before {
  content: ''; position: absolute; inset: 0;
  background: radial-gradient(ellipse 70% 60% at 50% 40%, rgba(114,80,220,.1), transparent);
  pointer-events: none;
}
.hero-glyph {
  position: absolute; font-family: 'Bebas Neue', sans-serif;
  color: rgba(114,80,220,.05); pointer-events: none; user-select: none; line-height: 1;
}
.hero-chip {
  display: inline-flex; align-items: center; gap: .5rem;
  border: 1px solid var(--mv-border); border-radius: 20px;
  padding: .3rem 1rem; font-family: 'Oswald', sans-serif;
  font-size: .72rem; letter-spacing: 2px; text-transform: uppercase;
  color: var(--mv-red);
}

/* ── 19. INDEX HERO ── */
.hero-section {
  min-height: 92vh;
  background: linear-gradient(135deg, var(--mv-dark) 0%, #0a0518 55%, #0a0a1a 100%);
  position: relative; overflow: hidden;
  display: flex; align-items: center;
}
.hero-section::before {
  content: ''; position: absolute; inset: 0;
  background: radial-gradient(ellipse 55% 65% at 68% 45%, rgba(114,80,220,.12), transparent);
  pointer-events: none;
}
.hero-badge {
  display: inline-flex; align-items: center; gap: .5rem;
  border: 1px solid var(--mv-border); border-radius: 20px;
  padding: .3rem 1rem; font-family: 'Oswald', sans-serif;
  font-size: .72rem; letter-spacing: 2px; text-transform: uppercase;
  color: var(--mv-red);
}
.hero-badge::before {
  content: ''; width: 6px; height: 6px; border-radius: 50%;
  background: var(--mv-red); animation: pulse 1.5s infinite;
}
@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50%       { opacity: .5; transform: scale(1.5); }
}
.hero-title {
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(3.5rem, 8vw, 6.5rem);
  line-height: .92; letter-spacing: 3px;
}
.hero-title .red  { color: var(--mv-red); }
.hero-title .gold { color: var(--mv-gold); }
.stat-num { font-family: 'Bebas Neue', sans-serif; font-size: 2.1rem; letter-spacing: 2px; }
.stat-num span { color: var(--mv-red); }
.stat-label { font-family: 'Oswald', sans-serif; font-size: .68rem; letter-spacing: 2px; text-transform: uppercase; color: var(--mv-muted); }

/* ── 20. MANGA STACK ── */
.manga-stack { position: relative; width: 320px; height: 400px; margin: 0 auto; }
.mcard { position: absolute; border-radius: 10px; overflow: hidden; box-shadow: 0 20px 60px rgba(0,0,0,.7); }
.mcard-front {
  width: 74%; aspect-ratio: .72; top: 0; left: 13%;
  border: 1px solid rgba(114,80,220,.5);
  background: linear-gradient(135deg, #0a0a1a, #1a1a3e);
  z-index: 3; animation: floatCard 3s ease-in-out infinite;
}
.mcard-left  { width: 62%; aspect-ratio: .72; top: 7%; left: -2%;  transform: rotate(-9deg); background: linear-gradient(135deg, #2d1b69, #7b2d8b); z-index: 2; }
.mcard-right { width: 62%; aspect-ratio: .72; top: 7%; right: -2%; transform: rotate(9deg);  background: linear-gradient(135deg, #1a2f1a, #2d7a3a); z-index: 2; }
.mcard-inner {
  width: 100%; height: 100%;
  display: flex; flex-direction: column; justify-content: flex-end;
  padding: 1rem; background: linear-gradient(0deg, rgba(0,0,0,.85), transparent 55%);
}
.mcard-emoji { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; font-size: 5rem; opacity: .12; }
.mcard-title { font-family: 'Bebas Neue', sans-serif; font-size: 1.2rem; letter-spacing: 2px; position: relative; }
.mcard-sub   { font-size: .65rem; color: var(--mv-muted); letter-spacing: 1px; text-transform: uppercase; }
.badge-hot-mv {
  position: absolute; top: .6rem; right: .6rem;
  background: var(--mv-red); color: #fff;
  font-family: 'Oswald', sans-serif; font-size: .58rem; letter-spacing: 1px;
  text-transform: uppercase; padding: .15rem .5rem; border-radius: 3px;
}
@keyframes floatCard {
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(-10px); }
}

/* ── 21. ABOUT PAGE ── */
.stat-card {
  background: var(--mv-card); border: 1px solid rgba(255,255,255,.05);
  border-radius: 10px; padding: 2rem 1.5rem; text-align: center;
  transition: transform .25s, border-color .2s;
}
.stat-card:hover { transform: translateY(-4px); border-color: var(--mv-border); }
.stat-big { font-family: 'Bebas Neue', sans-serif; font-size: 3rem; letter-spacing: 2px; color: var(--mv-red); }
.stat-lbl { font-family: 'Oswald', sans-serif; font-size: .75rem; letter-spacing: 2px; text-transform: uppercase; color: var(--mv-muted); }

.story-badge {
  background: var(--mv-card); border: 1px solid var(--mv-border);
  border-radius: 8px; padding: .8rem 1.25rem;
  display: flex; align-items: center; gap: .75rem;
  margin-bottom: .75rem; transition: transform .2s;
}
.story-badge:hover { transform: translateX(4px); }
.story-badge-num { font-family: 'Bebas Neue', sans-serif; font-size: 1.5rem; color: var(--mv-red); }
.story-badge-text { font-family: 'Oswald', sans-serif; font-size: .8rem; letter-spacing: 1px; }

.vm-card {
  background: var(--mv-card); border-radius: 12px; padding: 2.5rem;
  border: 1px solid rgba(255,255,255,.05); position: relative; overflow: hidden; height: 100%;
}
.vm-card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px; }
.vm-card.vision::before { background: linear-gradient(90deg, var(--mv-red), #ff6b35); }
.vm-card.misi::before   { background: linear-gradient(90deg, var(--mv-gold), #f4a261); }
.vm-title { font-family: 'Bebas Neue', sans-serif; font-size: 1.6rem; letter-spacing: 2px; margin-bottom: 1rem; }
.vm-card.vision .vm-title { color: var(--mv-red); }
.vm-card.misi   .vm-title { color: var(--mv-gold); }
.vm-list { list-style: none; padding: 0; margin-top: 1rem; }
.vm-list li { color: var(--mv-muted); font-size: .88rem; line-height: 1.7; padding: .4rem 0; border-bottom: 1px solid rgba(255,255,255,.04); display: flex; gap: .75rem; }
.vm-list li::before { content: '▸'; color: var(--mv-red); flex-shrink: 0; }
.vm-card.misi .vm-list li::before { color: var(--mv-gold); }

.tl-item { display: grid; grid-template-columns: 1fr 50px 1fr; gap: 1rem; margin-bottom: 2rem; align-items: start; }
.tl-line { position: relative; }
.tl-line::before { content: ''; position: absolute; left: 50%; top: 14px; bottom: -2rem; width: 1px; background: rgba(114,80,220,.25); transform: translateX(-50%); }
.tl-dot { width: 14px; height: 14px; border-radius: 50%; background: var(--mv-red); border: 3px solid var(--mv-dark); box-shadow: 0 0 0 2px var(--mv-red); margin: 0 auto; }
.tl-year { font-family: 'Bebas Neue', sans-serif; font-size: 1.8rem; letter-spacing: 2px; color: var(--mv-red); }
.tl-title-mv { font-family: 'Oswald', sans-serif; font-size: 1rem; font-weight: 600; margin-bottom: .3rem; }
.tl-desc { font-size: .84rem; color: var(--mv-muted); line-height: 1.7; }

.team-card {
  background: var(--mv-card); border: 1px solid rgba(255,255,255,.05);
  border-radius: 12px; overflow: hidden; text-align: center; height: 100%;
  transition: transform .25s, border-color .2s;
}
.team-card:hover { transform: translateY(-6px); border-color: var(--mv-border); }
.team-avatar { height: 160px; display: flex; align-items: center; justify-content: center; font-size: 4.5rem; position: relative; }
.team-avatar::after { content: ''; position: absolute; inset: 0; background: linear-gradient(0deg, rgba(0,0,0,.7), transparent 60%); }
.team-name { font-family: 'Oswald', sans-serif; font-size: 1.05rem; font-weight: 600; }
.team-role { font-size: .7rem; letter-spacing: 1.5px; text-transform: uppercase; color: var(--mv-red); margin-bottom: .5rem; }
.team-social {
  width: 30px; height: 30px; border-radius: 4px;
  border: 1px solid rgba(255,255,255,.08);
  display: inline-flex; align-items: center; justify-content: center;
  font-size: .85rem; cursor: pointer; transition: all .2s;
  text-decoration: none; color: var(--mv-muted);
}
.team-social:hover { background: var(--mv-red); border-color: var(--mv-red); color: #fff; }

.value-card {
  background: var(--mv-card); border: 1px solid rgba(255,255,255,.05);
  border-radius: 10px; padding: 2rem; position: relative; overflow: hidden;
  transition: border-color .2s; height: 100%;
}
.value-card:hover { border-color: var(--mv-border); }
.value-num { font-family: 'Bebas Neue', sans-serif; font-size: 5rem; color: rgba(114,80,220,.07); position: absolute; top: -.5rem; right: 1rem; line-height: 1; }
.value-title { font-family: 'Oswald', sans-serif; font-size: 1rem; font-weight: 600; letter-spacing: 1px; margin-bottom: .5rem; }

.partner-badge {
  background: var(--mv-card); border: 1px solid rgba(255,255,255,.06);
  border-radius: 8px; padding: 1rem 2rem;
  display: flex; align-items: center; gap: .75rem;
  transition: border-color .2s, transform .2s;
}
.partner-badge:hover { border-color: var(--mv-border); transform: translateY(-2px); }
.partner-name { font-family: 'Oswald', sans-serif; font-size: .85rem; letter-spacing: 1px; color: var(--mv-muted); }

.big-year {
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(6rem, 14vw, 12rem);
  letter-spacing: -4px; line-height: 1;
  color: transparent;
  -webkit-text-stroke: 1px rgba(114,80,220,.2);
}
.a1 { background: linear-gradient(135deg, #1a1a2e, #7250dc); }
.a2 { background: linear-gradient(135deg, #0d1b2a, #2d6a8f); }
.a3 { background: linear-gradient(135deg, #2d1b69, #7b4ea6); }
.a4 { background: linear-gradient(135deg, #1a2f1a, #3a8a4a); }
.a5 { background: linear-gradient(135deg, #2e1a0a, #a05a20); }

/* ── 22. AUTH PAGE ── */
.auth-wrapper { min-height: 100vh; display: flex; }
.auth-left {
  flex: 1; min-height: 100vh;
  background: linear-gradient(135deg, #0a0a0f 0%, #0a0518 50%, #0f0a1a 100%);
  position: relative; overflow: hidden;
  display: flex; flex-direction: column; justify-content: center; align-items: center; padding: 3rem;
}
.auth-left::before {
  content: ''; position: absolute; inset: 0;
  background: radial-gradient(ellipse 70% 70% at 50% 50%, rgba(114,80,220,.15), transparent);
  pointer-events: none;
}
.auth-glyph { position: absolute; font-family: 'Bebas Neue', sans-serif; color: rgba(114,80,220,.05); pointer-events: none; }
.auth-right {
  width: 480px; min-width: 360px;
  background: var(--mv-dark2);
  border-left: 1px solid var(--mv-border);
  display: flex; flex-direction: column; justify-content: center;
  padding: 3rem; overflow-y: auto;
}

.auth-tabs { display: flex; background: var(--mv-card); border-radius: 8px; padding: 4px; margin-bottom: 2rem; }
.auth-tab {
  flex: 1; text-align: center; padding: .6rem; border-radius: 6px; cursor: pointer;
  font-family: 'Oswald', sans-serif; font-size: .85rem; letter-spacing: 1px; text-transform: uppercase;
  color: var(--mv-muted); transition: all .2s; border: none; background: transparent;
}
.auth-tab.active { background: var(--mv-red); color: #fff; }

.form-control, .form-select {
  background: var(--mv-card) !important;
  border: 1px solid rgba(255,255,255,.1) !important;
  color: #fff !important; border-radius: 8px;
  padding: .75rem 1rem; font-size: .92rem;
}
.form-control:focus, .form-select:focus {
  border-color: var(--mv-red) !important;
  box-shadow: 0 0 0 3px rgba(114,80,220,.15) !important;
  outline: none;
}
.form-control::placeholder { color: var(--mv-muted) !important; }
.form-label { font-family: 'Oswald', sans-serif; font-size: .8rem; letter-spacing: 1.5px; text-transform: uppercase; color: var(--mv-muted); margin-bottom: .4rem; }
.input-group-text { background: var(--mv-card) !important; border: 1px solid rgba(255,255,255,.1) !important; color: var(--mv-muted); }

.or-divider {
  display: flex; align-items: center; gap: 1rem;
  color: var(--mv-muted); font-size: .8rem;
  font-family: 'Oswald', sans-serif; letter-spacing: 1px; text-transform: uppercase;
  margin: 1.5rem 0;
}
.or-divider::before, .or-divider::after { content: ''; flex: 1; height: 1px; background: rgba(255,255,255,.08); }
.link-red { color: var(--mv-red); text-decoration: none; }
.link-red:hover { color: var(--mv-red2); }

/* ── 23. ADMIN ── */
.admin-wrapper { display: flex; min-height: 100vh; }
.sidebar {
  width: 260px; background: var(--mv-dark2);
  border-right: 1px solid var(--mv-border);
  display: flex; flex-direction: column;
  position: fixed; top: 0; left: 0; bottom: 0;
  z-index: 100; transition: transform .3s;
}
.sidebar-brand { padding: 1.5rem; border-bottom: 1px solid rgba(255,255,255,.06); display: flex; align-items: center; gap: .75rem; }
.brand-logo { font-family: 'Bebas Neue', sans-serif; font-size: 1.5rem; letter-spacing: 3px; color: #fff; }
.brand-logo span { color: var(--mv-red); }
.sidebar-menu { padding: 1rem 0; flex: 1; overflow-y: auto; }
.menu-label { padding: .5rem 1.5rem; font-family: 'Oswald', sans-serif; font-size: .62rem; letter-spacing: 3px; text-transform: uppercase; color: var(--mv-muted); }
.menu-item {
  display: flex; align-items: center; gap: .75rem;
  padding: .72rem 1.5rem; color: var(--mv-muted);
  text-decoration: none; font-family: 'Oswald', sans-serif;
  font-size: .88rem; letter-spacing: .5px;
  transition: all .2s; border-left: 3px solid transparent;
}
.menu-item:hover { color: #fff; background: rgba(255,255,255,.04); }
.menu-item.active { color: #fff; background: rgba(114,80,220,.1); border-left-color: var(--mv-red); }
.menu-item .bi { font-size: 1.05rem; }
.menu-badge { margin-left: auto; background: var(--mv-red); color: #fff; font-size: .62rem; padding: .1rem .45rem; border-radius: 10px; font-family: 'Oswald', sans-serif; }
.sidebar-footer { padding: 1rem 1.5rem; border-top: 1px solid rgba(255,255,255,.06); }
.user-info { display: flex; align-items: center; gap: .75rem; }
.user-avatar { width: 38px; height: 38px; border-radius: 8px; background: var(--mv-red); display: flex; align-items: center; justify-content: center; font-size: 1.1rem; flex-shrink: 0; }
.user-name { font-family: 'Oswald', sans-serif; font-size: .88rem; font-weight: 600; }
.user-role { font-size: .68rem; color: var(--mv-muted); }
.admin-main { margin-left: 260px; flex: 1; background: var(--mv-dark); }
.admin-topbar { background: var(--mv-dark2); border-bottom: 1px solid rgba(255,255,255,.06); padding: 1rem 2rem; display: flex; align-items: center; justify-content: space-between; position: sticky; top: 0; z-index: 50; }
.admin-content { padding: 2rem; }
.admin-stat { background: var(--mv-card); border: 1px solid rgba(255,255,255,.05); border-radius: 10px; padding: 1.5rem; transition: transform .2s, border-color .2s; }
.admin-stat:hover { transform: translateY(-2px); border-color: var(--mv-border); }
.admin-stat-num { font-family: 'Bebas Neue', sans-serif; font-size: 2.5rem; letter-spacing: 2px; color: var(--mv-red); }
.admin-stat-label { font-family: 'Oswald', sans-serif; font-size: .72rem; letter-spacing: 2px; text-transform: uppercase; color: var(--mv-muted); }
.admin-table { background: var(--mv-card); border-radius: 10px; overflow: hidden; border: 1px solid rgba(255,255,255,.05); }
.admin-table table { margin: 0; }
.admin-table thead th { background: rgba(255,255,255,.04); font-family: 'Oswald', sans-serif; font-size: .75rem; letter-spacing: 1.5px; text-transform: uppercase; color: var(--mv-muted); border-color: rgba(255,255,255,.06); padding: .75rem 1.25rem; }
.admin-table tbody td { border-color: rgba(255,255,255,.04); padding: .75rem 1.25rem; font-size: .88rem; vertical-align: middle; }
.admin-table tbody tr:hover td { background: rgba(255,255,255,.02); }
.status-badge { font-family: 'Oswald', sans-serif; font-size: .62rem; letter-spacing: 1px; text-transform: uppercase; padding: .2rem .65rem; border-radius: 4px; }
.status-active  { background: rgba(46,160,67,.2); color: #3fb950; }
.status-pending { background: rgba(255,209,102,.2); color: var(--mv-gold); }
.status-banned  { background: rgba(114,80,220,.2);  color: var(--mv-red); }
.chart-box { background: var(--mv-card); border: 1px solid rgba(255,255,255,.05); border-radius: 10px; padding: 1.5rem; }
.chart-bar { display: flex; align-items: flex-end; gap: .5rem; height: 120px; padding-top: .5rem; }
.bar { flex: 1; background: var(--mv-red); border-radius: 4px 4px 0 0; opacity: .65; transition: opacity .2s; }
.bar:hover { opacity: 1; }

/* ── 24. KATALOG ── */
.catalog-hero { background: linear-gradient(135deg, var(--mv-dark), #180a0f 60%, #0a0a1a); padding: 8rem 0 4rem; position: relative; overflow: hidden; }
.catalog-hero::before { content: ''; position: absolute; inset: 0; background: radial-gradient(ellipse 60% 50% at 50% 50%, rgba(114,80,220,.1), transparent); pointer-events: none; }
.search-big { background: var(--mv-card); border: 1px solid rgba(255,255,255,.08); border-radius: 12px; padding: 1rem 1.5rem; display: flex; align-items: center; gap: 1rem; transition: border-color .2s; }
.search-big:focus-within { border-color: var(--mv-red); }
.search-big input { background: transparent !important; border: none !important; color: #fff !important; font-size: 1.05rem; flex: 1; outline: none; padding: 0; }
.search-big input::placeholder { color: var(--mv-muted); }
.search-big input:focus { box-shadow: none !important; }
.filter-card { background: var(--mv-card); border: 1px solid rgba(255,255,255,.05); border-radius: 10px; padding: 1.5rem; }
.filter-title { font-family: 'Oswald', sans-serif; font-size: .82rem; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 1rem; padding-bottom: .75rem; border-bottom: 1px solid rgba(255,255,255,.06); }
.genre-check { display: flex; align-items: center; gap: .5rem; margin-bottom: .5rem; }
.genre-check input { width: 16px; height: 16px; border-radius: 4px; border: 1px solid rgba(255,255,255,.2) !important; background: var(--mv-dark2) !important; cursor: pointer; accent-color: var(--mv-red); }
.genre-check label { font-size: .85rem; color: var(--mv-muted); cursor: pointer; }
.genre-check:hover label { color: #fff; }
.sort-bar { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: .75rem; padding: .75rem 1rem; background: var(--mv-card); border-radius: 8px; border: 1px solid rgba(255,255,255,.05); margin-bottom: 1.5rem; }
.sort-select { background: var(--mv-dark2) !important; border: 1px solid rgba(255,255,255,.08) !important; color: #fff !important; font-family: 'Oswald', sans-serif; font-size: .8rem; letter-spacing: 1px; border-radius: 6px; padding: .35rem .75rem; }
.sort-select:focus { border-color: var(--mv-red) !important; box-shadow: 0 0 0 2px rgba(114,80,220,.15) !important; }
.news-card { background: var(--mv-card); border: 1px solid rgba(255,255,255,.05); border-radius: 10px; overflow: hidden; transition: transform .25s, border-color .2s; text-decoration: none; color: inherit; display: block; }
.news-card:hover { transform: translateY(-4px); border-color: var(--mv-border); color: inherit; }
.news-thumb { height: 160px; display: flex; align-items: center; justify-content: center; font-size: 4rem; position: relative; overflow: hidden; }
.news-thumb-overlay { position: absolute; inset: 0; background: linear-gradient(0deg, rgba(0,0,0,.7), transparent 60%); }
.news-cat { font-family: 'Oswald', sans-serif; font-size: .62rem; letter-spacing: 2px; text-transform: uppercase; color: var(--mv-red); }
.news-title { font-family: 'Oswald', sans-serif; font-size: .95rem; font-weight: 600; line-height: 1.4; margin-bottom: .4rem; }
.news-date { font-size: .75rem; color: var(--mv-muted); }
.cat-tab { font-family: 'Oswald', sans-serif; font-size: .85rem; letter-spacing: 1.5px; text-transform: uppercase; color: var(--mv-muted); border: none; background: transparent; padding: .5rem 1rem; border-bottom: 2px solid transparent; transition: all .2s; cursor: pointer; }
.cat-tab.active { color: #fff; border-bottom-color: var(--mv-red); }
.cat-tab:hover { color: #fff; }
.page-link { background: var(--mv-card) !important; border-color: rgba(255,255,255,.08) !important; color: var(--mv-muted) !important; }
.page-link:hover { background: var(--mv-red) !important; border-color: var(--mv-red) !important; color: #fff !important; }
.page-item.active .page-link { background: var(--mv-red) !important; border-color: var(--mv-red) !important; color: #fff !important; }

/* ── 25. KONTAK ── */
.contact-form-card { background: var(--mv-card); border: 1px solid rgba(255,255,255,.05); border-radius: 14px; padding: 2.5rem; }
textarea.form-control { resize: none; }
.btn-submit { background: var(--mv-red); color: #fff; border: none; font-family: 'Oswald', sans-serif; letter-spacing: 1.5px; text-transform: uppercase; padding: .85rem 2.5rem; border-radius: 8px; font-size: 1rem; width: 100%; transition: all .2s; }
.btn-submit:hover { background: var(--mv-red2); color: #fff; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(114,80,220,.3); }
.info-card { background: var(--mv-card); border: 1px solid rgba(255,255,255,.05); border-radius: 12px; padding: 1.75rem; display: flex; align-items: flex-start; gap: 1.25rem; transition: border-color .2s, transform .2s; }
.info-card:hover { border-color: var(--mv-border); transform: translateY(-3px); }
.info-icon { width: 48px; height: 48px; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 1.3rem; flex-shrink: 0; }
.info-icon.red   { background: rgba(114,80,220,.15); color: var(--mv-red); }
.info-icon.gold  { background: rgba(255,209,102,.12); color: var(--mv-gold); }
.info-icon.blue  { background: rgba(30,100,200,.15); color: #5588ff; }
.info-icon.green { background: rgba(46,160,67,.12); color: #3fb950; }
.info-title { font-family: 'Oswald', sans-serif; font-size: .82rem; letter-spacing: 2px; text-transform: uppercase; color: var(--mv-muted); margin-bottom: .3rem; }
.info-val { font-size: .95rem; font-weight: 600; }
.info-sub { font-size: .78rem; color: var(--mv-muted); margin-top: .2rem; }
.social-card { background: var(--mv-card); border: 1px solid rgba(255,255,255,.05); border-radius: 10px; padding: 1.25rem 1.5rem; display: flex; align-items: center; gap: 1rem; text-decoration: none; color: inherit; transition: all .2s; }
.social-card:hover { border-color: var(--mv-border); transform: translateX(5px); color: inherit; }
.social-icon { width: 42px; height: 42px; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 1.2rem; flex-shrink: 0; }
.social-name { font-family: 'Oswald', sans-serif; font-size: .9rem; font-weight: 600; letter-spacing: .5px; }
.social-handle { font-size: .78rem; color: var(--mv-muted); }
.social-arrow { margin-left: auto; color: var(--mv-muted); font-size: .88rem; }
.faq-item { background: var(--mv-card); border: 1px solid rgba(255,255,255,.05); border-radius: 10px; overflow: hidden; margin-bottom: .75rem; transition: border-color .2s; }
.faq-item:hover { border-color: var(--mv-border); }
.faq-q { font-family: 'Oswald', sans-serif; font-size: .95rem; font-weight: 600; padding: 1.25rem 1.5rem; cursor: pointer; display: flex; justify-content: space-between; align-items: center; gap: 1rem; user-select: none; }
.faq-q .bi { transition: transform .3s; color: var(--mv-red); font-size: .9rem; flex-shrink: 0; }
.faq-q.open .bi { transform: rotate(45deg); }
.faq-a { padding: 0 1.5rem; max-height: 0; overflow: hidden; transition: max-height .35s ease, padding .35s; font-size: .9rem; color: var(--mv-muted); line-height: 1.8; }
.faq-a.open { max-height: 300px; padding: .25rem 1.5rem 1.25rem; }
.map-placeholder { background: var(--mv-card); border: 1px solid rgba(255,255,255,.05); border-radius: 12px; overflow: hidden; height: 280px; display: flex; align-items: center; justify-content: center; flex-direction: column; gap: 1rem; position: relative; }
.map-grid { position: absolute; inset: 0; background-image: linear-gradient(rgba(114,80,220,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(114,80,220,.06) 1px, transparent 1px); background-size: 40px 40px; }
.map-pin { font-size: 2.5rem; position: relative; z-index: 1; }
.map-address { font-family: 'Oswald', sans-serif; font-size: .82rem; letter-spacing: 1px; text-transform: uppercase; color: var(--mv-muted); position: relative; z-index: 1; text-align: center; }
.toast-mv { position: fixed; bottom: 2rem; right: 2rem; background: var(--mv-card); border: 1px solid rgba(46,160,67,.4); border-radius: 10px; padding: 1rem 1.5rem; display: flex; align-items: center; gap: .75rem; z-index: 9999; transform: translateX(120%); transition: transform .4s; box-shadow: 0 10px 30px rgba(0,0,0,.5); }
.toast-mv.show { transform: translateX(0); }
.toast-mv-text { font-family: 'Oswald', sans-serif; font-size: .88rem; letter-spacing: .5px; }

/* ── 26. LOGIN PAGE TOGGLE ── */
#loginPage, #adminPage { display: none; }
#loginPage.show  { display: flex !important; }
#adminPage.show  { display: block; }

/* ── 27. KONTAK EXTRAS ── */
.upload-zone { border: 2px dashed rgba(255,255,255,.1); border-radius: 8px; padding: 1.5rem; text-align: center; cursor: pointer; transition: border-color .2s; display: flex; flex-direction: column; align-items: center; gap: .4rem; }
.upload-zone:hover { border-color: rgba(114,80,220,.5); }
.response-time-card { background: var(--mv-card); border: 1px solid rgba(255,255,255,.05); border-radius: 10px; padding: 1.25rem; }
.social-link-card { background: var(--mv-card); border: 1px solid rgba(255,255,255,.05); border-radius: 10px; padding: 1.1rem 1.4rem; display: flex; align-items: center; gap: 1rem; text-decoration: none; color: inherit; transition: all .2s; }
.social-link-card:hover { border-color: var(--mv-border); transform: translateX(4px); color: inherit; }
.social-link-icon { width: 42px; height: 42px; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 1.2rem; flex-shrink: 0; }
.social-link-name { font-family: 'Oswald', sans-serif; font-size: .9rem; font-weight: 600; letter-spacing: .5px; }
.social-link-handle { font-size: .78rem; color: var(--mv-muted); }

/* ── 29. ANIME INTEGRATION ── */
.anime-loader {
  width: 32px; height: 32px;
  border: 3px solid rgba(114,80,220,.2);
  border-top-color: #7250dc;
  border-radius: 50%;
  animation: mv-spin .8s linear infinite;
}
@keyframes mv-spin { to { transform: rotate(360deg); } }
#anime-seasonal .mv-card { cursor: pointer; }
#anime-seasonal .mv-card:hover { border-color: rgba(114,80,220,.5); }
.anime-realtime-card:hover { border-color: rgba(114,80,220,.5) !important; }
@media (max-width: 992px) {
  .auth-left { display: none; }
  .auth-right { width: 100%; border: none; min-width: 0; }
}
@media (max-width: 768px) {
  .sidebar { transform: translateX(-100%); }
  .sidebar.open { transform: translateX(0); box-shadow: 0 0 40px rgba(0,0,0,.8); }
  .admin-main { margin-left: 0; }
  .admin-topbar { padding: 1rem; }
  .tl-item { grid-template-columns: 30px 1fr; }
  .tl-right { display: none; }
}
@media (max-width: 576px) {
  .manga-stack { width: 260px; height: 330px; }
  .hero-title { font-size: clamp(3rem, 12vw, 4.5rem); }
}

/* anime-home.js — Seasonal anime section for index.html */
(async function loadSeasonalAnime() {
  const grid    = document.getElementById('anime-seasonal-grid');
  const loading = document.getElementById('anime-seasonal-loading');
  const errBox  = document.getElementById('anime-seasonal-error');
  if (!grid) return;

  const SCORE_COLORS = s => s >= 8 ? '#3fb950' : s >= 7 ? '#ffd166' : s >= 6 ? '#e63946' : '#7a7a9a';

  function statusBadge(status) {
    if (!status) return '';
    if (status === 'Currently Airing') return '<span class="badge-mv" style="background:#e63946">ON AIR</span>';
    if (status === 'Finished Airing')  return '<span class="badge-mv bg-secondary">TAMAT</span>';
    return '<span class="badge-mv" style="background:#2d7a3a">SOON</span>';
  }

  function renderCard(a) {
    const score = a.score ? a.score.toFixed(1) : 'N/A';
    const color = a.score ? SCORE_COLORS(a.score) : '#7a7a9a';
    const img   = a.images?.jpg?.image_url || '';
    const title = a.title_english || a.title || 'Unknown';
    const genre = (a.genres?.[0]?.name || '') + (a.genres?.[1] ? ' · ' + a.genres[1].name : '');
    const eps   = a.episodes ? `Ep.${a.episodes}` : (a.status === 'Currently Airing' ? 'Ongoing' : '?');

    return `
      <div class="col">
        <a href="anime.html?id=${a.mal_id}" class="mv-card d-block text-decoration-none text-white anime-realtime-card">
          <div class="comic-thumb" style="position:relative;overflow:hidden;aspect-ratio:.72;border-radius:8px 8px 0 0">
            ${img ? `<img src="${img}" alt="${title}" style="width:100%;height:100%;object-fit:cover;display:block">` : '<div style="width:100%;height:100%;background:linear-gradient(135deg,#1a0a2e,#e63946)"></div>'}
            <div class="comic-thumb-overlay"></div>
            ${statusBadge(a.status)}
            <span class="ch-label">${eps}</span>
          </div>
          <div class="p-2">
            <div class="comic-title-card">${title}</div>
            <div class="comic-genre-card">${genre || 'Anime'}</div>
            <div class="mt-1" style="font-size:.72rem;font-family:'Oswald',sans-serif;color:${color}">
              <i class="bi bi-star-fill" style="font-size:.6rem"></i> ${score}
            </div>
          </div>
        </a>
      </div>`;
  }

  try {
    const res  = await fetch('https://api.jikan.moe/v4/seasons/now?limit=12');
    if (!res.ok) throw new Error('API error');
    const data = await res.json();
    const list = (data.data || []).slice(0, 12);

    loading.style.display = 'none';
    if (!list.length) { errBox.style.display = 'block'; return; }

    grid.innerHTML = list.map(renderCard).join('');
    grid.style.display = '';

    /* re-trigger scroll reveal for new cards */
    if (typeof initScrollReveal === 'function') initScrollReveal();
  } catch (e) {
    loading.style.display = 'none';
    errBox.style.display  = 'block';
  }
})();

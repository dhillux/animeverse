/* ═══════════════════════════════════════════════════
   MangaVerse — Global JavaScript
   Shared across all pages
   ═══════════════════════════════════════════════════ */

'use strict';

/* ── 1. SCROLL REVEAL ── */
(function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el));
})();

/* ── 2. GENRE PILLS (toggle active) ── */
(function initGenrePills() {
  document.querySelectorAll('.genre-pill').forEach(pill => {
    pill.addEventListener('click', function () {
      const group = this.closest('[data-pill-group]') || this.parentElement;
      group.querySelectorAll('.genre-pill').forEach(p => p.classList.remove('active'));
      this.classList.add('active');
    });
  });
})();

/* ── 3. CATALOG TABS (Katalog / Berita) ── */
(function initCatTabs() {
  const tabs = document.querySelectorAll('.cat-tab[data-target]');
  if (!tabs.length) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', function () {
      tabs.forEach(t => t.classList.remove('active'));
      this.classList.add('active');

      const target = this.dataset.target;
      document.querySelectorAll('[data-tab-panel]').forEach(panel => {
        panel.style.display = panel.dataset.tabPanel === target ? '' : 'none';
      });
    });
  });
})();

/* ── 4. AUTH TAB SWITCHER (login.html) ── */
function switchTab(tab) {
  const loginForm    = document.getElementById('formLogin');
  const registerForm = document.getElementById('formRegister');
  const tabLogin     = document.getElementById('tabLogin');
  const tabRegister  = document.getElementById('tabRegister');
  if (!loginForm) return;

  if (tab === 'login') {
    loginForm.style.display    = '';
    registerForm.style.display = 'none';
    tabLogin.classList.add('active');
    tabRegister.classList.remove('active');
  } else {
    loginForm.style.display    = 'none';
    registerForm.style.display = '';
    tabLogin.classList.remove('active');
    tabRegister.classList.add('active');
  }
}

/* ── 5. GO TO ADMIN DASHBOARD ── */
function goAdmin() {
  const loginPage = document.getElementById('loginPage');
  const adminPage = document.getElementById('adminPage');
  if (!loginPage || !adminPage) return;
  loginPage.classList.remove('show');
  adminPage.classList.add('show');
}

/* ── 6. PASSWORD TOGGLE ── */
function togglePw(inputId, btn) {
  const input = document.getElementById(inputId);
  if (!input) return;
  const icon = btn.querySelector('i');
  if (input.type === 'password') {
    input.type = 'text';
    icon.classList.replace('bi-eye-slash', 'bi-eye');
  } else {
    input.type = 'password';
    icon.classList.replace('bi-eye', 'bi-eye-slash');
  }
}

/* ── 7. ADMIN SECTION NAV ── */
function showAdminSection(sectionId, el) {
  document.querySelectorAll('[data-admin-section]').forEach(s => s.style.display = 'none');
  const target = document.getElementById(sectionId);
  if (target) target.style.display = '';

  document.querySelectorAll('.menu-item').forEach(m => m.classList.remove('active'));
  if (el) el.classList.add('active');

  // Update topbar title
  const topTitle = document.getElementById('adminTopTitle');
  if (topTitle && el) {
    topTitle.textContent = el.querySelector('span') ? el.querySelector('span').textContent : '';
  }
}

/* ── 8. FAQ ACCORDION ── */
(function initFaq() {
  document.querySelectorAll('.faq-q').forEach(q => {
    q.addEventListener('click', function () {
      const answer = this.nextElementSibling;
      const isOpen = this.classList.contains('open');

      // Close all
      document.querySelectorAll('.faq-q').forEach(oq => {
        oq.classList.remove('open');
        if (oq.nextElementSibling) oq.nextElementSibling.classList.remove('open');
      });

      // Toggle clicked
      if (!isOpen) {
        this.classList.add('open');
        if (answer) answer.classList.add('open');
      }
    });
  });
})();

/* ── 9. CONTACT FORM TOAST ── */
function sendContact(event) {
  if (event) event.preventDefault();
  const toast = document.getElementById('contactToast');
  if (!toast) return;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3500);
}

/* ── 10. MOBILE ADMIN SIDEBAR TOGGLE ── */
function toggleSidebar() {
  const sidebar = document.querySelector('.sidebar');
  if (sidebar) sidebar.classList.toggle('open');
}

/* ── 11. TOPIC PILL SELECTOR (kontak.html) ── */
function selectTopic(el) {
  const group = el.closest('#topicGroup');
  if (group) group.querySelectorAll('.genre-pill').forEach(p => p.classList.remove('active'));
  el.classList.add('active');
}

/* ── 12. HASH-BASED TAB (login.html#daftar) ── */
(function checkHashTab() {
  if (window.location.hash === '#daftar') {
    switchTab('register');
  }
})();

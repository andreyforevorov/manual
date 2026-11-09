function switchTab(tabId) {
  document.querySelectorAll('.tab-section').forEach(function(s) {
    s.classList.remove('active');
  });
  document.querySelectorAll('.nav-tab').forEach(function(b) {
    b.classList.remove('active');
  });

  var section = document.getElementById(tabId);
  if (section) {
    section.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  var btn = document.querySelector('[data-tab="' + tabId + '"]');
  if (btn) {
    btn.classList.add('active');
  }
}

function switchTabLevel(tabId, levelId) {
  switchTab(tabId);
  setTimeout(function() {
    var levelSection = document.getElementById(levelId);
    if (levelSection) {
      levelSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    activateSubtab(tabId, levelId);
  }, 80);
}

function activateSubtab(parentTabId, subtabId) {
  var parentSection = document.getElementById(parentTabId);
  if (!parentSection) return;

  parentSection.querySelectorAll('.subtab-section').forEach(function(s) {
    s.classList.remove('active');
  });
  parentSection.querySelectorAll('.subtab-btn').forEach(function(b) {
    b.classList.remove('active');
  });

  var target = document.getElementById(subtabId);
  if (target) target.classList.add('active');

  var btn = parentSection.querySelector('[data-subtab="' + subtabId + '"]');
  if (btn) btn.classList.add('active');
}

function openProgram(progId) {
  switchTab('tab-programs');
  setTimeout(function() {
    var progEl = document.getElementById(progId);
    if (!progEl) return;

    progEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
    progEl.classList.add('prog-highlight');
    setTimeout(function() {
      progEl.classList.remove('prog-highlight');
    }, 4500);
  }, 120);
}

function initNavTabs() {
  document.querySelectorAll('.nav-tab').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var tabId = btn.getAttribute('data-tab');
      if (tabId) switchTab(tabId);
    });
  });
}

function initCopyButtons() {
  document.addEventListener('click', function(e) {
    var btn = e.target.closest('.copy-btn');
    if (!btn) return;

    var wrapper = btn.closest('.code-block-wrapper');
    var codeEl = wrapper ? wrapper.querySelector('.code-block') : null;

    if (!codeEl) return;

    var text = codeEl.innerText || codeEl.textContent;

    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(function() {
        showCopied(btn);
      }).catch(function() {
        fallbackCopy(text, btn);
      });
    } else {
      fallbackCopy(text, btn);
    }
  });
}

function fallbackCopy(text, btn) {
  var ta = document.createElement('textarea');
  ta.value = text;
  ta.style.position = 'fixed';
  ta.style.opacity = '0';
  document.body.appendChild(ta);
  ta.focus();
  ta.select();
  try {
    document.execCommand('copy');
    showCopied(btn);
  } catch (err) {
    console.error('Copy failed:', err);
  }
  document.body.removeChild(ta);
}

function showCopied(btn) {
  var original = btn.textContent;
  btn.textContent = 'Скопировано!';
  btn.classList.add('copied');
  setTimeout(function() {
    btn.textContent = original;
    btn.classList.remove('copied');
  }, 2000);
}

function initSidebarMenus() {
  document.addEventListener('click', function(e) {
    var item = e.target.closest('.sidebar-item');
    if (!item) return;

    var targetId = item.getAttribute('data-target');
    if (!targetId) return;

    var parentSection = item.closest('.tab-section');
    if (!parentSection) return;

    parentSection.querySelectorAll('.sidebar-item').forEach(function(i) {
      i.classList.remove('active');
    });
    item.classList.add('active');

    parentSection.querySelectorAll('.detail-panel').forEach(function(p) {
      p.classList.remove('active');
    });

    var panel = document.getElementById(targetId);
    if (panel) panel.classList.add('active');
  });
}

function initSubtabBars() {
  document.addEventListener('click', function(e) {
    var btn = e.target.closest('.subtab-btn');
    if (!btn) return;

    var subtabId = btn.getAttribute('data-subtab');
    if (!subtabId) return;

    var bar = btn.closest('.subtab-bar');
    if (!bar) return;

    var container = bar.closest('.subtab-container') || bar.parentElement;

    bar.querySelectorAll('.subtab-btn').forEach(function(b) {
      b.classList.remove('active');
    });
    btn.classList.add('active');

    var parentSection = btn.closest('.tab-section');
    if (parentSection) {
      parentSection.querySelectorAll('.subtab-section').forEach(function(s) {
        s.classList.remove('active');
      });
    }

    var target = document.getElementById(subtabId);
    if (target) target.classList.add('active');
  });
}

document.addEventListener('DOMContentLoaded', function() {
  initNavTabs();
  initCopyButtons();
  initSidebarMenus();
  initSubtabBars();
});

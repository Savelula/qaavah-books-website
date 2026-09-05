/**
 * Shared Personal / Business tour chrome:
 * country menu (~182), PPP prices (no FX), shop gate, language chip, view sticky.
 * Matches billing_config.shopBusinessOpenFor + pricing_config anchors.
 */
(function () {
  'use strict';

  var QC = window.QB_COUNTRIES;
  if (!QC || !QC.list) return;

  var page = document.body.getAttribute('data-page') || 'personal';
  var accent = page === 'business' ? '#283593' : '#4A7259';

  /** PPP anchors from pricing_config — never FX-convert. */
  var ANCHORS = {
    US: { s: '$', p: [4.99, 9.99, 17.99, 34.99, 2.99] },
    CA: { s: 'CA$', p: [5.99, 11.99, 21.99, 42.99, 3.49] },
    GB: { s: '£', p: [3.99, 7.99, 14.99, 29.99, 2.49] },
    DE: { s: '€', p: [3.99, 7.99, 14.99, 29.99, 2.49] },
    FR: { s: '€', p: [3.99, 7.99, 14.99, 29.99, 2.49] },
    ES: { s: '€', p: [3.99, 7.99, 14.99, 29.99, 2.49] },
    IT: { s: '€', p: [3.99, 7.99, 14.99, 29.99, 2.49] },
    NL: { s: '€', p: [3.99, 7.99, 14.99, 29.99, 2.49] },
    PT: { s: '€', p: [3.99, 7.99, 14.99, 29.99, 2.49] },
    IE: { s: '€', p: [3.99, 7.99, 14.99, 29.99, 2.49] },
    GH: { s: 'GH₵', p: [15, 45, 75, 155, 10] },
    NG: { s: '₦', p: [1900, 4900, 7900, 15900, 800] },
    KE: { s: 'KSh', p: [199, 499, 799, 1599, 80] },
    ZA: { s: 'R', p: [39, 99, 189, 379, 19] },
    CI: { s: 'CFA', p: [1200, 3000, 6000, 12000, 600] },
    SN: { s: 'CFA', p: [1200, 3000, 6000, 12000, 600] },
    IN: { s: '₹', p: [99, 249, 449, 899, 45] },
    BR: { s: 'R$', p: [9.9, 24.9, 44.9, 89.9, 4.9] },
    MX: { s: 'MX$', p: [49, 129, 229, 449, 23] },
    AE: { s: 'AED', p: [4.49, 8.99, 15.99, 31.99, 2.99] },
    AU: { s: 'A$', p: [7.99, 15.99, 27.99, 54.99, 4.99] },
    JP: { s: '¥', p: [740, 1480, 2680, 5200, 450] }
  };

  var PACK_ANCHOR = {
    us: 'US', eu: 'DE', waf: 'GH', cfa: 'CI', ng: 'NG', eaf: 'KE',
    saf: 'ZA', zar: 'ZA', wae: 'GH', magh: 'DE', latam: 'BR', asia: 'IN', gulf: 'AE'
  };

  function priceRow(c) {
    // Prefer country PPP row from QB_COUNTRIES; never invent GH₵ for non-GH
    if (c.p && c.s) return { s: c.s, p: c.p };
    if (ANCHORS[c.cc]) return ANCHORS[c.cc];
    var pack = c.pack || 'us';
    if (pack === 'waf' && c.cc !== 'GH') pack = 'saf';
    var key = PACK_ANCHOR[pack] || 'US';
    var row = ANCHORS[key] || ANCHORS.US;
    return { s: c.s || row.s, p: row.p };
  }

  function fmt(s, v) {
    return s + (Number.isInteger(v) ? v.toLocaleString('en-US') : Number(v).toFixed(2));
  }

  function getSaved(key, fallback) {
    try {
      return localStorage.getItem(key) || fallback;
    } catch (e) {
      return fallback;
    }
  }

  function setSaved(key, val) {
    try {
      localStorage.setItem(key, val);
    } catch (e) { /* ignore */ }
  }

  function defaultCountry() {
    var saved = getSaved('qb_site_country', '');
    if (saved && QC.byCc[saved]) return saved;
    // US/CA/EU lead personal; open markets can land on business when visiting that page
    if (page === 'business') return 'GH';
    return 'US';
  }

  /* —— Language —— */
  (function wireLang() {
    var box = document.querySelector('details.lang:not(.country)');
    if (!box) return;
    var lbl = box.querySelector('.lbl');
    var opts = Array.prototype.slice.call(box.querySelectorAll('.lopt'));

    function currentCountryName() {
      var cc = getSaved('qb_site_country', '');
      var row = QC && QC.byCc && QC.byCc[(cc || '').toUpperCase()];
      return (row && row.name) || '';
    }

    function apply(code, label) {
      opts.forEach(function (o) {
        o.setAttribute('aria-selected', String(o.dataset.lang === code));
      });
      if (lbl) lbl.textContent = label || code.toUpperCase();
      document.documentElement.lang = code;
      var countryName = currentCountryName();
      try {
        if (page === 'personal') {
          if (window.QB_PF_I18N && typeof window.QB_PF_I18N.applyPersonal === 'function') {
            window.QB_PF_I18N.applyPersonal(code, countryName);
          } else if (window.QB_I18N && typeof window.QB_I18N.applyPersonal === 'function') {
            window.QB_I18N.applyPersonal(code, countryName);
          }
          var cc = getSaved('qb_site_country', 'US');
          var row = QC && QC.byCc && QC.byCc[(cc || '').toUpperCase()];
          if (window.QB_PF && typeof window.QB_PF.localizeScreens === 'function' && row) {
            window.QB_PF.localizeScreens(row.cc, row.group);
          }
        } else if (page === 'business') {
          if (window.QB_BIZ_I18N && typeof window.QB_BIZ_I18N.applyBusiness === 'function') {
            window.QB_BIZ_I18N.applyBusiness(code, countryName);
          }
        }
      } catch (e) {
        if (typeof console !== 'undefined' && console.warn) {
          console.warn('[qb] language apply failed', e);
        }
      }
    }
    var saved = getSaved('qb_site_lang', 'en');
    var match = opts.find(function (o) { return o.dataset.lang === saved; });
    if (match) apply(match.dataset.lang, match.dataset.label);
    opts.forEach(function (o) {
      o.addEventListener('click', function () {
        apply(o.dataset.lang, o.dataset.label);
        setSaved('qb_site_lang', o.dataset.lang);
        box.removeAttribute('open');
      });
    });
    document.addEventListener('click', function (e) {
      if (!box.contains(e.target)) box.removeAttribute('open');
    });
    box.addEventListener('toggle', function () {
      if (box.open) {
        document.querySelectorAll('details.lang').forEach(function (d) {
          if (d !== box) d.removeAttribute('open');
        });
      }
    });
  })();

  /* —— Country menu + prices + gate —— */
  (function wireCountry() {
    var box = document.querySelector('details.country');
    if (!box) return;
    var menu = box.querySelector('.cmenu');
    var lbl = box.querySelector('.lbl');
    var flagEl = box.querySelector('summary .flag');
    if (!menu) return;

    // Grouped list
    var groups = {};
    QC.list.forEach(function (c) {
      var g = c.group || 'Other';
      if (!groups[g]) groups[g] = [];
      groups[g].push(c);
    });
    var order = Object.keys(groups).sort(function (a, b) {
      if (a === 'Africa') return -1;
      if (b === 'Africa') return 1;
      return a.localeCompare(b);
    });

    menu.innerHTML = '';
    order.forEach(function (g) {
      var head = document.createElement('div');
      head.className = 'cgroup';
      head.textContent = g;
      head.style.cssText = 'padding:10px 12px 4px;font-size:11px;font-weight:600;letter-spacing:.04em;text-transform:uppercase;color:#7A7D85';
      menu.appendChild(head);
      groups[g].forEach(function (c) {
        var btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'lopt copt';
        btn.setAttribute('role', 'option');
        btn.setAttribute('data-cc', c.cc);
        btn.innerHTML =
          '<span class="flag" style="font-size:16px">' + (c.f || QC.flagEmoji(c.cc)) + '</span>' +
          '<span class="nat">' + c.name + '<small>' + c.cc + (c.shopOpen ? '' : ' · personal only') + '</small></span>' +
          '<span class="msr" style="color:' + accent + '">check</span>';
        menu.appendChild(btn);
      });
    });

    function apply(cc) {
      var c = QC.byCc[(cc || '').toUpperCase()];
      if (!c) c = QC.byCc.US || QC.list[0];
      var row = priceRow(c);
      var s = row.s;
      var p = row.p;
      var open = !!c.shopOpen;

      if (lbl) lbl.textContent = c.cc;
      if (flagEl) flagEl.textContent = c.f || QC.flagEmoji(c.cc);
      menu.querySelectorAll('.copt').forEach(function (o) {
        o.setAttribute('aria-selected', String(o.dataset.cc === c.cc));
      });

      function set(k, v) {
        document.querySelectorAll('[data-price="' + k + '"]').forEach(function (e) {
          e.textContent = v;
        });
      }
      function setA(k, v) {
        document.querySelectorAll('[data-annual="' + k + '"]').forEach(function (e) {
          e.textContent = v;
        });
      }
      set('free', fmt(s, 0));
      set('personalPlus', fmt(s, p[0])); setA('personalPlus', fmt(s, p[0] * 10));
      set('shopStarter', fmt(s, p[1])); setA('shopStarter', fmt(s, p[1] * 10));
      set('shopPro', fmt(s, p[2])); setA('shopPro', fmt(s, p[2] * 10));
      set('businessUltimate', fmt(s, p[3])); setA('businessUltimate', fmt(s, p[3] * 10));
      set('seat', fmt(s, p[4]));

      document.querySelectorAll('[data-country-name]').forEach(function (e) {
        e.textContent = c.name;
      });

      if (page === 'business') {
        document.querySelectorAll('.gate').forEach(function (e) {
          e.style.display = open ? 'none' : 'flex';
        });
        document.querySelectorAll('[data-closed-note]').forEach(function (e) {
          e.style.display = open ? 'none' : 'flex';
        });
        document.querySelectorAll('.plans').forEach(function (e) {
          e.classList.toggle('closed', !open);
        });
        document.querySelectorAll('[data-cta]').forEach(function (e) {
          e.textContent = open ? (e.getAttribute('data-open-label') || e.textContent) : 'Join the waitlist';
        });
        document.querySelectorAll('[data-shop-open]').forEach(function (e) {
          e.textContent = open ? ('Open in ' + c.name) : ('Not yet in ' + c.name);
          e.style.display = 'inline-flex';
        });
      }

      try {
        if (window.QB_PF && typeof window.QB_PF.localizeScreens === 'function' && page === 'personal') {
          window.QB_PF.localizeScreens(c.cc, c.group);
        } else if (typeof window.qbLocalizeScreens === 'function') {
          window.qbLocalizeScreens(c.cc, c.group);
        }
      } catch (err) {
        if (typeof console !== 'undefined' && console.warn) {
          console.warn('[qb] screen localize failed', err);
        }
      }

      setSaved('qb_site_country', c.cc);
      setSaved('qb_view_lane', page === 'business' ? 'shop' : 'personal');

      // Refresh translated strings that include the country name
      try {
        var lang = getSaved('qb_site_lang', 'en');
        if (page === 'personal' && window.QB_PF_I18N && window.QB_PF_I18N.applyPersonal) {
          window.QB_PF_I18N.applyPersonal(lang, c.name);
        } else if (page === 'business' && window.QB_BIZ_I18N && window.QB_BIZ_I18N.applyBusiness) {
          window.QB_BIZ_I18N.applyBusiness(lang, c.name);
        }
      } catch (err2) { /* ignore */ }

      box.removeAttribute('open');
    }

    menu.querySelectorAll('.copt').forEach(function (o) {
      o.addEventListener('click', function () { apply(o.dataset.cc); });
    });

    document.addEventListener('click', function (e) {
      if (!box.contains(e.target)) box.removeAttribute('open');
    });
    box.addEventListener('toggle', function () {
      if (box.open) {
        document.querySelectorAll('details.lang').forEach(function (d) {
          if (d !== box) d.removeAttribute('open');
        });
      }
    });

    apply(defaultCountry());
  })();
})();

/**
 * Personal tour screen localiser — US HTML baseline → region packs.
 * Always scopes to .pane / .spane / .gsc (no #layoutPersonal required).
 * Prices stay with tour-site.js (PPP anchors, never FX).
 */
(function (global) {
  'use strict';

  var M = {
    US:{r:1,s:'$',g:'us'}, CA:{r:1.35,s:'CA$',g:'us'},
    GB:{r:0.8,s:'£',g:'eu'}, IE:{r:0.92,s:'€',g:'eu'}, DE:{r:0.92,s:'€',g:'eu'},
    FR:{r:0.92,s:'€',g:'eu'}, ES:{r:0.92,s:'€',g:'eu'}, IT:{r:0.92,s:'€',g:'eu'},
    NL:{r:0.92,s:'€',g:'eu'}, PT:{r:0.92,s:'€',g:'eu'}, BE:{r:0.92,s:'€',g:'eu'},
    AT:{r:0.92,s:'€',g:'eu'}, CH:{r:0.9,s:'CHF',g:'eu'}, SE:{r:10.5,s:'kr',g:'eu'},
    NO:{r:10.5,s:'kr',g:'eu'}, DK:{r:6.8,s:'kr',g:'eu'}, PL:{r:4,s:'zł',g:'eu'},
    GH:{r:12,s:'GH₵',g:'waf'}, NG:{r:1500,s:'₦',g:'ng'}, CI:{r:600,s:'CFA',g:'cfa'},
    SN:{r:600,s:'CFA',g:'cfa'}, BJ:{r:600,s:'CFA',g:'cfa'}, TG:{r:600,s:'CFA',g:'cfa'},
    ML:{r:600,s:'CFA',g:'cfa'}, BF:{r:600,s:'CFA',g:'cfa'}, NE:{r:600,s:'CFA',g:'cfa'},
    CM:{r:600,s:'CFA',g:'cfa'}, GN:{r:12,s:'GNF',g:'cfa'}, LR:{r:1,s:'$',g:'waf'},
    SL:{r:22,s:'Le',g:'waf'}, GM:{r:65,s:'D',g:'waf'},
    KE:{r:130,s:'KSh',g:'eaf'}, ZA:{r:18,s:'R',g:'eaf'}, TZ:{r:2500,s:'TSh',g:'eaf'},
    UG:{r:3700,s:'USh',g:'eaf'}, RW:{r:1300,s:'RF',g:'eaf'}, ET:{r:55,s:'Br',g:'eaf'},
    MW:{r:1700,s:'MK',g:'eaf'}, ZM:{r:25,s:'ZK',g:'eaf'}, ZW:{r:1,s:'$',g:'eaf'},
    EG:{r:48,s:'E£',g:'magh'}, MA:{r:10,s:'MAD',g:'magh'}, TN:{r:3.1,s:'DT',g:'magh'},
    DZ:{r:135,s:'DA',g:'magh'}, LY:{r:4.8,s:'LD',g:'magh'},
    IN:{r:85,s:'₹',g:'asia'}, PK:{r:280,s:'Rs',g:'asia'}, BD:{r:110,s:'৳',g:'asia'},
    PH:{r:56,s:'₱',g:'asia'}, ID:{r:15500,s:'Rp',g:'asia'}, MY:{r:4.5,s:'RM',g:'asia'},
    SG:{r:1.35,s:'S$',g:'asia'}, TH:{r:35,s:'฿',g:'asia'}, VN:{r:25000,s:'₫',g:'asia'},
    JP:{r:150,s:'¥',g:'asia'}, KR:{r:1350,s:'₩',g:'asia'}, CN:{r:7.2,s:'¥',g:'asia'},
    AU:{r:1.5,s:'A$',g:'asia'}, NZ:{r:1.65,s:'NZ$',g:'asia'},
    BR:{r:5.5,s:'R$',g:'latam'}, MX:{r:18,s:'MX$',g:'latam'}, AR:{r:900,s:'$',g:'latam'},
    CO:{r:4000,s:'$',g:'latam'}, CL:{r:950,s:'$',g:'latam'}, PE:{r:3.7,s:'S/',g:'latam'},
    EC:{r:1,s:'$',g:'latam'}, UY:{r:40,s:'$',g:'latam'},
    AE:{r:3.7,s:'AED',g:'gulf'}, SA:{r:3.75,s:'SAR',g:'gulf'}, QA:{r:3.65,s:'QR',g:'gulf'},
    KW:{r:0.31,s:'KD',g:'gulf'}, BH:{r:0.38,s:'BD',g:'gulf'}, OM:{r:0.39,s:'OR',g:'gulf'},
    TR:{r:32,s:'₺',g:'gulf'}, IL:{r:3.7,s:'₪',g:'gulf'}
  };

  var REGION_DEFAULT = {
    waf: {r:12,s:'GH₵',g:'waf'},
    cfa: {r:600,s:'CFA',g:'cfa'},
    ng: {r:1500,s:'₦',g:'ng'},
    eaf: {r:130,s:'KSh',g:'eaf'},
    saf: {r:850,s:'Kz',g:'saf'},
    zar: {r:18,s:'R',g:'zar'},
    wae: {r:20,s:'Le',g:'wae'},
    magh: {r:135,s:'DA',g:'magh'},
    eu: {r:0.92,s:'€',g:'eu'},
    us: {r:1,s:'$',g:'us'},
    latam: {r:5.5,s:'R$',g:'latam'},
    asia: {r:85,s:'₹',g:'asia'},
    gulf: {r:3.7,s:'AED',g:'gulf'}
  };

  var P = {
    us:{pay:['Card','Apple Pay','Venmo','Zelle','Cash','PayPal'],grocery:"Trader Joe's",util:'Con Edison',emp:'Northwind Inc',tel:'Verizon Fios',coffee:['Blue Bottle','Starbucks','Local roaster'],bank:'Chase',acct:'Checking',cards:['Amazon','Target','Best Buy','Bass Pro Shops'],ride:'Uber'},
    eu:{pay:['Card','Apple Pay','SEPA','Bank transfer','Cash','PayPal'],grocery:'Lidl',util:'EDF',emp:'Nordwind GmbH',tel:'Vodafone',coffee:['Café Central','Costa','Local roaster'],bank:'Revolut',acct:'Current',cards:['Zalando','Decathlon','IKEA','FNAC'],ride:'Bolt'},
    // Ghana only — never assign this pack to other countries
    waf:{pay:['Cash','MoMo','Bank','Card','Credit','Gift card'],grocery:'Shoprite',util:'ECG prepaid',emp:'Adom Ventures',tel:'MTN data',coffee:['Chop bar','Kofi-Kofi','Street tea'],bank:'GCB',acct:'MoMo',cards:['Shoprite','MTN','Melcom','Bolt rides'],ride:'Bolt'},
    cfa:{pay:['Cash','Wave','Orange Money','Card','Bank','MoMo'],grocery:'Carrefour',util:'CIE prepaid',emp:'SIFCA Group',tel:'Orange data',coffee:['Maquis Chez Aya','Café de Rome','Attiéké stand'],bank:'Ecobank',acct:'Wave',cards:['Carrefour','Orange','Canal+','Yango'],ride:'Yango'},
    ng:{pay:['Cash','OPay','Bank','Card','Transfer','Gift card'],grocery:'Shoprite',util:'IKEDC tokens',emp:'Dangote Staff',tel:'MTN data',coffee:['Chicken Republic','Starbucks','Suya spot'],bank:'GTBank',acct:'Transfer',cards:['Jumia','Shoprite','DSTV','Bolt'],ride:'Bolt'},
    eaf:{pay:['Cash','M-Pesa','Bank','Card','Credit','Gift card'],grocery:'Naivas',util:'KPLC tokens',emp:'Rift Valley Ltd',tel:'Safaricom data',coffee:['Java House','Artcaffe','Kibanda tea'],bank:'Equity',acct:'M-Pesa',cards:['Naivas','Safaricom','Carrefour','Uber'],ride:'Uber'},
    // Lusophone southern (Angola, Cabo Verde, São Tomé)
    saf:{pay:['Cash','Card','Bank','Multicaixa','Unitel Money'],grocery:'Nosso Super',util:'ENDE prepaid',emp:'Sonangol Staff',tel:'Unitel data',coffee:['Café Copacabana','Starbucks','Muamba spot'],bank:'BAI',acct:'Multicaixa',cards:['Nosso Super','Unitel','Zap','Yango'],ride:'Yango'},
    // South Africa & neighbours (rand/pula zone vibe)
    zar:{pay:['Cash','Card','EFT','SnapScan','Ozow'],grocery:'Checkers',util:'Eskom prepaid',emp:'Cape Holdings',tel:'Vodacom data',coffee:['Vida e Caffè','Starbucks','Spur'],bank:'Capitec',acct:'EFT',cards:['Checkers','Woolworths','Takealot','Uber'],ride:'Uber'},
    // English West Africa excl. Ghana (SL, GM, LR)
    wae:{pay:['Cash','Orange Money','Bank','Card','MoMo'],grocery:'Shoprite',util:'EDSA prepaid',emp:'Afrimex Ltd',tel:'Africell data',coffee:['Street cafe','Starbucks','Attaya stand'],bank:'Rokel',acct:'Orange Money',cards:['Shoprite','Africell','QCell','Bolt'],ride:'Bolt'},
    magh:{pay:['Cash','BaridiMob','CCP','Card','Bank','Gift card'],grocery:'Carrefour',util:'Sonelgaz',emp:'Sonatrach',tel:'Mobilis data',coffee:['Café Tantonville','Starbucks','Street tea'],bank:'CPA',acct:'CCP',cards:['Jumia','Carrefour','Ooredoo','Yassir'],ride:'Yassir'},
    latam:{pay:['Cash','Pix','Card','Bank','Credit','Gift card'],grocery:'Pão de Açúcar',util:'Enel',emp:'Andina Ltda',tel:'Vivo',coffee:['Café do Ponto','Starbucks','Padaria'],bank:'Nubank',acct:'Pix',cards:['Magalu','Americanas','iFood','Uber'],ride:'Uber'},
    asia:{pay:['Cash','UPI','Card','Bank','Credit','Wallet'],grocery:'BigBasket',util:'BESCOM',emp:'Sundara Pvt Ltd',tel:'Jio',coffee:['Third Wave','Chai stall','CCD'],bank:'HDFC',acct:'UPI',cards:['Amazon','Flipkart','Swiggy','Ola'],ride:'Ola'},
    gulf:{pay:['Cash','Apple Pay','Card','Bank','Credit','Wallet'],grocery:'Carrefour',util:'DEWA',emp:'Gulf Horizon LLC',tel:'Etisalat',coffee:['% Arabica','Costa','Karak stall'],bank:'Emirates NBD',acct:'Current',cards:['Noon','Carrefour','Talabat','Careem'],ride:'Careem'}
  };

  var SYMRE = /(GH₵|CA\$|MX\$|NZ\$|A\$|S\$|R\$|N\$|KSh|TSh|USh|AED|SAR|CFA|CHF|CVE|SDG|GNF|E£|MAD|UM|Db|FC|MT|Kz|RF|ZK|MK|DA|DT|LD|Le|Br|Rs|Rp|RM|QR|KD|BD|OR|S\/|[$€£₦₹R¥₩₱฿₫₺₪])\s?(\d[\d,]*(?:\.\d+)?)/g;
  var SYM_ONLY = /(GH₵|CA\$|MX\$|NZ\$|A\$|S\$|R\$|N\$|KSh|TSh|USh|AED|SAR|CFA|CHF|CVE|SDG|GNF|E£|MAD|UM|Db|FC|MT|Kz|RF|ZK|MK|DA|DT|LD|Le|Br|Rs|Rp|RM|QR|KD|BD|OR|S\/|[$€£₦₹R¥₩₱฿₫₺₪])/g;
  var PURE = '.phv,.psv,.pea,.pcv,.amtv,.gv,.mra,.sa,.scv,.big,.rv,.gcxv,.wv';

  /**
   * Currency + content pack for a country.
   * Prefer QB_COUNTRIES (full registry). Ghana content pack (waf) is GH-only.
   */
  function resolveMarket(cc, group) {
    cc = (cc || 'US').toUpperCase();
    var row = global.QB_COUNTRIES && global.QB_COUNTRIES.byCc[cc];
    var pack = row && row.pack;
    if (pack === 'waf' && cc !== 'GH') pack = 'saf';
    if (!pack) {
      if (cc === 'GH') pack = 'waf';
      else if (cc === 'NG') pack = 'ng';
      else if (row && row.group === 'Africa') pack = 'saf';
      else if (group === 'Latin America & Caribbean') pack = 'latam';
      else if (group === 'Asia & Oceania') pack = 'asia';
      else if (group && (group.indexOf('Personal') === 0 || group.indexOf('Europe') >= 0)) pack = (cc === 'US' || cc === 'CA') ? 'us' : 'eu';
      else if (M[cc]) pack = M[cc].g;
      else pack = 'us';
    }
    var d = REGION_DEFAULT[pack] || REGION_DEFAULT.us;
    var s = (row && row.s) || (M[cc] && M[cc].s) || d.s;
    var r = (row && row.r) || (M[cc] && M[cc].r) || d.r;
    return { r: r, s: s, g: pack };
  }

  function scale(n, r) {
    var v = n * r;
    if (v >= 10000) return Math.round(v / 100) * 100;
    if (v >= 1000) return Math.round(v / 10) * 10;
    if (v >= 100) return Math.round(v);
    if (v >= 10) return r >= 50 ? Math.round(v) : Math.round(v * 2) / 2;
    return r >= 50 ? Math.round(v) : Math.round(v * 100) / 100;
  }

  function fmt(v) {
    // Compact so CFA/₦/etc. fit the phone mock (avoid CFA2,508,000 overflow).
    var n = Number(v);
    if (!isFinite(n)) return String(v);
    var abs = Math.abs(n);
    var sign = n < 0 ? '-' : '';
    if (abs >= 1000000) {
      var m = abs / 1000000;
      return sign + (m >= 10 ? Math.round(m) : Math.round(m * 10) / 10) + 'M';
    }
    if (abs >= 10000) {
      var k = abs / 1000;
      return sign + (k >= 100 ? Math.round(k) : Math.round(k * 10) / 10) + 'k';
    }
    if (abs >= 1000) return sign + abs.toLocaleString('en-US');
    return sign + (Number.isInteger(n) ? String(abs) : abs.toFixed(2));
  }

  function conv(m, num) {
    return fmt(scale(parseFloat(String(num).replace(/,/g, '')), m.r));
  }

  function escapeRe(s) {
    return String(s).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  function textNodes(root) {
    var w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT), out = [];
    while (w.nextNode()) out.push(w.currentNode);
    return out;
  }

  /** Skip percentages and bare counts (3 seats, 14 matches) — not money. */
  function looksLikeMoneyText(t) {
    if (!t || !/\d/.test(t)) return false;
    if (/%/.test(t)) return false;
    if (SYMRE.test(t)) {
      SYMRE.lastIndex = 0;
      return true;
    }
    SYMRE.lastIndex = 0;
    // leading currency-less amounts inside pure money nodes only
    return false;
  }

  function convertPureMoney(base, m) {
    // Percentages stay as-is (pace 62%)
    if (/%/.test(base) && !SYM_ONLY.test(base)) return base;
    SYM_ONLY.lastIndex = 0;
    var hasSym = SYM_ONLY.test(base);
    SYM_ONLY.lastIndex = 0;
    if (hasSym) {
      return base
        .replace(SYM_ONLY, function () { return m.s; })
        .replace(/(\d[\d,]*(?:\.\d+)?)/g, function (x) { return conv(m, x); });
    }
    // Bare numbers in .pea / .gv money cells → add symbol
    return base.replace(/([−\-+]?)(\d[\d,]*(?:\.\d+)?)/g, function (_, sign, num) {
      return (sign || '') + m.s + conv(m, num);
    });
  }

  function buildNameMap(pack) {
    var base = P.us;
    var pairs = [
      [base.grocery, pack.grocery], [base.util, pack.util], [base.emp, pack.emp],
      [base.tel, pack.tel], [base.bank, pack.bank], [base.acct, pack.acct], [base.ride, pack.ride]
    ];
    base.coffee.forEach(function (c, i) { pairs.push([c, pack.coffee[i]]); });
    base.cards.forEach(function (c, i) { pairs.push([c, pack.cards[i]]); });
    base.pay.forEach(function (c, i) { pairs.push([c, pack.pay[i]]); });
    // Uppercase payment tokens as they appear in mocks (CARD, APPLE PAY, …)
    pairs.concat(pairs.map(function (ab) {
      return [String(ab[0] || '').toUpperCase(), String(ab[1] || '').toUpperCase()];
    })).forEach(function () {});
    var upper = pairs.map(function (ab) {
      return [String(ab[0] || '').toUpperCase(), String(ab[1] || '').toUpperCase()];
    });
    var all = pairs.concat(upper);
    var map = {};
    all.forEach(function (ab) {
      if (ab[0] && ab[1] && ab[0] !== ab[1] && !(ab[0] in map)) map[ab[0]] = ab[1];
    });
    return map;
  }

  /** Marketing chrome outside phone frames — must follow country too. */
  var CHROME = {
    us: {
      peer: 'a Venmo split',
      note: 'No Plaid. No open banking. Cash counts. Works in 182 countries, 4 languages.',
      step_pay: 'Card, Apple Pay, Venmo, Zelle, cash — the real methods for your country, not a generic list.',
      wallets: 'cash, card, checking, Venmo, even a gift card'
    },
    eu: {
      peer: 'a SEPA transfer',
      note: 'No open-banking login. No aggregator. Cash counts. Works in 182 countries, 4 languages.',
      step_pay: 'Card, Apple Pay, SEPA, bank transfer, cash — the real methods for your country, not a generic list.',
      wallets: 'cash, card, current account, SEPA, even a gift card'
    },
    waf: {
      peer: 'a MoMo transfer',
      note: 'No bank login required. No aggregator. Cash counts. Works in 182 countries, 4 languages.',
      step_pay: 'Cash, MoMo, bank, card — the real methods for your country, not a generic list.',
      wallets: 'cash, MoMo, bank, card, even a gift card'
    },
    cfa: {
      peer: 'a Wave send',
      note: 'No bank login required. No aggregator. Cash counts. Works in 182 countries, 4 languages.',
      step_pay: 'Cash, Wave, Orange Money, card — the real methods for your country, not a generic list.',
      wallets: 'cash, Wave, Orange Money, bank, even a gift card'
    },
    ng: {
      peer: 'an OPay transfer',
      note: 'No bank login required. No aggregator. Cash counts. Works in 182 countries, 4 languages.',
      step_pay: 'Cash, OPay, bank transfer, card — the real methods for your country, not a generic list.',
      wallets: 'cash, OPay, bank, card, even a gift card'
    },
    eaf: {
      peer: 'an M-Pesa send',
      note: 'No bank login required. No aggregator. Cash counts. Works in 182 countries, 4 languages.',
      step_pay: 'Cash, M-Pesa, bank, card — the real methods for your country, not a generic list.',
      wallets: 'cash, M-Pesa, bank, card, even a gift card'
    },
    saf: {
      peer: 'a Multicaixa pay',
      note: 'No bank login required. No aggregator. Cash counts. Works in 182 countries, 4 languages.',
      step_pay: 'Cash, Multicaixa, Unitel Money, card — the real methods for your country, not a generic list.',
      wallets: 'cash, Multicaixa, bank, card, even a gift card'
    },
    zar: {
      peer: 'a SnapScan pay',
      note: 'No bank login required. No aggregator. Cash counts. Works in 182 countries, 4 languages.',
      step_pay: 'Cash, card, EFT, SnapScan — the real methods for your country, not a generic list.',
      wallets: 'cash, card, EFT, SnapScan, even a gift card'
    },
    wae: {
      peer: 'an Orange Money send',
      note: 'No bank login required. No aggregator. Cash counts. Works in 182 countries, 4 languages.',
      step_pay: 'Cash, Orange Money, bank, card — the real methods for your country, not a generic list.',
      wallets: 'cash, Orange Money, bank, card, even a gift card'
    },
    latam: {
      peer: 'a Pix transfer',
      note: 'No bank login required. No aggregator. Cash counts. Works in 182 countries, 4 languages.',
      step_pay: 'Cash, Pix, card, bank — the real methods for your country, not a generic list.',
      wallets: 'cash, Pix, card, bank, even a gift card'
    },
    asia: {
      peer: 'a UPI payment',
      note: 'No bank login required. No aggregator. Cash counts. Works in 182 countries, 4 languages.',
      step_pay: 'Cash, UPI, card, wallet — the real methods for your country, not a generic list.',
      wallets: 'cash, UPI, card, bank, even a gift card'
    },
    gulf: {
      peer: 'an Apple Pay split',
      note: 'No bank login required. No aggregator. Cash counts. Works in 182 countries, 4 languages.',
      step_pay: 'Cash, Apple Pay, card, bank — the real methods for your country, not a generic list.',
      wallets: 'cash, Apple Pay, card, bank, even a gift card'
    },
    magh: {
      peer: 'a BaridiMob send',
      note: 'No bank login required. No aggregator. Cash counts. Works in 182 countries, 4 languages.',
      step_pay: 'Cash, BaridiMob, CCP, card — the real methods for your country, not a generic list.',
      wallets: 'cash, BaridiMob, CCP, card, even a gift card'
    }
  };

  // Maghreb / North Africa: not MoMo markets
  var CHROME_CC = {
    DZ: {
      peer: 'a BaridiMob send',
      note: 'No bank login required. No aggregator. Cash counts. Works in 182 countries, 4 languages.',
      step_pay: 'Cash, BaridiMob, CCP, card — the real methods for your country, not a generic list.',
      wallets: 'cash, BaridiMob, CCP, card, even a gift card'
    },
    MA: {
      peer: 'a bank transfer',
      note: 'No bank login required. No aggregator. Cash counts. Works in 182 countries, 4 languages.',
      step_pay: 'Cash, bank transfer, card — the real methods for your country, not a generic list.',
      wallets: 'cash, bank, card, even a gift card'
    },
    TN: {
      peer: 'a bank transfer',
      note: 'No bank login required. No aggregator. Cash counts. Works in 182 countries, 4 languages.',
      step_pay: 'Cash, bank transfer, card — the real methods for your country, not a generic list.',
      wallets: 'cash, bank, card, even a gift card'
    },
    EG: {
      peer: 'an InstaPay send',
      note: 'No bank login required. No aggregator. Cash counts. Works in 182 countries, 4 languages.',
      step_pay: 'Cash, InstaPay, bank, card — the real methods for your country, not a generic list.',
      wallets: 'cash, InstaPay, bank, card, even a gift card'
    }
  };

  function localizeChrome(cc, m) {
    cc = (cc || 'US').toUpperCase();
    var ch = CHROME_CC[cc] || CHROME[m.g] || CHROME.us;
    var coffee = m.s + conv(m, 6);
    document.querySelectorAll('[data-chrome]').forEach(function (el) {
      var key = el.getAttribute('data-chrome');
      if (key === 'coffee') {
        el.textContent = coffee;
        return;
      }
      if (key === 'step_amount') {
        el.textContent = 'One field, big keypad, quick amounts for the numbers you type most. Groceries, gas, a ' + coffee + ' latte.';
        return;
      }
      if (ch[key] != null) el.textContent = ch[key];
    });
  }

  function localizeScreens(cc, group) {
    if (document.body.getAttribute('data-page') === 'business') return;

    var m = resolveMarket(cc, group);
    localizeChrome(cc, m);
    var pack = P[m.g] || P.us;
    var map = buildNameMap(pack);
    var keys = Object.keys(map).sort(function (a, b) { return b.length - a.length; });
    var RE = null;
    if (keys.length) {
      try {
        RE = new RegExp(keys.map(escapeRe).join('|'), 'g');
      } catch (e) {
        RE = null;
      }
    }

    var roots = document.querySelectorAll('.pane,.spane,.gsc');
    roots.forEach(function (scr) {
      // Explicit pot keypad (never leave a stray "$")
      scr.querySelectorAll('[data-pot-amount]').forEach(function (el) {
        var base = el.getAttribute('data-mbase') || '200';
        var sym = el.querySelector('[data-currency-sym], span.c');
        var num = el.querySelector('[data-pot-num]');
        if (sym) sym.textContent = m.s;
        if (num) num.textContent = conv(m, base);
      });

      // Any dedicated currency chip
      scr.querySelectorAll('[data-currency-sym], span.c').forEach(function (el) {
        if (el.closest('[data-price]')) return;
        if (el.closest('[data-pot-amount]')) return; // already handled
        var t = (el.textContent || '').trim();
        if (t && /\d/.test(t)) return;
        el.textContent = m.s;
      });

      // Capture baselines once from the US HTML source (leaf money nodes only —
      // never smash .amtv that still has a .c currency child + caret).
      scr.querySelectorAll(PURE).forEach(function (el) {
        if (el.closest('[data-price]')) return;
        if (el.closest('[data-pot-amount]')) return;
        if (el.children && el.children.length) return;
        if (el.dataset.mbase === undefined) el.dataset.mbase = el.textContent;
        el.setAttribute('data-money', '');
      });

      textNodes(scr).forEach(function (n) {
        var p2 = n.parentElement;
        if (!p2) return;
        if (p2.closest('[data-money]')) return;
        if (p2.closest('[data-price]')) return;
        if (p2.closest('[data-pot-amount]')) return;
        if (n.qbBase === undefined) n.qbBase = n.nodeValue;
        var t = n.qbBase;
        if (RE) t = t.replace(RE, function (x) { return map[x] || x; });
        if (looksLikeMoneyText(t) || SYMRE.test(t)) {
          SYMRE.lastIndex = 0;
          t = t.replace(SYMRE, function (_, s, num) { return m.s + conv(m, num); });
        }
        SYMRE.lastIndex = 0;
        n.nodeValue = t;
      });

      scr.querySelectorAll(PURE).forEach(function (el) {
        if (el.closest('[data-price]')) return;
        if (el.closest('[data-pot-amount]')) return;
        if (el.children && el.children.length) return;
        if (el.dataset.mbase === undefined) return;
        el.textContent = convertPureMoney(el.dataset.mbase, m);
      });
    });
  }

  function applyCountry(cc, opts) {
    opts = opts || {};
    cc = (cc || 'US').toUpperCase();
    localizeScreens(cc, opts.group);
    if (opts.name) {
      document.querySelectorAll('[data-country-name]').forEach(function (e) {
        e.textContent = opts.name;
      });
    }
  }

  // Always own personal-page localisation (overwrite stale inline / old no-op).
  global.qbLocalizeScreens = function (cc, group) {
    if (document.body.getAttribute('data-page') === 'business') {
      // Business page keeps its own GH-baseline inline localiser if present.
      if (global.qbLocalizeBusinessScreens) {
        global.qbLocalizeBusinessScreens(cc, group);
      }
      return;
    }
    localizeScreens(cc, group);
  };

  global.QB_PF = {
    applyCountry: applyCountry,
    localizeScreens: localizeScreens,
    resolveMarket: resolveMarket
  };
})(window);

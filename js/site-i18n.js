/**
 * Qaavah Books marketing site — EN / FR / ES / PT
 * Matches app LanguageUtils.supported + suggestFor.
 */
(function (global) {
  'use strict';

  var LANGS = [
    { code: 'en', native: 'English' },
    { code: 'fr', native: 'Français' },
    { code: 'es', native: 'Español' },
    { code: 'pt', native: 'Português' }
  ];

  var FRENCH = {
    CI:1, SN:1, ML:1, BF:1, TG:1, BJ:1, CM:1, CD:1, CG:1,
    GA:1, TD:1, CF:1, GN:1, MR:1, NE:1,
    DZ:1, TN:1, MA:1, MG:1, MU:1, KM:1, DJ:1,
    FR:1, BE:1, LU:1, MC:1, AD:1, HT:1
  };
  var SPANISH = {
    MX:1, CO:1, AR:1, PE:1, CL:1, EC:1, VE:1, BO:1, PY:1, UY:1,
    CR:1, PA:1, DO:1, GT:1, HN:1, SV:1, NI:1, CU:1, PR:1, ES:1, GQ:1
  };
  var PORTUGUESE = { BR:1, PT:1, AO:1, MZ:1, CV:1, ST:1, GW:1 };

  function suggestFor(cc) {
    cc = (cc || '').toUpperCase();
    if (FRENCH[cc]) return 'fr';
    if (SPANISH[cc]) return 'es';
    if (PORTUGUESE[cc]) return 'pt';
    return 'en';
  }

  var S = {
    en: {
      lang_label: 'Language',
      country_label: 'Country',
      nav_features: 'Features',
      nav_tour: 'Tour',
      nav_who: 'Who',
      nav_how: 'How',
      nav_pricing: 'Pricing',
      nav_privacy: 'Privacy',
      nav_get_app: 'Get the app',
      nav_start: 'Get started free',
      hero_h1_a: 'Bookkeeping,',
      hero_h1_b: 'made simple.',
      hero_cta_start: 'Start free — no card needed',
      hero_cta_tour: 'See it in action',
      micro_offline: 'Works offline',
      micro_staff: 'Staff & catalogue',
      micro_free: 'Free to start',
      group_africa: 'Africa',
      group_latam: 'Latin America & Caribbean',
      group_asia: 'Asia & Oceania',
      group_personal: 'Personal finance only (for now)',
      how_eyebrow: 'Up and running in minutes',
      how_h2: 'Three steps to a book that balances itself.',
      how_s1_h: 'Pick your focus',
      how_s2_h: 'Record as you go',
      how_s2_p: 'Log a sale at the counter, scan a receipt, or let staff record on their phone. It takes seconds and works offline.',
      how_s3_h: 'See where you stand',
      how_s3_p: 'Open the dashboard for a live picture — balances, trends, budgets and a forecast of where the month is heading.',
      pricing_eyebrow: 'Simple pricing',
      pricing_h2_a: 'Plans to suit your ',
      pricing_h2_b: 'books',
      pricing_b1: 'No card to start',
      pricing_b2: 'Works offline',
      pricing_b4: 'Cancel anytime in-app',
      foot_product: 'Product',
      foot_company: 'Company',
      foot_legal: 'Legal',
      foot_contact: 'Contact',
      foot_privacy: 'Privacy',
      foot_privacy_policy: 'Privacy policy',
      foot_get: 'Get the app',
      foot_who: "Who it's for",
      foot_how: 'How it works',
      foot_tour: 'See it in action',
      shop: {
        banner: function (name) {
          return '<b>Shop bookkeeping is open in ' + name + '</b> — run the till and team, plus an optional personal ledger.';
        },
        pill: 'Built for shops · works for home books too',
        lede: "Run the till, the team, and today's totals in one book — then keep a personal ledger if you want. Record in seconds, see where you stand, even offline.",
        whoEyebrow: 'One app, two ways to use it',
        whoH2: 'Built for the shop — home books when you want them.',
        whoP: 'Most people start with a shop or stall. Add a personal ledger later if you need both.',
        how1: 'Shop, service, or personal ledger — choose at signup and the app sets itself up in your currency and language.',
        pricingIntro: 'Free to start. Shop and personal plans where shop tools are open. Figures below are US list prices; checkout in the app shows your currency.',
        benefitLane: 'Personal or shop',
        freePerk: 'One personal ledger or shop book',
        ctaH2: 'Start keeping your money in order — today.',
        ctaP: 'Free to start, no card required. Bring the shop — keep a personal book too if you want.',
        ctaNote: 'Android first · iOS next · Shop tools in Africa & LatAm · Works offline',
        footer: 'Bookkeeping made simple — for the shop, the team, and home books. A product of Qavaah Platforms LLC.'
      },
      personal: {
        banner: function (name) {
          return '<b>Personal finance in ' + name + '</b> — shop bookkeeping is not open here yet. Staff can still join a shop abroad.';
        },
        pill: 'Personal money · on this phone',
        lede: 'Track income, bills, and savings in one private ledger. Shop tools (catalogue, staff, till) are rolling out region by region — not available in your country yet.',
        whoEyebrow: 'Personal books first',
        whoH2: 'Home finance where you are — shop tools coming later.',
        whoP: 'In the US, Canada, and Europe we launch with personal ledgers only. Staff invites still work if you work at a shop abroad.',
        how1: 'Pick a personal finance focus at signup — household, bills, or savings — in your currency and language.',
        pricingIntro: 'Free to start. Personal plans for your country. Shop plans appear when shop bookkeeping opens in your region. US list prices below; checkout shows your currency.',
        benefitLane: 'Personal ledger',
        freePerk: 'One personal ledger',
        ctaH2: 'Start your personal books — today.',
        ctaP: 'Free to start, no card required. Shop bookkeeping is not available in your country yet.',
        ctaNote: 'Android first · iOS next · Personal finance here · Works offline',
        footer: 'Personal bookkeeping made simple. Shop tools open in Africa & Latin America. A product of Qavaah Platforms LLC.'
      }
    },
    fr: {
      lang_label: 'Langue',
      country_label: 'Pays',
      nav_features: 'Fonctions',
      nav_tour: 'Visite',
      nav_who: 'Pour qui',
      nav_how: 'Comment',
      nav_pricing: 'Tarifs',
      nav_privacy: 'Confidentialité',
      nav_get_app: "Obtenir l'app",
      nav_start: 'Commencer gratuitement',
      hero_h1_a: 'La compta,',
      hero_h1_b: 'en simple.',
      hero_cta_start: 'Gratuit — sans carte',
      hero_cta_tour: 'Voir en action',
      micro_offline: 'Fonctionne hors ligne',
      micro_staff: 'Équipe & catalogue',
      micro_free: 'Gratuit pour commencer',
      group_africa: 'Afrique',
      group_latam: 'Amérique latine & Caraïbes',
      group_asia: 'Asie & Océanie',
      group_personal: 'Finances perso seulement (pour l’instant)',
      how_eyebrow: 'Prêt en quelques minutes',
      how_h2: 'Trois étapes pour un livre qui s’équilibre.',
      how_s1_h: 'Choisissez votre focus',
      how_s2_h: 'Enregistrez au fil de l’eau',
      how_s2_p: 'Vente au comptoir, scan de reçu, ou l’équipe sur son téléphone. En quelques secondes, même hors ligne.',
      how_s3_h: 'Voyez où vous en êtes',
      how_s3_p: 'Ouvrez le tableau de bord — soldes, tendances, budgets et prévision du mois.',
      pricing_eyebrow: 'Tarifs simples',
      pricing_h2_a: 'Des offres pour vos ',
      pricing_h2_b: 'livres',
      pricing_b1: 'Sans carte pour commencer',
      pricing_b2: 'Fonctionne hors ligne',
      pricing_b4: 'Résiliez quand vous voulez',
      foot_product: 'Produit',
      foot_company: 'Entreprise',
      foot_legal: 'Mentions',
      foot_contact: 'Contact',
      foot_privacy: 'Confidentialité',
      foot_privacy_policy: 'Politique de confidentialité',
      foot_get: "Obtenir l'app",
      foot_who: 'Pour qui',
      foot_how: 'Comment ça marche',
      foot_tour: 'Voir en action',
      shop: {
        banner: function (name) {
          return '<b>Compta boutique ouverte au ' + name + '</b> — caisse et équipe, plus un livre perso en option.';
        },
        pill: 'Pour les boutiques · aussi pour la maison',
        lede: 'Caisse, équipe et totaux du jour dans un seul livre — puis un ledger perso si vous voulez. En secondes, même hors ligne.',
        whoEyebrow: 'Une app, deux usages',
        whoH2: 'Pensé pour la boutique — livres perso quand vous voulez.',
        whoP: 'La plupart commencent par une boutique ou un étal. Ajoutez un ledger perso plus tard si besoin.',
        how1: 'Boutique, service ou ledger perso — choisissez à l’inscription ; devise et langue suivent.',
        pricingIntro: 'Gratuit pour commencer. Offres boutique et perso là où les outils boutique sont ouverts. Prix indicatifs US ; l’app affiche votre devise.',
        benefitLane: 'Perso ou boutique',
        freePerk: 'Un ledger perso ou un livre boutique',
        ctaH2: 'Mettez vos comptes en ordre — aujourd’hui.',
        ctaP: 'Gratuit, sans carte. Boutique — et un livre perso si vous voulez.',
        ctaNote: 'Android d’abord · iOS ensuite · Boutique en Afrique & LatAm · Hors ligne',
        footer: 'La compta, en simple — boutique, équipe et maison. Un produit de Qavaah Platforms LLC.'
      },
      personal: {
        banner: function (name) {
          return '<b>Finances perso au ' + name + '</b> — la compta boutique n’y est pas encore ouverte. Le personnel peut rejoindre une boutique à l’étranger.';
        },
        pill: 'Argent perso · sur ce téléphone',
        lede: 'Revenus, factures et épargne dans un ledger privé. Les outils boutique arrivent région par région — pas encore dans votre pays.',
        whoEyebrow: 'Livres perso d’abord',
        whoH2: 'Finances à la maison ici — boutique plus tard.',
        whoP: 'Aux États-Unis, au Canada et en Europe, nous lançons les ledgers perso seulement. Les invitations staff marchent toujours pour une boutique à l’étranger.',
        how1: 'Choisissez un focus perso à l’inscription — foyer, factures ou épargne — dans votre devise et langue.',
        pricingIntro: 'Gratuit pour commencer. Offres perso pour votre pays. Les offres boutique apparaissent quand la compta boutique s’ouvre chez vous.',
        benefitLane: 'Ledger perso',
        freePerk: 'Un ledger perso',
        ctaH2: 'Commencez vos livres perso — aujourd’hui.',
        ctaP: 'Gratuit, sans carte. La compta boutique n’est pas encore disponible dans votre pays.',
        ctaNote: 'Android d’abord · iOS ensuite · Finances perso ici · Hors ligne',
        footer: 'Compta perso, en simple. Outils boutique en Afrique et Amérique latine. Un produit de Qavaah Platforms LLC.'
      }
    },
    es: {
      lang_label: 'Idioma',
      country_label: 'País',
      nav_features: 'Funciones',
      nav_tour: 'Tour',
      nav_who: 'Para quién',
      nav_how: 'Cómo',
      nav_pricing: 'Precios',
      nav_privacy: 'Privacidad',
      nav_get_app: 'Obtener la app',
      nav_start: 'Empezar gratis',
      hero_h1_a: 'Contabilidad,',
      hero_h1_b: 'hecha simple.',
      hero_cta_start: 'Gratis — sin tarjeta',
      hero_cta_tour: 'Ver en acción',
      micro_offline: 'Funciona sin conexión',
      micro_staff: 'Equipo y catálogo',
      micro_free: 'Gratis para empezar',
      group_africa: 'África',
      group_latam: 'Latinoamérica y Caribe',
      group_asia: 'Asia y Oceanía',
      group_personal: 'Solo finanzas personales (por ahora)',
      how_eyebrow: 'Listo en minutos',
      how_h2: 'Tres pasos para un libro que se equilibra solo.',
      how_s1_h: 'Elige tu enfoque',
      how_s2_h: 'Registra sobre la marcha',
      how_s2_p: 'Venta en caja, escaneo de recibo o el equipo en su teléfono. Segundos, también sin conexión.',
      how_s3_h: 'Mira dónde estás',
      how_s3_p: 'Abre el panel — saldos, tendencias, presupuestos y previsión del mes.',
      pricing_eyebrow: 'Precios simples',
      pricing_h2_a: 'Planes para tus ',
      pricing_h2_b: 'libros',
      pricing_b1: 'Sin tarjeta para empezar',
      pricing_b2: 'Funciona sin conexión',
      pricing_b4: 'Cancela cuando quieras',
      foot_product: 'Producto',
      foot_company: 'Empresa',
      foot_legal: 'Legal',
      foot_contact: 'Contacto',
      foot_privacy: 'Privacidad',
      foot_privacy_policy: 'Política de privacidad',
      foot_get: 'Obtener la app',
      foot_who: 'Para quién',
      foot_how: 'Cómo funciona',
      foot_tour: 'Ver en acción',
      shop: {
        banner: function (name) {
          return '<b>Contabilidad de tienda abierta en ' + name + '</b> — caja y equipo, más un libro personal opcional.';
        },
        pill: 'Para tiendas · también para casa',
        lede: 'Caja, equipo y totales del día en un solo libro — y un ledger personal si quieres. En segundos, también sin conexión.',
        whoEyebrow: 'Una app, dos usos',
        whoH2: 'Hecha para la tienda — libros personales cuando quieras.',
        whoP: 'La mayoría empieza con una tienda o puesto. Añade un ledger personal después si lo necesitas.',
        how1: 'Tienda, servicio o ledger personal — elige al registrarte; moneda e idioma te siguen.',
        pricingIntro: 'Gratis para empezar. Planes de tienda y personales donde hay herramientas de tienda. Precios de lista US; la app muestra tu moneda.',
        benefitLane: 'Personal o tienda',
        freePerk: 'Un ledger personal o libro de tienda',
        ctaH2: 'Pon tu dinero en orden — hoy.',
        ctaP: 'Gratis, sin tarjeta. Trae la tienda — y un libro personal si quieres.',
        ctaNote: 'Android primero · iOS después · Tienda en África y LatAm · Sin conexión',
        footer: 'Contabilidad simple — para la tienda, el equipo y el hogar. Un producto de Qavaah Platforms LLC.'
      },
      personal: {
        banner: function (name) {
          return '<b>Finanzas personales en ' + name + '</b> — la contabilidad de tienda aún no está abierta aquí. El personal puede unirse a una tienda en el extranjero.';
        },
        pill: 'Dinero personal · en este teléfono',
        lede: 'Ingresos, facturas y ahorro en un ledger privado. Las herramientas de tienda llegan por región — aún no en tu país.',
        whoEyebrow: 'Libros personales primero',
        whoH2: 'Finanzas en casa aquí — tienda más adelante.',
        whoP: 'En EE. UU., Canadá y Europa lanzamos solo ledgers personales. Las invitaciones de personal siguen funcionando si trabajas en una tienda en el extranjero.',
        how1: 'Elige un enfoque personal al registrarte — hogar, facturas o ahorro — en tu moneda e idioma.',
        pricingIntro: 'Gratis para empezar. Planes personales para tu país. Los planes de tienda aparecen cuando la contabilidad de tienda se abra en tu región.',
        benefitLane: 'Ledger personal',
        freePerk: 'Un ledger personal',
        ctaH2: 'Empieza tus libros personales — hoy.',
        ctaP: 'Gratis, sin tarjeta. La contabilidad de tienda aún no está disponible en tu país.',
        ctaNote: 'Android primero · iOS después · Finanzas personales aquí · Sin conexión',
        footer: 'Contabilidad personal, simple. Herramientas de tienda en África y Latinoamérica. Un producto de Qavaah Platforms LLC.'
      }
    },
    pt: {
      lang_label: 'Idioma',
      country_label: 'País',
      nav_features: 'Funções',
      nav_tour: 'Tour',
      nav_who: 'Para quem',
      nav_how: 'Como',
      nav_pricing: 'Preços',
      nav_privacy: 'Privacidade',
      nav_get_app: 'Obter a app',
      nav_start: 'Começar grátis',
      hero_h1_a: 'Contabilidade,',
      hero_h1_b: 'feita simples.',
      hero_cta_start: 'Grátis — sem cartão',
      hero_cta_tour: 'Ver em ação',
      micro_offline: 'Funciona offline',
      micro_staff: 'Equipa e catálogo',
      micro_free: 'Grátis para começar',
      group_africa: 'África',
      group_latam: 'América Latina e Caribe',
      group_asia: 'Ásia e Oceania',
      group_personal: 'Só finanças pessoais (por agora)',
      how_eyebrow: 'Pronto em minutos',
      how_h2: 'Três passos para um livro que se equilibra.',
      how_s1_h: 'Escolha o seu foco',
      how_s2_h: 'Registe à medida',
      how_s2_p: 'Venda no balcão, scan de recibo ou a equipa no telemóvel. Em segundos, também offline.',
      how_s3_h: 'Veja onde está',
      how_s3_p: 'Abra o painel — saldos, tendências, orçamentos e previsão do mês.',
      pricing_eyebrow: 'Preços simples',
      pricing_h2_a: 'Planos para os seus ',
      pricing_h2_b: 'livros',
      pricing_b1: 'Sem cartão para começar',
      pricing_b2: 'Funciona offline',
      pricing_b4: 'Cancele quando quiser',
      foot_product: 'Produto',
      foot_company: 'Empresa',
      foot_legal: 'Legal',
      foot_contact: 'Contacto',
      foot_privacy: 'Privacidade',
      foot_privacy_policy: 'Política de privacidade',
      foot_get: 'Obter a app',
      foot_who: 'Para quem',
      foot_how: 'Como funciona',
      foot_tour: 'Ver em ação',
      shop: {
        banner: function (name) {
          return '<b>Contabilidade de loja aberta em ' + name + '</b> — caixa e equipa, mais um livro pessoal opcional.';
        },
        pill: 'Para lojas · também para casa',
        lede: 'Caixa, equipa e totais do dia num só livro — e um ledger pessoal se quiser. Em segundos, também offline.',
        whoEyebrow: 'Uma app, dois usos',
        whoH2: 'Feita para a loja — livros pessoais quando quiser.',
        whoP: 'A maioria começa com uma loja ou banca. Adicione um ledger pessoal depois se precisar.',
        how1: 'Loja, serviço ou ledger pessoal — escolha no registo; moeda e idioma seguem-no.',
        pricingIntro: 'Grátis para começar. Planos de loja e pessoais onde as ferramentas de loja estão abertas. Preços de lista US; a app mostra a sua moeda.',
        benefitLane: 'Pessoal ou loja',
        freePerk: 'Um ledger pessoal ou livro de loja',
        ctaH2: 'Organize o seu dinheiro — hoje.',
        ctaP: 'Grátis, sem cartão. Traga a loja — e um livro pessoal se quiser.',
        ctaNote: 'Android primeiro · iOS a seguir · Loja em África e LatAm · Offline',
        footer: 'Contabilidade simples — para a loja, a equipa e a casa. Um produto da Qavaah Platforms LLC.'
      },
      personal: {
        banner: function (name) {
          return '<b>Finanças pessoais em ' + name + '</b> — a contabilidade de loja ainda não está aberta aqui. A equipa pode juntar-se a uma loja no estrangeiro.';
        },
        pill: 'Dinheiro pessoal · neste telemóvel',
        lede: 'Rendimentos, contas e poupança num ledger privado. As ferramentas de loja chegam região a região — ainda não no seu país.',
        whoEyebrow: 'Livros pessoais primeiro',
        whoH2: 'Finanças em casa aqui — loja mais tarde.',
        whoP: 'Nos EUA, Canadá e Europa lançamos só ledgers pessoais. Os convites de staff continuam a funcionar se trabalhar numa loja no estrangeiro.',
        how1: 'Escolha um foco pessoal no registo — lar, contas ou poupança — na sua moeda e idioma.',
        pricingIntro: 'Grátis para começar. Planos pessoais para o seu país. Os planos de loja aparecem quando a contabilidade de loja abrir na sua região.',
        benefitLane: 'Ledger pessoal',
        freePerk: 'Um ledger pessoal',
        ctaH2: 'Comece os seus livros pessoais — hoje.',
        ctaP: 'Grátis, sem cartão. A contabilidade de loja ainda não está disponível no seu país.',
        ctaNote: 'Android primeiro · iOS a seguir · Finanças pessoais aqui · Offline',
        footer: 'Contabilidade pessoal, simples. Ferramentas de loja em África e América Latina. Um produto da Qavaah Platforms LLC.'
      }
    }
  };

  function getLang() {
    try {
      var s = localStorage.getItem('qb_lang');
      if (s && S[s]) return s;
    } catch (e) {}
    return 'en';
  }

  function setLang(code, opts) {
    opts = opts || {};
    if (!S[code]) code = 'en';
    try {
      localStorage.setItem('qb_lang', code);
      if (opts.manual) localStorage.setItem('qb_lang_manual', '1');
    } catch (e) {}
    document.documentElement.lang = code;
    return code;
  }

  function isLangManual() {
    try {
      return localStorage.getItem('qb_lang_manual') === '1';
    } catch (e) {
      return false;
    }
  }

  function pack(lang) {
    return S[lang] || S.en;
  }

  function applyStatic(lang) {
    var t = pack(lang);
    var map = {
      nav_features: '[data-i18n="nav_features"]',
      nav_tour: '[data-i18n="nav_tour"]',
      nav_who: '[data-i18n="nav_who"]',
      nav_how: '[data-i18n="nav_how"]',
      nav_pricing: '[data-i18n="nav_pricing"]',
      nav_privacy: '[data-i18n="nav_privacy"]',
      nav_get_app: '[data-i18n="nav_get_app"]',
      nav_start: '[data-i18n="nav_start"]',
      hero_cta_start: '[data-i18n="hero_cta_start"]',
      hero_cta_tour: '[data-i18n="hero_cta_tour"]',
      micro_offline: '[data-i18n="micro_offline"]',
      micro_staff: '[data-i18n="micro_staff"]',
      micro_free: '[data-i18n="micro_free"]',
      how_eyebrow: '[data-i18n="how_eyebrow"]',
      how_h2: '[data-i18n="how_h2"]',
      how_s1_h: '[data-i18n="how_s1_h"]',
      how_s2_h: '[data-i18n="how_s2_h"]',
      how_s2_p: '[data-i18n="how_s2_p"]',
      how_s3_h: '[data-i18n="how_s3_h"]',
      how_s3_p: '[data-i18n="how_s3_p"]',
      pricing_eyebrow: '[data-i18n="pricing_eyebrow"]',
      pricing_b1: '[data-i18n="pricing_b1"]',
      pricing_b2: '[data-i18n="pricing_b2"]',
      pricing_b4: '[data-i18n="pricing_b4"]',
      foot_product: '[data-i18n="foot_product"]',
      foot_company: '[data-i18n="foot_company"]',
      foot_legal: '[data-i18n="foot_legal"]',
      foot_contact: '[data-i18n="foot_contact"]',
      foot_privacy: '[data-i18n="foot_privacy"]',
      foot_privacy_policy: '[data-i18n="foot_privacy_policy"]',
      foot_get: '[data-i18n="foot_get"]',
      foot_who: '[data-i18n="foot_who"]',
      foot_how: '[data-i18n="foot_how"]',
      foot_tour: '[data-i18n="foot_tour"]',
      lang_label: 'label[for="langSel"]',
      country_label: 'label[for="countrySel"]'
    };
    Object.keys(map).forEach(function (key) {
      document.querySelectorAll(map[key]).forEach(function (el) {
        if (t[key] != null) el.textContent = t[key];
      });
    });
    var h1a = document.getElementById('heroH1a');
    var h1b = document.getElementById('heroH1b');
    if (h1a) h1a.textContent = t.hero_h1_a;
    if (h1b) h1b.textContent = t.hero_h1_b;
    var ph2 = document.getElementById('pricingH2');
    if (ph2) {
      ph2.innerHTML =
        t.pricing_h2_a +
        '<em style="font-style:italic;font-weight:700;color:var(--sage-deep)">' +
        t.pricing_h2_b +
        '</em>';
    }
    var ls = document.getElementById('langSel');
    if (ls) ls.setAttribute('aria-label', t.lang_label);
    var cs = document.getElementById('countrySel');
    if (cs) cs.setAttribute('aria-label', t.country_label);
  }

  function laneCopy(lang, lane) {
    var t = pack(lang);
    return t[lane] || t.shop;
  }

  function groupLabel(lang, groupEn) {
    var t = pack(lang);
    if (groupEn === 'Africa') return t.group_africa;
    if (groupEn === 'Latin America & Caribbean') return t.group_latam;
    if (groupEn === 'Asia & Oceania') return t.group_asia;
    if (groupEn.indexOf('Personal') === 0) return t.group_personal;
    return groupEn;
  }

  global.QB_I18N = {
    LANGS: LANGS,
    suggestFor: suggestFor,
    getLang: getLang,
    setLang: setLang,
    isLangManual: isLangManual,
    pack: pack,
    applyStatic: applyStatic,
    laneCopy: laneCopy,
    groupLabel: groupLabel
  };
})(window);

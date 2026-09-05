/**
 * Personal-tour marketing i18n (EN / FR / ES / PT).
 * Self-contained packs + applyPersonal; merges into window.QB_I18N when present.
 */
(function (global) {
  'use strict';

  var PF = {
    en: {
      nav_workflow: 'Workflow',
      nav_why: 'Why us',
      nav_screens: 'Screens',
      nav_pricing: 'Pricing',
      nav_get: 'Get the app',
      nav_features: 'Features',
      pf_lang_note: 'The app ships in these four. Currency and payment methods follow your country, not your language.',
      hero_h1_a: 'Know where it went. ',
      hero_h1_b: 'Without linking a bank.',
      hero_lede: 'Four seconds to log a coffee, a Venmo split, or cash out of your pocket. You get one honest number across every account you actually use — and <b>we never ask for a bank password, because we never need one.</b>',
      hero_cta_start: 'Start free',
      hero_cta_flow: 'Watch the workflow',
      hero_note: 'No Plaid. No open banking. Cash counts. Works in 182 countries, 4 languages.',
      lets_h2_a: 'Personal money, ',
      lets_h2_b: 'wherever you are',
      lets_lede: 'One secure place for cash, cards, transfers and prepaid — without handing over a bank login. The app lets you:',
      let1_h: 'Log a spend in seconds',
      let1_p: 'Amount, what it was, how you paid — then the totals move. No sync spinner.',
      let2_h: 'See cash as a wallet',
      let2_p: 'Pocket cash counts the same as card or Venmo. Aggregators leave a hole here.',
      let3_h: 'Stay ahead of bills',
      let3_p: 'Due items surface on the day. Confirm, edit, or skip — before the overdue spiral.',
      let4_h: "Know what's left",
      let4_p: 'Pace marks on the budget show if you are ahead today, not on the 30th.',
      zig1_h: 'Log it when it happens',
      zig1_p: 'Most apps wait for the bank to post. You record the coffee, the split, or the cash out of your pocket while you still remember it.',
      zig1_c1: 'Pin the things you buy every week with their usual amount',
      zig1_c2: 'Pick the real pay method for your country — not a generic list',
      zig1_c3: 'Totals and remaining budget update on the spot',
      zig1_link: 'See the record flow →',
      zig2_h: 'See the month while you can still change it',
      zig2_p: 'Budgets with a pace mark, pots you can fill, and bills that come to you — without linking an account or waiting for a feed.',
      zig2_c1: 'Ahead / behind / over — by how much — as of today',
      zig2_c2: 'Recurring rent, utilities and paycheck on their own tab',
      zig2_c3: 'Optional on-device-only mode — entries never leave the phone',
      zig2_link: 'Why not just link a bank →',
      flow_tag: 'The workflow',
      flow_h2_a: 'From a coffee to ',
      flow_h2_b: 'a month you can explain',
      flow_lede: 'Most apps start by asking for your bank password, then guess what your transactions were and tell you three days late. This starts from how you actually spend, and asks you almost nothing. It plays on its own — or click any step to jump.',
      flow_s1_h: 'Open to today',
      flow_s1_p: 'Net for the month, money in against spending, and the week beside it. No login screen, no sync spinner.',
      flow_s2_h: 'Pin what you buy every week',
      flow_s2_p: 'Your quick list keeps starred shortcuts, ones you added, and suggestions for your profile — each with its usual amount. Income, expense and asset picks get their own tab.',
      flow_s3_h: 'Tap the amount',
      flow_s3_p: 'One field, big keypad, quick amounts for the numbers you type most. Groceries, gas, a latte.',
      flow_s4_h: 'Say how you paid',
      flow_s4_p: 'Card, Apple Pay, Venmo, Zelle, cash — the real methods for your country, not a generic list.',
      flow_s5_h: 'Saved, and the total moves',
      flow_s5_p: 'The entry lands and your remaining budget updates on the spot. Four seconds, start to finish.',
      flow_s6_h: 'Set it once, it repeats',
      flow_s6_p: 'Rent, utilities, subscriptions and your paycheck live on the Recurring tab, grouped into this week and later this month. Remind or auto-log, skip one, or pause it.',
      flow_s7_h: 'Bills come to you',
      flow_s7_p: 'On the day something is due it shows up on top. One tap confirms, or edit if the amount changed.',
      flow_s8_h: "Know what's left",
      flow_s8_p: 'Left to spend before payday, where it went, and the categories quietly eating the month.',
      flow_pause: 'Pause',
      flow_play: 'Play',
      flow_step: 'STEP',
      edge_tag: 'Why not just link your bank',
      edge_h2_a: 'Four things aggregators ',
      edge_h2_b: "can't do for you",
      edge_lede: 'Bank-linking apps solved data entry. They never solved knowing your money — especially cash, prepaid cards, and the bill that hits tomorrow.',
      edge_c1_them: 'They need your bank login',
      edge_c1_us: 'You log it in four seconds — no password shared',
      edge_c1_why: 'We never ask for a bank password. Your money stays on your terms; entries are yours to record.',
      edge_c2_them: "They can't see cash",
      edge_c2_us: 'Cash is a wallet like any other',
      edge_c2_why: 'Pocket cash, market stalls, tips — they count the same as card or MoMo.',
      edge_c3_them: 'They tell you on the 30th',
      edge_c3_us: 'A pace mark shows if you are ahead today',
      edge_c3_why: 'Budgets update when you record, not when the bank finally posts.',
      edge_c4_them: 'They ignore money you prepaid',
      edge_c4_us: 'Gift cards you can spend from',
      edge_c4_why: 'Track balances and spend from gift cards before they expire unused.',
      store_tag: 'Store frames',
      store_h2_a: 'The same shots ',
      store_h2_b: 'as App Store & Play',
      store_lede: 'What personal markets see on the store listing — home, record, privacy, Money Tools, budget, and insights.',
      store_hint: 'Drag or scroll sideways →',
      store_t1: 'Home',
      store_d1: 'Net for the month, money in and spent, at a glance.',
      store_t2: 'Record',
      store_d2: 'Amount, what it was, how you paid — in seconds.',
      store_t3: 'No bank login',
      store_d3: 'On-device privacy. We never need your bank password.',
      store_t4: 'Money Tools',
      store_d4: 'Wallets, debts, pots, due bills — one hub.',
      store_t5: 'Budget',
      store_d5: 'Category limits with a pace mark for today.',
      store_t6: 'Insights',
      store_d6: 'Where it went, and whether you are ahead.',
      screens_tag: 'More of the app',
      screens_h2_a: 'Six more screens ',
      screens_h2_b: 'that stop money leaking',
      screens_lede: 'A gift card you forgot expires. A bill sneaks up. Statement import, pots, find, and reports close those gaps.',
      gal_t1: 'Statement import',
      gal_d1: 'Bring a CSV or OFX statement, match or add rows, keep raw files off the server.',
      gal_t2: 'Gift cards',
      gal_d2: 'Balances you can spend from before they expire.',
      gal_t3: 'Pots',
      gal_d3: 'Named savings pots linked to your budget goals.',
      gal_t4: 'Budget',
      gal_d4: 'Category spend against limits, with a pace tick for today.',
      gal_t5: 'Find an entry',
      gal_d5: 'Search every past entry by name, amount or method.',
      gal_t6: 'Reports & export',
      gal_d6: 'Money in against money out — export CSV or PDF.',
      badge_plus: 'Personal Plus',
      price_tag: 'Pricing',
      price_h2_a: 'Less than one ',
      price_h2_b: 'forgotten gift card',
      price_lede: 'Keep a basic record free forever. Personal Plus is about what one unspent gift card costs you — and it pays for itself the first time one does not expire.',
      plan_free: 'Free',
      plan_plus: 'Personal Plus',
      price_forever: ' / forever',
      price_month: ' / month',
      price_annual: 'OR {amount} A YEAR — TWO MONTHS FREE',
      plan_free_li1: '20 entries a month',
      plan_free_li2: 'Cash, card, bank and wallet accounts',
      plan_free_li3: "Today's report",
      plan_free_li4: 'Device-only privacy mode',
      plan_free_li5: 'No card required',
      plan_plus_li1: 'Unlimited entries',
      plan_plus_li2: 'Monthly budget with category pacing',
      plan_plus_li3: 'Insights, cash-flow map, CSV & PDF export',
      plan_plus_li4: 'Statement import — CSV or OFX',
      plan_plus_li5: 'Pots, gift cards, debts, due bills',
      plan_plus_li6: 'Recurring bills, auto-log, receipt scan',
      plan_cta_free: 'Start free',
      plan_cta_plus: 'Get Personal Plus',
      price_note: 'Showing prices for {country}. Every market is priced locally rather than converted — never a converted foreign price. Payment methods follow your country: Apple Pay and Venmo in the US, SEPA and Bizum in Europe, MoMo in West Africa, Pix in Brazil.',
      end_tag: 'Get the app',
      end_h2_a: 'Start free. ',
      end_h2_b: 'No bank login.',
      end_play: 'Google Play — coming soon',
      end_appstore: 'App Store — coming soon',
      foot_about: 'Know where it went — without linking a bank. Personal ledgers worldwide; shop tools where markets are open.',
      foot_col_product: 'Product',
      foot_col_company: 'Company',
      foot_col_legal: 'Legal',
      foot_business: 'For shops & teams',
      foot_contact: 'Contact',
      foot_store: 'Store screenshots',
      foot_privacy: 'Privacy policy',
      foot_delete: 'Delete my data',
      foot_copy: '© 2026 Qavaah Platforms LLC. All rights reserved.',
      mock_home: 'Home',
      mock_quick: 'Quick list',
      mock_record: 'Record',
      mock_insights: 'Insights',
      mock_budget: 'Budget',
      mock_saved_month: 'Saved this month',
      mock_money_in: 'Money in',
      mock_spent: 'Spent',
      mock_this_week: 'This week',
      mock_this_month: 'This month',
      mock_good_morning: 'Good morning, Maya.',
      mock_private: 'PRIVATE',
      mock_starred: 'STARRED',
      mock_suggested: 'SUGGESTED',
      mock_search: 'Search…',
      mock_save_entry: 'Save entry',
      mock_how_paid: 'How did you pay?',
      mock_amount: 'Amount',
      mock_clear: 'Clear',
      mock_left_spend: 'Left to spend',
      mock_due_bills: 'Due bills',
      mock_where_went: 'Where it went',
      mock_on_track: 'ON TRACK',
      mock_behind: 'BEHIND',
      mock_ahead: 'AHEAD',
      mock_review: 'Review statement',
      mock_add: 'ADD',
      mock_match: 'MATCH',
      mock_ignore: 'IGNORE',
      mock_find: 'Find an entry',
      mock_report: 'Report',
      mock_week: 'Week',
      mock_month: 'Month',
      mock_year: 'Year',
      mock_grouped: 'Grouped',
      mock_latest: 'Latest',
      mock_income: 'Income',
      mock_expense: 'Expense',
      mock_recurring: 'Recurring',
      mock_assets: 'Assets'
    },
    fr: {
      nav_workflow: 'Parcours',
      nav_why: 'Pourquoi nous',
      nav_screens: 'Écrans',
      nav_pricing: 'Tarifs',
      nav_get: "Obtenir l'app",
      nav_features: 'Fonctions',
      pf_lang_note: 'L’app est disponible dans ces quatre langues. La devise et les moyens de paiement suivent votre pays, pas votre langue.',
      hero_h1_a: 'Sachez où c’est passé. ',
      hero_h1_b: 'Sans lier une banque.',
      hero_lede: 'Quatre secondes pour noter un café, un partage Venmo ou du cash sorti de votre poche. Un chiffre honnête sur tous les comptes que vous utilisez vraiment — et <b>nous ne demandons jamais de mot de passe bancaire, parce que nous n’en avons pas besoin.</b>',
      hero_cta_start: 'Commencer gratuitement',
      hero_cta_flow: 'Voir le parcours',
      hero_note: 'Pas de Plaid. Pas d’open banking. Le cash compte. 182 pays, 4 langues.',
      lets_h2_a: 'L’argent perso, ',
      lets_h2_b: 'où que vous soyez',
      lets_lede: 'Un seul endroit sûr pour cash, cartes, virements et prépayé — sans donner d’identifiants bancaires. L’app vous permet de :',
      let1_h: 'Noter une dépense en secondes',
      let1_p: 'Montant, motif, moyen de paiement — puis les totaux bougent. Pas de sync qui tourne.',
      let2_h: 'Voir le cash comme un portefeuille',
      let2_p: 'Le cash de poche compte autant que la carte ou Venmo. Les agrégateurs laissent un trou ici.',
      let3_h: 'Rester devant les factures',
      let3_p: 'Les échéances apparaissent le jour J. Confirmer, modifier ou passer — avant le retard.',
      let4_h: 'Savoir ce qu’il reste',
      let4_p: 'Les repères de rythme du budget disent si vous êtes en avance aujourd’hui, pas le 30.',
      zig1_h: 'Notez-le quand ça arrive',
      zig1_p: 'La plupart des apps attendent la banque. Vous notez le café, le partage ou le cash tant que vous vous en souvenez.',
      zig1_c1: 'Épinglez ce que vous achetez chaque semaine avec le montant habituel',
      zig1_c2: 'Choisissez le vrai moyen de paiement de votre pays — pas une liste générique',
      zig1_c3: 'Totaux et budget restant se mettent à jour sur le coup',
      zig1_link: 'Voir le flux d’enregistrement →',
      zig2_h: 'Voir le mois tant qu’on peut encore agir',
      zig2_p: 'Budgets avec repère de rythme, pots à remplir, factures qui viennent à vous — sans lier un compte.',
      zig2_c1: 'En avance / en retard / dépassé — de combien — dès aujourd’hui',
      zig2_c2: 'Loyer, services et salaire sur l’onglet Récurrent',
      zig2_c3: 'Mode appareil uniquement — les écritures ne quittent jamais le téléphone',
      zig2_link: 'Pourquoi ne pas juste lier une banque →',
      flow_tag: 'Le parcours',
      flow_h2_a: 'D’un café à ',
      flow_h2_b: 'un mois que vous pouvez expliquer',
      flow_lede: 'La plupart des apps commencent par demander votre mot de passe bancaire, puis devinent vos transactions et vous le disent trois jours trop tard. Ici, on part de la façon dont vous dépensez vraiment, et on vous demande presque rien. Ça joue tout seul — ou cliquez une étape pour y aller.',
      flow_s1_h: 'Ouvrez sur aujourd’hui',
      flow_s1_p: 'Le net du mois, les entrées face aux dépenses, et la semaine à côté. Pas d’écran de connexion, pas de roue de sync.',
      flow_s2_h: 'Épinglez vos achats de chaque semaine',
      flow_s2_p: 'Votre liste rapide garde les raccourcis étoilés, ceux que vous avez ajoutés, et des suggestions pour votre profil — chacun avec son montant habituel. Revenus, dépenses et actifs ont chacun leur onglet.',
      flow_s3_h: 'Tapez le montant',
      flow_s3_p: 'Un champ, un grand clavier, des montants rapides pour les chiffres que vous tapez le plus. Courses, essence, un latte.',
      flow_s4_h: 'Dites comment vous avez payé',
      flow_s4_p: 'Carte, Apple Pay, Venmo, Zelle, cash — les vrais moyens de votre pays, pas une liste générique.',
      flow_s5_h: 'Enregistré, et le total bouge',
      flow_s5_p: 'L’entrée arrive et votre budget restant se met à jour aussitôt. Quatre secondes, du début à la fin.',
      flow_s6_h: 'Réglez une fois, ça se répète',
      flow_s6_p: 'Loyer, charges, abonnements et salaire vivent dans l’onglet Récurrent, regroupés cette semaine et plus tard ce mois. Rappel ou auto-enregistrement, sautez une fois, ou mettez en pause.',
      flow_s7_h: 'Les factures viennent à vous',
      flow_s7_p: 'Le jour où quelque chose est dû, ça apparaît en haut. Un tap pour confirmer, ou modifiez si le montant a changé.',
      flow_s8_h: 'Sachez ce qu’il reste',
      flow_s8_p: 'Ce qu’il reste à dépenser avant la paye, où c’est passé, et les catégories qui grignotent le mois.',
      flow_pause: 'Pause',
      flow_play: 'Lecture',
      flow_step: 'ÉTAPE',
      edge_tag: 'Pourquoi ne pas juste lier votre banque',
      edge_h2_a: 'Quatre choses que les agrégateurs ',
      edge_h2_b: 'ne peuvent pas faire pour vous',
      edge_lede: 'Les apps qui lient la banque ont résolu la saisie. Elles n’ont jamais résolu le fait de connaître votre argent — surtout le cash, les cartes prépayées, et la facture qui tombe demain.',
      edge_c1_them: 'Ils veulent votre login bancaire',
      edge_c1_us: 'Vous notez en quatre secondes — aucun mot de passe partagé',
      edge_c1_why: 'Nous ne demandons jamais de mot de passe bancaire. Votre argent reste à vos conditions ; les écritures sont les vôtres.',
      edge_c2_them: 'Ils ne voient pas le cash',
      edge_c2_us: 'Le cash est un portefeuille comme les autres',
      edge_c2_why: 'Cash de poche, marché, pourboires — ça compte autant qu’une carte ou du MoMo.',
      edge_c3_them: 'Ils vous le disent le 30',
      edge_c3_us: 'Un jalon de rythme montre si vous êtes en avance aujourd’hui',
      edge_c3_why: 'Les budgets se mettent à jour quand vous enregistrez, pas quand la banque poste enfin.',
      edge_c4_them: 'Ils ignorent ce que vous avez prépayé',
      edge_c4_us: 'Des cartes cadeaux depuis lesquelles dépenser',
      edge_c4_why: 'Suivez les soldes et dépensez vos cartes cadeaux avant qu’elles n’expirent inutilisées.',
      store_tag: 'Cadres store',
      store_h2_a: 'Les mêmes captures ',
      store_h2_b: 'qu’App Store & Play',
      store_lede: 'Ce que voient les marchés perso sur la fiche store — accueil, enregistrement, confidentialité, Outils argent, budget et insights.',
      store_hint: 'Glissez ou faites défiler →',
      store_t1: 'Accueil',
      store_d1: 'Le net du mois, entrées et dépenses, d’un coup d’œil.',
      store_t2: 'Enregistrer',
      store_d2: 'Montant, de quoi il s’agissait, comment vous avez payé — en secondes.',
      store_t3: 'Pas de login bancaire',
      store_d3: 'Confidentialité sur l’appareil. Nous n’avons jamais besoin de votre mot de passe bancaire.',
      store_t4: 'Outils argent',
      store_d4: 'Portefeuilles, dettes, pots, factures dues — un seul hub.',
      store_t5: 'Budget',
      store_d5: 'Plafonds par catégorie avec un jalon de rythme pour aujourd’hui.',
      store_t6: 'Insights',
      store_d6: 'Où c’est passé, et si vous êtes en avance.',
      screens_tag: 'Plus de l’app',
      screens_h2_a: 'Six écrans de plus ',
      screens_h2_b: 'qui arrêtent les fuites',
      screens_lede: 'Une carte cadeau oubliée expire. Une facture arrive en douce. Import de relevé, pots, recherche et rapports ferment ces trous.',
      gal_t1: 'Import de relevé',
      gal_d1: 'Importez un relevé CSV ou OFX, associez ou ajoutez des lignes, gardez les fichiers bruts hors serveur.',
      gal_t2: 'Cartes cadeaux',
      gal_d2: 'Des soldes depuis lesquels dépenser avant expiration.',
      gal_t3: 'Pots',
      gal_d3: 'Pots d’épargne nommés, liés à vos objectifs de budget.',
      gal_t4: 'Budget',
      gal_d4: 'Dépenses par catégorie face aux plafonds, avec un jalon pour aujourd’hui.',
      gal_t5: 'Trouver une écriture',
      gal_d5: 'Cherchez chaque écriture passée par nom, montant ou moyen.',
      gal_t6: 'Rapports & export',
      gal_d6: 'Entrées face aux sorties — exportez en CSV ou PDF.',
      badge_plus: 'Personal Plus',
      price_tag: 'Tarifs',
      price_h2_a: 'Moins qu’une ',
      price_h2_b: 'carte cadeau oubliée',
      price_lede: 'Gardez un suivi de base gratuit pour toujours. Personal Plus, c’est le prix d’une carte cadeau non utilisée — et ça se rembourse la première fois qu’une n’expire pas.',
      plan_free: 'Gratuit',
      plan_plus: 'Personal Plus',
      price_forever: ' / pour toujours',
      price_month: ' / mois',
      price_annual: 'OU {amount} PAR AN — DEUX MOIS OFFERTS',
      plan_free_li1: '20 écritures par mois',
      plan_free_li2: 'Comptes cash, carte, banque et portefeuille',
      plan_free_li3: 'Rapport du jour',
      plan_free_li4: 'Mode confidentialité appareil uniquement',
      plan_free_li5: 'Sans carte requise',
      plan_plus_li1: 'Écritures illimitées',
      plan_plus_li2: 'Budget mensuel avec rythme par catégorie',
      plan_plus_li3: 'Insights, carte de trésorerie, export CSV & PDF',
      plan_plus_li4: 'Import de relevé — CSV ou OFX',
      plan_plus_li5: 'Pots, cartes cadeaux, dettes, factures dues',
      plan_plus_li6: 'Factures récurrentes, auto-enregistrement, scan de reçu',
      plan_cta_free: 'Commencer gratuitement',
      plan_cta_plus: 'Prendre Personal Plus',
      price_note: 'Prix affichés pour {country}. Chaque marché est tarifé localement — jamais un prix étranger converti. Les moyens de paiement suivent votre pays : Apple Pay et Venmo aux USA, SEPA et Bizum en Europe, MoMo en Afrique de l’Ouest, Pix au Brésil.',
      end_tag: "Obtenir l'app",
      end_h2_a: 'Commencez gratuitement. ',
      end_h2_b: 'Sans login bancaire.',
      end_play: 'Google Play — bientôt',
      end_appstore: 'App Store — bientôt',
      foot_about: 'Sachez où c’est passé — sans lier une banque. Livres perso partout ; outils boutique là où les marchés sont ouverts.',
      foot_col_product: 'Produit',
      foot_col_company: 'Entreprise',
      foot_col_legal: 'Mentions légales',
      foot_business: 'Pour boutiques et équipes',
      foot_contact: 'Contact',
      foot_store: 'Captures store',
      foot_privacy: 'Politique de confidentialité',
      foot_delete: 'Supprimer mes données',
      foot_copy: '© 2026 Qavaah Platforms LLC. Tous droits réservés.',
      mock_home: 'Accueil',
      mock_quick: 'Liste rapide',
      mock_record: 'Enregistrer',
      mock_insights: 'Insights',
      mock_budget: 'Budget',
      mock_saved_month: 'Épargné ce mois',
      mock_money_in: 'Entrées',
      mock_spent: 'Dépensé',
      mock_this_week: 'Cette semaine',
      mock_this_month: 'Ce mois',
      mock_good_morning: 'Bonjour, Maya.',
      mock_private: 'PRIVÉ',
      mock_starred: 'ÉTOILÉS',
      mock_suggested: 'SUGGÉRÉS',
      mock_search: 'Rechercher…',
      mock_save_entry: "Enregistrer l'écriture",
      mock_how_paid: 'Comment avez-vous payé ?',
      mock_amount: 'Montant',
      mock_clear: 'Effacer',
      mock_left_spend: 'Reste à dépenser',
      mock_due_bills: 'Factures dues',
      mock_where_went: 'Où c’est passé',
      mock_on_track: 'EN LIGNE',
      mock_behind: 'EN RETARD',
      mock_ahead: 'EN AVANCE',
      mock_review: 'Revoir le relevé',
      mock_add: 'AJOUTER',
      mock_match: 'ASSOCIER',
      mock_ignore: 'IGNORER',
      mock_find: 'Trouver une écriture',
      mock_report: 'Rapport',
      mock_week: 'Semaine',
      mock_month: 'Mois',
      mock_year: 'Année',
      mock_grouped: 'Groupé',
      mock_latest: 'Récent',
      mock_income: 'Revenus',
      mock_expense: 'Dépenses',
      mock_recurring: 'Récurrent',
      mock_assets: 'Actifs'
    },
    es: {
      nav_workflow: 'Flujo',
      nav_why: 'Por qué nosotros',
      nav_screens: 'Pantallas',
      nav_pricing: 'Precios',
      nav_get: 'Obtener la app',
      nav_features: 'Funciones',
      pf_lang_note: 'La app se ofrece en estos cuatro. La moneda y los métodos de pago siguen tu país, no tu idioma.',
      hero_h1_a: 'Sabe a dónde fue. ',
      hero_h1_b: 'Sin vincular un banco.',
      hero_lede: 'Cuatro segundos para anotar un café, un reparto en Venmo o efectivo de tu bolsillo. Un número honesto en todas las cuentas que usas de verdad — y <b>nunca pedimos una contraseña bancaria, porque nunca la necesitamos.</b>',
      hero_cta_start: 'Empezar gratis',
      hero_cta_flow: 'Ver el flujo',
      hero_note: 'Sin Plaid. Sin open banking. El efectivo cuenta. 182 países, 4 idiomas.',
      lets_h2_a: 'Dinero personal, ',
      lets_h2_b: 'donde estés',
      lets_lede: 'Un lugar seguro para efectivo, tarjetas, transferencias y prepago — sin entregar el login del banco. La app te deja:',
      let1_h: 'Anotar un gasto en segundos',
      let1_p: 'Importe, qué fue, cómo pagaste — y los totales se mueven. Sin spinner de sync.',
      let2_h: 'Ver el efectivo como cartera',
      let2_p: 'El efectivo del bolsillo cuenta igual que tarjeta o Venmo. Los agregadores dejan un hueco aquí.',
      let3_h: 'Adelantarte a las facturas',
      let3_p: 'Lo que vence aparece el día. Confirma, edita o salta — antes del atraso.',
      let4_h: 'Saber qué queda',
      let4_p: 'Las marcas de ritmo del presupuesto dicen si vas adelantado hoy, no el día 30.',
      zig1_h: 'Anota cuando pasa',
      zig1_p: 'La mayoría espera al banco. Tú registras el café, el reparto o el efectivo mientras lo recuerdas.',
      zig1_c1: 'Fija lo que compras cada semana con su importe habitual',
      zig1_c2: 'Elige el método real de tu país — no una lista genérica',
      zig1_c3: 'Totales y presupuesto restante se actualizan al momento',
      zig1_link: 'Ver el flujo de registro →',
      zig2_h: 'Ve el mes mientras aún puedes cambiarlo',
      zig2_p: 'Presupuestos con ritmo, pots y facturas que llegan a ti — sin vincular una cuenta.',
      zig2_c1: 'Adelante / atrasado / pasado — cuánto — hoy',
      zig2_c2: 'Alquiler, servicios y nómina en la pestaña Recurrente',
      zig2_c3: 'Modo solo en el dispositivo — las partidas no salen del teléfono',
      zig2_link: 'Por qué no vincular el banco y ya →',
      flow_tag: 'El flujo',
      flow_h2_a: 'De un café a ',
      flow_h2_b: 'un mes que puedes explicar',
      flow_lede: 'La mayoría de apps empieza pidiendo tu contraseña bancaria, luego adivina tus movimientos y te lo dice tres días tarde. Esto parte de cómo gastas de verdad, y casi no te pide nada. Se reproduce solo — o toca cualquier paso para saltar.',
      flow_s1_h: 'Abre en el hoy',
      flow_s1_p: 'Neto del mes, entradas frente a gastos, y la semana al lado. Sin pantalla de login, sin rueda de sync.',
      flow_s2_h: 'Fija lo que compras cada semana',
      flow_s2_p: 'Tu lista rápida guarda atajos con estrella, los que añadiste y sugerencias de tu perfil — cada uno con su importe habitual. Ingresos, gastos y activos tienen su propia pestaña.',
      flow_s3_h: 'Toca el importe',
      flow_s3_p: 'Un campo, teclado grande, importes rápidos para los números que más escribes. Compra, gasolina, un latte.',
      flow_s4_h: 'Di cómo pagaste',
      flow_s4_p: 'Tarjeta, Apple Pay, Venmo, Zelle, efectivo — los métodos reales de tu país, no una lista genérica.',
      flow_s5_h: 'Guardado, y el total se mueve',
      flow_s5_p: 'La entrada aterriza y tu presupuesto restante se actualiza al momento. Cuatro segundos, de principio a fin.',
      flow_s6_h: 'Configúralo una vez, se repite',
      flow_s6_p: 'Alquiler, servicios, suscripciones y tu nómina viven en la pestaña Recurrente, agrupados en esta semana y más adelante este mes. Recuerda o registra solo, salta uno o pausa.',
      flow_s7_h: 'Las facturas vienen a ti',
      flow_s7_p: 'El día que algo vence, aparece arriba. Un toque confirma, o edita si cambió el importe.',
      flow_s8_h: 'Sabe qué queda',
      flow_s8_p: 'Lo que queda por gastar antes de la nómina, a dónde fue, y las categorías que se comen el mes en silencio.',
      flow_pause: 'Pausa',
      flow_play: 'Reproducir',
      flow_step: 'PASO',
      edge_tag: 'Por qué no vincular el banco y ya',
      edge_h2_a: 'Cuatro cosas que los agregadores ',
      edge_h2_b: 'no pueden hacer por ti',
      edge_lede: 'Las apps que vinculan el banco resolvieron la entrada de datos. Nunca resolvieron conocer tu dinero — sobre todo efectivo, prepago y la factura que cae mañana.',
      edge_c1_them: 'Necesitan tu login bancario',
      edge_c1_us: 'Lo anotas en cuatro segundos — sin compartir contraseña',
      edge_c1_why: 'Nunca pedimos una contraseña bancaria. Tu dinero sigue en tus términos; las entradas son tuyas para registrar.',
      edge_c2_them: 'No ven el efectivo',
      edge_c2_us: 'El efectivo es una cartera como cualquier otra',
      edge_c2_why: 'Efectivo de bolsillo, puestos de mercado, propinas — cuentan igual que tarjeta o MoMo.',
      edge_c3_them: 'Te lo dicen el día 30',
      edge_c3_us: 'Una marca de ritmo muestra si vas adelantado hoy',
      edge_c3_why: 'Los presupuestos se actualizan cuando registras, no cuando el banco publica al fin.',
      edge_c4_them: 'Ignoran lo que ya prepagaste',
      edge_c4_us: 'Tarjetas regalo desde las que puedes gastar',
      edge_c4_why: 'Sigue saldos y gasta tarjetas regalo antes de que caduquen sin usar.',
      store_tag: 'Marcos de tienda',
      store_h2_a: 'Las mismas capturas ',
      store_h2_b: 'que App Store y Play',
      store_lede: 'Lo que ven los mercados personales en la ficha — inicio, registrar, privacidad, Money Tools, presupuesto e insights.',
      store_hint: 'Arrastra o desplázate →',
      store_t1: 'Inicio',
      store_d1: 'Neto del mes, entradas y gastos, de un vistazo.',
      store_t2: 'Registrar',
      store_d2: 'Importe, qué fue, cómo pagaste — en segundos.',
      store_t3: 'Sin login bancario',
      store_d3: 'Privacidad en el dispositivo. Nunca necesitamos tu contraseña bancaria.',
      store_t4: 'Money Tools',
      store_d4: 'Carteras, deudas, huchas, facturas — un solo hub.',
      store_t5: 'Presupuesto',
      store_d5: 'Límites por categoría con marca de ritmo para hoy.',
      store_t6: 'Insights',
      store_d6: 'A dónde fue, y si vas adelantado.',
      screens_tag: 'Más de la app',
      screens_h2_a: 'Seis pantallas más ',
      screens_h2_b: 'que frenan fugas de dinero',
      screens_lede: 'Una tarjeta regalo olvidada caduca. Una factura se cuela. Importar extractos, huchas, buscar e informes cierran esos huecos.',
      gal_t1: 'Importar extracto',
      gal_d1: 'Trae un extracto CSV u OFX, empareja o añade filas, deja los archivos en bruto fuera del servidor.',
      gal_t2: 'Tarjetas regalo',
      gal_d2: 'Saldos desde los que gastar antes de que caduquen.',
      gal_t3: 'Huchas',
      gal_d3: 'Huchas de ahorro con nombre, ligadas a tus metas de presupuesto.',
      gal_t4: 'Presupuesto',
      gal_d4: 'Gasto por categoría frente a límites, con marca de ritmo para hoy.',
      gal_t5: 'Buscar una entrada',
      gal_d5: 'Busca cada entrada pasada por nombre, importe o método.',
      gal_t6: 'Informes y exportar',
      gal_d6: 'Entradas frente a salidas — exporta CSV o PDF.',
      badge_plus: 'Personal Plus',
      price_tag: 'Precios',
      price_h2_a: 'Menos que una ',
      price_h2_b: 'tarjeta regalo olvidada',
      price_lede: 'Mantén un registro básico gratis para siempre. Personal Plus es lo que te cuesta una tarjeta regalo sin gastar — y se paga solo la primera vez que una no caduca.',
      plan_free: 'Gratis',
      plan_plus: 'Personal Plus',
      price_forever: ' / para siempre',
      price_month: ' / mes',
      price_annual: 'O {amount} AL AÑO — DOS MESES GRATIS',
      plan_free_li1: '20 entradas al mes',
      plan_free_li2: 'Cuentas de efectivo, tarjeta, banco y cartera',
      plan_free_li3: 'Informe de hoy',
      plan_free_li4: 'Modo privacidad solo en el dispositivo',
      plan_free_li5: 'Sin tarjeta requerida',
      plan_plus_li1: 'Entradas ilimitadas',
      plan_plus_li2: 'Presupuesto mensual con ritmo por categoría',
      plan_plus_li3: 'Insights, mapa de flujo, exportar CSV y PDF',
      plan_plus_li4: 'Importar extracto — CSV u OFX',
      plan_plus_li5: 'Huchas, tarjetas regalo, deudas, facturas',
      plan_plus_li6: 'Facturas recurrentes, auto-registro, escanear recibo',
      plan_cta_free: 'Empezar gratis',
      plan_cta_plus: 'Conseguir Personal Plus',
      price_note: 'Mostrando precios para {country}. Cada mercado tiene precio local — nunca un precio extranjero convertido. Los métodos de pago siguen tu país: Apple Pay y Venmo en EE. UU., SEPA y Bizum en Europa, MoMo en África Occidental, Pix en Brasil.',
      end_tag: 'Obtener la app',
      end_h2_a: 'Empieza gratis. ',
      end_h2_b: 'Sin login bancario.',
      end_play: 'Google Play — próximamente',
      end_appstore: 'App Store — próximamente',
      foot_about: 'Sabe a dónde fue — sin vincular un banco. Libros personales en todo el mundo; herramientas de tienda donde el mercado está abierto.',
      foot_col_product: 'Producto',
      foot_col_company: 'Empresa',
      foot_col_legal: 'Legal',
      foot_business: 'Para tiendas y equipos',
      foot_contact: 'Contacto',
      foot_store: 'Capturas de tienda',
      foot_privacy: 'Política de privacidad',
      foot_delete: 'Eliminar mis datos',
      foot_copy: '© 2026 Qavaah Platforms LLC. Todos los derechos reservados.',
      mock_home: 'Inicio',
      mock_quick: 'Lista rápida',
      mock_record: 'Registrar',
      mock_insights: 'Insights',
      mock_budget: 'Presupuesto',
      mock_saved_month: 'Ahorrado este mes',
      mock_money_in: 'Entradas',
      mock_spent: 'Gastado',
      mock_this_week: 'Esta semana',
      mock_this_month: 'Este mes',
      mock_good_morning: 'Buenos días, Maya.',
      mock_private: 'PRIVADO',
      mock_starred: 'DESTACADOS',
      mock_suggested: 'SUGERIDOS',
      mock_search: 'Buscar…',
      mock_save_entry: 'Guardar entrada',
      mock_how_paid: '¿Cómo pagaste?',
      mock_amount: 'Importe',
      mock_clear: 'Borrar',
      mock_left_spend: 'Queda por gastar',
      mock_due_bills: 'Facturas pendientes',
      mock_where_went: 'A dónde fue',
      mock_on_track: 'EN CURSO',
      mock_behind: 'ATRÁS',
      mock_ahead: 'ADELANTE',
      mock_review: 'Revisar extracto',
      mock_add: 'AÑADIR',
      mock_match: 'EMPAREJAR',
      mock_ignore: 'IGNORAR',
      mock_find: 'Buscar una entrada',
      mock_report: 'Informe',
      mock_week: 'Semana',
      mock_month: 'Mes',
      mock_year: 'Año',
      mock_grouped: 'Agrupado',
      mock_latest: 'Reciente',
      mock_income: 'Ingresos',
      mock_expense: 'Gastos',
      mock_recurring: 'Recurrente',
      mock_assets: 'Activos'
    },
    pt: {
      nav_workflow: 'Fluxo',
      nav_why: 'Porquê nós',
      nav_screens: 'Ecrãs',
      nav_pricing: 'Preços',
      nav_get: 'Obter a app',
      nav_features: 'Funções',
      pf_lang_note: 'A app existe nestas quatro. A moeda e os métodos de pagamento seguem o seu país, não o idioma.',
      hero_h1_a: 'Saiba para onde foi. ',
      hero_h1_b: 'Sem ligar um banco.',
      hero_lede: 'Quatro segundos para registar um café, uma divisão no Venmo ou dinheiro do bolso. Um número honesto em todas as contas que usa de verdade — e <b>nunca pedimos uma palavra-passe bancária, porque nunca precisamos de uma.</b>',
      hero_cta_start: 'Começar grátis',
      hero_cta_flow: 'Ver o fluxo',
      hero_note: 'Sem Plaid. Sem open banking. O dinheiro conta. 182 países, 4 idiomas.',
      lets_h2_a: 'Dinheiro pessoal, ',
      lets_h2_b: 'onde estiver',
      lets_lede: 'Um sítio seguro para numerário, cartões, transferências e pré-pago — sem entregar o login do banco. A app deixa-o:',
      let1_h: 'Registar um gasto em segundos',
      let1_p: 'Montante, o que foi, como pagou — e os totais mexem. Sem spinner de sync.',
      let2_h: 'Ver o cash como carteira',
      let2_p: 'O dinheiro do bolso conta como cartão ou Venmo. Os agregadores deixam um buraco aqui.',
      let3_h: 'Antecipar as contas',
      let3_p: 'O que vence aparece no dia. Confirme, edite ou salte — antes do atraso.',
      let4_h: 'Saber o que resta',
      let4_p: 'Marcas de ritmo no orçamento dizem se está à frente hoje, não no dia 30.',
      zig1_h: 'Registe quando acontece',
      zig1_p: 'A maioria espera o banco. Você regista o café, a divisão ou o cash enquanto ainda se lembra.',
      zig1_c1: 'Fixe o que compra todas as semanas com o montante habitual',
      zig1_c2: 'Escolha o método real do seu país — não uma lista genérica',
      zig1_c3: 'Totais e orçamento restante atualizam na hora',
      zig1_link: 'Ver o fluxo de registo →',
      zig2_h: 'Veja o mês enquanto ainda pode mudar',
      zig2_p: 'Orçamentos com ritmo, pots e contas que vêm ter consigo — sem ligar uma conta.',
      zig2_c1: 'À frente / atrasado / acima — quanto — hoje',
      zig2_c2: 'Renda, serviços e salário no separador Recorrente',
      zig2_c3: 'Modo só no dispositivo — os lançamentos não saem do telemóvel',
      zig2_link: 'Porquê não ligar só o banco →',
      flow_tag: 'O fluxo',
      flow_h2_a: 'De um café a ',
      flow_h2_b: 'um mês que consegue explicar',
      flow_lede: 'A maioria das apps começa por pedir a palavra-passe do banco, depois adivinha as transações e diz-lhe três dias tarde. Isto parte de como gasta de verdade, e quase não pede nada. Corre sozinho — ou toque num passo para saltar.',
      flow_s1_h: 'Abra no hoje',
      flow_s1_p: 'Líquido do mês, entradas frente a despesas, e a semana ao lado. Sem ecrã de login, sem roda de sync.',
      flow_s2_h: 'Fixe o que compra todas as semanas',
      flow_s2_p: 'A lista rápida guarda atalhos com estrela, os que adicionou e sugestões do seu perfil — cada um com o valor habitual. Rendimentos, despesas e ativos têm o seu separador.',
      flow_s3_h: 'Toque no valor',
      flow_s3_p: 'Um campo, teclado grande, valores rápidos para os números que mais escreve. Compras, combustível, um latte.',
      flow_s4_h: 'Diga como pagou',
      flow_s4_p: 'Cartão, Apple Pay, Venmo, Zelle, dinheiro — os métodos reais do seu país, não uma lista genérica.',
      flow_s5_h: 'Guardado, e o total move-se',
      flow_s5_p: 'A entrada chega e o orçamento restante atualiza na hora. Quatro segundos, do início ao fim.',
      flow_s6_h: 'Configure uma vez, repete-se',
      flow_s6_p: 'Renda, serviços, subscrições e o ordenado vivem no separador Recorrente, agrupados nesta semana e mais tarde neste mês. Lembrete ou auto-registo, salte um, ou pause.',
      flow_s7_h: 'As contas vêm ter consigo',
      flow_s7_p: 'No dia em que algo vence, aparece no topo. Um toque confirma, ou edite se o valor mudou.',
      flow_s8_h: 'Saiba o que resta',
      flow_s8_p: 'O que resta gastar antes do ordenado, para onde foi, e as categorias que vão comendo o mês.',
      flow_pause: 'Pausa',
      flow_play: 'Reproduzir',
      flow_step: 'PASSO',
      edge_tag: 'Porquê não ligar só o banco',
      edge_h2_a: 'Quatro coisas que os agregadores ',
      edge_h2_b: 'não conseguem fazer por si',
      edge_lede: 'As apps que ligam o banco resolveram a introdução de dados. Nunca resolveram conhecer o seu dinheiro — sobretudo dinheiro vivo, pré-pagos e a conta que cai amanhã.',
      edge_c1_them: 'Precisam do login bancário',
      edge_c1_us: 'Regista em quatro segundos — sem partilhar palavra-passe',
      edge_c1_why: 'Nunca pedimos uma palavra-passe bancária. O seu dinheiro fica nos seus termos; as entradas são suas para registar.',
      edge_c2_them: 'Não veem o dinheiro vivo',
      edge_c2_us: 'O dinheiro é uma carteira como qualquer outra',
      edge_c2_why: 'Dinheiro de bolso, feiras, gorjetas — contam igual a cartão ou MoMo.',
      edge_c3_them: 'Dizem-lhe no dia 30',
      edge_c3_us: 'Uma marca de ritmo mostra se vai à frente hoje',
      edge_c3_why: 'Os orçamentos atualizam quando regista, não quando o banco finalmente publica.',
      edge_c4_them: 'Ignoram o que já pré-pagou',
      edge_c4_us: 'Cartões oferta dos quais pode gastar',
      edge_c4_why: 'Acompanhe saldos e gaste cartões oferta antes de expirarem sem uso.',
      store_tag: 'Molduras da loja',
      store_h2_a: 'As mesmas capturas ',
      store_h2_b: 'que App Store e Play',
      store_lede: 'O que os mercados pessoais veem na ficha — início, registar, privacidade, Money Tools, orçamento e insights.',
      store_hint: 'Arraste ou deslize →',
      store_t1: 'Início',
      store_d1: 'Líquido do mês, entradas e gastos, num relance.',
      store_t2: 'Registar',
      store_d2: 'Valor, o que foi, como pagou — em segundos.',
      store_t3: 'Sem login bancário',
      store_d3: 'Privacidade no dispositivo. Nunca precisamos da sua palavra-passe bancária.',
      store_t4: 'Money Tools',
      store_d4: 'Carteiras, dívidas, potes, contas a vencer — um só hub.',
      store_t5: 'Orçamento',
      store_d5: 'Limites por categoria com marca de ritmo para hoje.',
      store_t6: 'Insights',
      store_d6: 'Para onde foi, e se vai à frente.',
      screens_tag: 'Mais da app',
      screens_h2_a: 'Mais seis ecrãs ',
      screens_h2_b: 'que param fugas de dinheiro',
      screens_lede: 'Um cartão oferta esquecido expira. Uma conta aparece de surpresa. Importação de extrato, potes, procura e relatórios fecham essas falhas.',
      gal_t1: 'Importar extrato',
      gal_d1: 'Traga um extrato CSV ou OFX, associe ou adicione linhas, mantenha os ficheiros brutos fora do servidor.',
      gal_t2: 'Cartões oferta',
      gal_d2: 'Saldos dos quais pode gastar antes de expirarem.',
      gal_t3: 'Potes',
      gal_d3: 'Potes de poupança com nome, ligados às metas do orçamento.',
      gal_t4: 'Orçamento',
      gal_d4: 'Gasto por categoria face aos limites, com marca de ritmo para hoje.',
      gal_t5: 'Encontrar uma entrada',
      gal_d5: 'Pesquise cada entrada passada por nome, valor ou método.',
      gal_t6: 'Relatórios e exportar',
      gal_d6: 'Entradas frente a saídas — exporte CSV ou PDF.',
      badge_plus: 'Personal Plus',
      price_tag: 'Preços',
      price_h2_a: 'Menos do que um ',
      price_h2_b: 'cartão oferta esquecido',
      price_lede: 'Mantenha um registo básico grátis para sempre. Personal Plus é o custo de um cartão oferta por gastar — e paga-se a si próprio na primeira vez que um não expira.',
      plan_free: 'Grátis',
      plan_plus: 'Personal Plus',
      price_forever: ' / para sempre',
      price_month: ' / mês',
      price_annual: 'OU {amount} POR ANO — DOIS MESES GRÁTIS',
      plan_free_li1: '20 entradas por mês',
      plan_free_li2: 'Contas de dinheiro, cartão, banco e carteira',
      plan_free_li3: 'Relatório de hoje',
      plan_free_li4: 'Modo de privacidade só no dispositivo',
      plan_free_li5: 'Sem cartão necessário',
      plan_plus_li1: 'Entradas ilimitadas',
      plan_plus_li2: 'Orçamento mensal com ritmo por categoria',
      plan_plus_li3: 'Insights, mapa de fluxo, exportar CSV e PDF',
      plan_plus_li4: 'Importar extrato — CSV ou OFX',
      plan_plus_li5: 'Potes, cartões oferta, dívidas, contas a vencer',
      plan_plus_li6: 'Contas recorrentes, auto-registo, scan de recibo',
      plan_cta_free: 'Começar grátis',
      plan_cta_plus: 'Obter Personal Plus',
      price_note: 'A mostrar preços para {country}. Cada mercado tem preço local — nunca um preço estrangeiro convertido. Os métodos de pagamento seguem o seu país: Apple Pay e Venmo nos EUA, SEPA e Bizum na Europa, MoMo na África Ocidental, Pix no Brasil.',
      end_tag: 'Obter a app',
      end_h2_a: 'Comece grátis. ',
      end_h2_b: 'Sem login bancário.',
      end_play: 'Google Play — em breve',
      end_appstore: 'App Store — em breve',
      foot_about: 'Saiba para onde foi — sem ligar um banco. Livros pessoais em todo o mundo; ferramentas de loja onde o mercado está aberto.',
      foot_col_product: 'Produto',
      foot_col_company: 'Empresa',
      foot_col_legal: 'Legal',
      foot_business: 'Para lojas e equipas',
      foot_contact: 'Contacto',
      foot_store: 'Capturas da loja',
      foot_privacy: 'Política de privacidade',
      foot_delete: 'Apagar os meus dados',
      foot_copy: '© 2026 Qavaah Platforms LLC. Todos os direitos reservados.',
      mock_home: 'Início',
      mock_quick: 'Lista rápida',
      mock_record: 'Registar',
      mock_insights: 'Insights',
      mock_budget: 'Orçamento',
      mock_saved_month: 'Poupado este mês',
      mock_money_in: 'Entradas',
      mock_spent: 'Gasto',
      mock_this_week: 'Esta semana',
      mock_this_month: 'Este mês',
      mock_good_morning: 'Bom dia, Maya.',
      mock_private: 'PRIVADO',
      mock_starred: 'COM ESTRELA',
      mock_suggested: 'SUGERIDOS',
      mock_search: 'Pesquisar…',
      mock_save_entry: 'Guardar entrada',
      mock_how_paid: 'Como pagou?',
      mock_amount: 'Valor',
      mock_clear: 'Limpar',
      mock_left_spend: 'Resta gastar',
      mock_due_bills: 'Contas a vencer',
      mock_where_went: 'Para onde foi',
      mock_on_track: 'NO RITMO',
      mock_behind: 'ATRÁS',
      mock_ahead: 'À FRENTE',
      mock_review: 'Rever extrato',
      mock_add: 'ADICIONAR',
      mock_match: 'ASSOCIAR',
      mock_ignore: 'IGNORAR',
      mock_find: 'Encontrar uma entrada',
      mock_report: 'Relatório',
      mock_week: 'Semana',
      mock_month: 'Mês',
      mock_year: 'Ano',
      mock_grouped: 'Agrupado',
      mock_latest: 'Recente',
      mock_income: 'Rendimentos',
      mock_expense: 'Despesas',
      mock_recurring: 'Recorrente',
      mock_assets: 'Ativos'
    }
  };

  var PERSONAL_OVERRIDES = {
    en: {
      pfHeroTag: 'Personal money · available in 182 countries',
      ctaP: 'Free to start, no card and no bank login. Four seconds to log what you spent.',
      ctaNote: 'Android first · iOS next · No Plaid · Cash counts · Works offline',
      footer: 'Know where it went — without linking a bank. A product of Qavaah Platforms LLC.'
    },
    fr: {
      pfHeroTag: 'Argent perso · disponible dans 182 pays',
      ctaP: 'Gratuit, sans carte et sans connexion bancaire. Quatre secondes pour noter une dépense.',
      ctaNote: 'Android d’abord · iOS ensuite · Pas de Plaid · Le cash compte · Hors ligne',
      footer: 'Sachez où est passé votre argent — sans lier une banque. Un produit de Qavaah Platforms LLC.'
    },
    es: {
      pfHeroTag: 'Dinero personal · disponible en 182 países',
      ctaP: 'Gratis, sin tarjeta y sin acceso bancario. Cuatro segundos para anotar un gasto.',
      ctaNote: 'Android primero · iOS después · Sin Plaid · El efectivo cuenta · Sin conexión',
      footer: 'Sabe a dónde fue — sin vincular un banco. Un producto de Qavaah Platforms LLC.'
    },
    pt: {
      pfHeroTag: 'Dinheiro pessoal · disponível em 182 países',
      ctaP: 'Grátis, sem cartão e sem login bancário. Quatro segundos para registar um gasto.',
      ctaNote: 'Android primeiro · iOS a seguir · Sem Plaid · O dinheiro conta · Offline',
      footer: 'Saiba para onde foi — sem ligar um banco. Um produto da Qavaah Platforms LLC.'
    }
  };

  function pack(lang) {
    if (global.QB_I18N && typeof global.QB_I18N.pack === 'function') {
      return global.QB_I18N.pack(lang);
    }
    return {
      pf: PF[lang] || PF.en,
      personal: PERSONAL_OVERRIDES[lang] || PERSONAL_OVERRIDES.en
    };
  }

  function applyPersonal(lang, countryName) {
    var root =
      document.getElementById('layoutPersonal') ||
      (document.body && document.body.getAttribute('data-page') === 'personal'
        ? document.body
        : null);
    if (!root) return;

    var t = pack(lang);
    // Prefer dedicated PF packs (site-i18n pack may lack .pf until merge)
    var pf = PF[lang] || (t && t.pf) || PF.en;
    if (!pf) return;

    var HTML_KEYS = {
      hero_lede: 1
    };

    var SPLIT_H = {
      hero_h1: { id: 'pfHeroH1', a: 'hero_h1_a', b: 'hero_h1_b' },
      flow_h2: { id: 'pfFlowH2', a: 'flow_h2_a', b: 'flow_h2_b' },
      edge_h2: { id: 'pfEdgeH2', a: 'edge_h2_a', b: 'edge_h2_b' },
      store_h2: { id: 'pfStoreH2', a: 'store_h2_a', b: 'store_h2_b' },
      screens_h2: { id: 'pfScreensH2', a: 'screens_h2_a', b: 'screens_h2_b' },
      price_h2: { id: 'pfPriceH2', a: 'price_h2_a', b: 'price_h2_b' },
      end_h2: { id: 'pfEndH2', a: 'end_h2_a', b: 'end_h2_b' },
      lets_h2: { id: 'pfLetsH2', a: 'lets_h2_a', b: 'lets_h2_b' }
    };

    function setSplit(spec) {
      var el = root.querySelector('#' + spec.id) || document.getElementById(spec.id);
      if (!el) return;
      var a = pf[spec.a] || '';
      var b = pf[spec.b] || '';
      el.innerHTML = a + '<em>' + b + '</em>';
    }

    Object.keys(SPLIT_H).forEach(function (k) {
      setSplit(SPLIT_H[k]);
    });

    // Also accept data-pf="hero_h1" etc. that wrap the split ids, if present
    ['hero_h1', 'flow_h2', 'edge_h2', 'store_h2', 'screens_h2', 'price_h2', 'end_h2', 'lets_h2'].forEach(function (base) {
      var el = root.querySelector('[data-pf="' + base + '"]');
      if (!el) return;
      var a = pf[base + '_a'] || '';
      var b = pf[base + '_b'] || '';
      el.innerHTML = a + '<em>' + b + '</em>';
    });

    var annualEl = root.querySelector('[data-annual="personalPlus"]');
    var annualAmount = annualEl ? (annualEl.textContent || '').trim() : '';

    function setPreservingIcons(el, val) {
      var icons = el.querySelectorAll(':scope > .msr');
      if (icons.length) {
        var keep = [];
        icons.forEach(function (ic) { keep.push(ic); });
        el.textContent = '';
        keep.forEach(function (ic) { el.appendChild(ic); });
        el.appendChild(document.createTextNode(val));
        return;
      }
      el.textContent = val;
    }

    root.querySelectorAll('[data-pf]').forEach(function (el) {
      var key = el.getAttribute('data-pf');
      if (!key) return;
      // Country chrome owns payment/method copy when both are present
      if (el.hasAttribute('data-chrome')) return;
      if (key === 'hero_tag') {
        var tag =
          (t && t.personal && t.personal.pfHeroTag) ||
          (PERSONAL_OVERRIDES[lang] && PERSONAL_OVERRIDES[lang].pfHeroTag) ||
          el.textContent;
        if (tag) el.textContent = tag;
        return;
      }
      if (!Object.prototype.hasOwnProperty.call(pf, key)) return;
      if (SPLIT_H[key] || ((/_h2$|_h1$/).test(key) && pf[key + '_a'] != null)) {
        if (pf[key + '_a'] != null) return;
      }

      var val = pf[key];
      if (val == null) return;

      if (key === 'price_note') {
        el.textContent = String(val).replace(/\{country\}/g, countryName || '');
        return;
      }
      if (key === 'price_annual') {
        var amt = annualAmount || '';
        var bits = String(val).split('{amount}');
        if (bits.length < 2) bits = String(pf.price_annual || 'OR {amount} A YEAR').split('{amount}');
        el.textContent = '';
        el.appendChild(document.createTextNode(bits[0] || ''));
        var sp = document.createElement('span');
        sp.setAttribute('data-annual', 'personalPlus');
        sp.textContent = amt;
        el.appendChild(sp);
        el.appendChild(document.createTextNode(bits[1] || ''));
        return;
      }

      if (HTML_KEYS[key] || /<[a-z][\s\S]*>/i.test(String(val))) {
        el.innerHTML = val;
      } else {
        setPreservingIcons(el, val);
      }
    });

    // Labels for personal lane selectors
    var labLang = root.querySelector('label[for="langSelPf"]');
    var labCountry = root.querySelector('label[for="countrySelPf"]');
    if (labLang && t.lang_label) labLang.textContent = t.lang_label;
    if (labCountry && t.country_label) labCountry.textContent = t.country_label;
    var ls = document.getElementById('langSelPf');
    var cs = document.getElementById('countrySelPf');
    if (ls && t.lang_label) ls.setAttribute('aria-label', t.lang_label);
    if (cs && t.country_label) cs.setAttribute('aria-label', t.country_label);

    // Hero tag from personal lane (existing)
    var heroTag = document.getElementById('pfHeroTag');
    if (heroTag && t.personal && t.personal.pfHeroTag) {
      heroTag.textContent = t.personal.pfHeroTag;
    }

    // Pause / Play button + datasets for the inline tour script
    var pp = root.querySelector('#pp') || document.getElementById('pp');
    if (pp && pf.flow_pause && pf.flow_play) {
      pp.dataset.pause = pf.flow_pause;
      pp.dataset.play = pf.flow_play;
      var cur = (pp.textContent || '').trim().toLowerCase();
      var pauseSet = ['pause', 'pausa'];
      var playSet = ['play', 'reproduzir', 'reproducir', 'lecture'];
      ['en', 'fr', 'es', 'pt'].forEach(function (code) {
        if (PF[code]) {
          pauseSet.push((PF[code].flow_pause || '').toLowerCase());
          playSet.push((PF[code].flow_play || '').toLowerCase());
        }
      });
      if (pauseSet.indexOf(cur) >= 0) pp.textContent = pf.flow_pause;
      else if (playSet.indexOf(cur) >= 0) pp.textContent = pf.flow_play;
    }

    // Step counter label prefix (STEP → localized), keep " 01 / 08"
    var cnt = root.querySelector('#cnt') || document.getElementById('cnt');
    if (cnt && pf.flow_step) {
      cnt.dataset.step = pf.flow_step;
      var m = (cnt.textContent || '').match(/(\d+\s*\/\s*\d+)/);
      if (m) cnt.textContent = pf.flow_step + ' ' + m[1];
    }

    // Mock chrome: prefer [data-pf-mock], else remap known English baselines in .pt / .mt2 / .pfl
    root.querySelectorAll('[data-pf-mock]').forEach(function (el) {
      var mk = el.getAttribute('data-pf-mock');
      if (mk && pf[mk] != null) {
        // Keep Material icon spans; replace text nodes / whole textContent when simple
        var icon = el.querySelector('.msr');
        if (icon && el.childNodes.length > 1) {
          // e.g. <div class="pt"><span class="msr">home</span>Home</div>
          var parts = [];
          el.childNodes.forEach(function (n) {
            if (n.nodeType === 3) parts.push(n);
          });
          if (parts.length) {
            parts[0].textContent = pf[mk];
            for (var i = 1; i < parts.length; i++) parts[i].textContent = '';
          } else {
            el.textContent = pf[mk];
            if (icon) el.insertBefore(icon, el.firstChild);
          }
        } else {
          el.textContent = pf[mk];
        }
      }
    });

    var MOCK_BASELINES = {
      Home: 'mock_home',
      'Quick list': 'mock_quick',
      Record: 'mock_record',
      Insights: 'mock_insights',
      Budget: 'mock_budget',
      'Saved this month': 'mock_saved_month',
      'Money in': 'mock_money_in',
      Spent: 'mock_spent',
      'This week': 'mock_this_week',
      'This month': 'mock_this_month',
      'Good morning, Maya.': 'mock_good_morning',
      PRIVATE: 'mock_private',
      STARRED: 'mock_starred',
      SUGGESTED: 'mock_suggested',
      'Search…': 'mock_search',
      'Save entry': 'mock_save_entry',
      'How did you pay?': 'mock_how_paid',
      Amount: 'mock_amount',
      Clear: 'mock_clear',
      'Left to spend': 'mock_left_spend',
      'Due bills': 'mock_due_bills',
      'Where it went': 'mock_where_went',
      'ON TRACK': 'mock_on_track',
      BEHIND: 'mock_behind',
      AHEAD: 'mock_ahead',
      'Review statement': 'mock_review',
      ADD: 'mock_add',
      MATCH: 'mock_match',
      IGNORE: 'mock_ignore',
      'Find an entry': 'mock_find',
      Report: 'mock_report',
      Week: 'mock_week',
      Month: 'mock_month',
      Year: 'mock_year',
      Grouped: 'mock_grouped',
      Latest: 'mock_latest',
      Income: 'mock_income',
      Expense: 'mock_expense',
      Recurring: 'mock_recurring',
      Assets: 'mock_assets'
    };

    // Build reverse map of all known mock strings across langs → key, then apply current lang
    var mockKeyByText = {};
    ['en', 'fr', 'es', 'pt'].forEach(function (code) {
      var packPf = PF[code] || {};
      Object.keys(MOCK_BASELINES).forEach(function (enText) {
        var mk = MOCK_BASELINES[enText];
        mockKeyByText[enText] = mk;
        if (packPf[mk]) mockKeyByText[packPf[mk]] = mk;
      });
    });

    function remapMockText(el) {
      if (el.hasAttribute('data-pf-mock')) return;
      var icon = el.querySelector(':scope > .msr');
      var raw = (el.textContent || '').trim();
      // For tab items with icon+label, isolate label
      if (icon) {
        var label = '';
        el.childNodes.forEach(function (n) {
          if (n.nodeType === 3) label += n.textContent;
        });
        raw = label.trim() || raw.replace(icon.textContent || '', '').trim();
      }
      var mk = mockKeyByText[raw];
      if (!mk || pf[mk] == null) return;
      if (icon) {
        el.childNodes.forEach(function (n) {
          if (n.nodeType === 3) n.textContent = '';
        });
        el.appendChild(document.createTextNode(pf[mk]));
      } else {
        el.textContent = pf[mk];
      }
    }

    root.querySelectorAll('.pt, .mt2, .pfl, .phl, .psl, .pcl, .pgreet, .amtc, .cta, .pkick, .tt').forEach(remapMockText);
  }

  if (global.QB_I18N && typeof global.QB_I18N.pack === 'function') {
    ['en', 'fr', 'es', 'pt'].forEach(function (lang) {
      var p = global.QB_I18N.pack(lang);
      if (!p) return;
      p.pf = PF[lang];
      p.personal = p.personal || {};
      var ov = PERSONAL_OVERRIDES[lang] || {};
      Object.keys(ov).forEach(function (k) {
        p.personal[k] = ov[k];
      });
    });
    global.QB_I18N.applyPersonal = applyPersonal;
  }

  global.QB_PF_I18N = {
    applyPersonal: applyPersonal,
    PF: PF
  };
})(window);

import { Article, Author } from '../types.ts';

// Editorial authors
export const AUTHORS: Record<string, Author> = {
  emi: {
    name: 'Emi Tanaka',
    japaneseName: '田中 絵美',
    role: 'Editor-in-Chief & Paper Connoisseur',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=240&q=80',
    bio: 'Based in Yanaka, Tokyo. Emi has spent over twelve years exploring Japanese paper mills from Echizen to Mino, testing ink bleed, nib drag, and bookbinding craft.',
  },
  kenji: {
    name: 'Kenji Sato',
    japaneseName: '佐藤 健二',
    role: 'Pen Specialist & Industrial Historian',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=240&q=80',
    bio: 'Former technical draftsman turned stationery archivist. Kenji obsesses over ballpoint emulsion formulas, spring-loaded needle points, and lead rotation engines.',
  },
  aoi: {
    name: 'Aoi Moriyama',
    japaneseName: '森山 葵',
    role: 'Planner Specialist & Life Design Lead',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=240&q=80',
    bio: 'Aoi has maintained a daily Hobonichi Techo since 2011. She leads workshops across Kyoto on timeblocking, wabi-sabi memory keeping, and washi curation.',
  },
  daiki: {
    name: 'Daiki Watanabe',
    japaneseName: '渡辺 大樹',
    role: 'Senior Academic Tools Reviewer',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=240&q=80',
    bio: 'Tokyo University alumnus researching ergonomic design. Daiki evaluates learning tools, highlighter inks, and desk organization for students worldwide.',
  },
};

// Curated 10 In-Depth Articles
export const ARTICLES: Article[] = [
  {
    id: 'art-01',
    slug: 'best-japanese-stationery-brands',
    title: 'Best Japanese Stationery Brands You Should Know',
    japaneseTitle: '知っておくべき日本の文具名門',
    subtitle: 'From centuries-old paper mills to micro-engineering giants: an insider’s guide to Midori, Kokuyo, Pilot, Tombow, and beyond.',
    heroImage: '/src/assets/images/hero_stationery_flatlay_1791468753941.jpg',
    heroImageAlt: 'Flatlay of Japanese stationery essentials on linen cloth with Midori notebook, brass ruler, and fine pen',
    category: 'stationery-brands',
    categoryName: 'Stationery Brands',
    author: AUTHORS.emi,
    publishedAt: 'October 5, 2026',
    updatedAt: 'October 6, 2026',
    readingTime: '8 min read',
    excerpt: 'Japanese stationery brands do not simply manufacture supplies; they treat writing as a tactile discipline. Discover the heritage and signature products of the industry’s most revered makers.',
    featured: true,
    tags: ['Brands', 'Kokuyo', 'Midori', 'Pilot', 'Tombow', 'Heritage'],
    tableOfContents: [
      { id: 'heritage-ethos', title: 'The Ethos of Monozukuri in Stationery' },
      { id: 'midori', title: 'Midori & Designphil: Masters of MD Paper' },
      { id: 'kokuyo', title: 'Kokuyo: The Academic & Office Giant' },
      { id: 'pilot-zebra-uni', title: 'The Big Three: Pilot, Zebra, and Uni Mitsubishi' },
      { id: 'tombow-maruman', title: 'Artistry & Tactile Excellence: Tombow & Maruman' },
      { id: 'buyer-guide', title: 'How to Choose Your Brand Match' },
    ],
    introduction: [
      'To understand Japanese stationery is to understand an obsession with micro-tolerances. While Western manufacturers often prioritize utilitarian volume, Japanese stationery houses operate under the philosophy of monozukuri (ものづくり)—the dedicated art of making things with conscience, precision, and respect for the user.',
      'Whether you are searching for paper that never bleeds through with liquid fountain pen inks or a gel pen with tungsten carbide ball bearings ground to fractions of a micron, Japan’s makers stand unrivaled. In this guide, we break down the definitive brands that define modern Japanese desk culture.'
    ],
    sections: [
      {
        id: 'heritage-ethos',
        heading: 'The Ethos of Monozukuri in Everyday Writing',
        subheading: 'Why Japanese stationery companies treat $2 pens like luxury horology',
        paragraphs: [
          'In Japan, stationery has never been regarded as disposable office debris. The act of writing is culturally bound to calligraphy (shodō), interpersonal etiquette (tegami), and rigorous schooling. When a manufacturer designs a standard classroom notebook, they consider the ambient humidity in Tokyo classrooms, the angle at which a ninth-grader grips an HB lead, and the optical glare of classroom fluorescent lighting.',
          'This attention to detail manifests in innovations the rest of the world now takes for granted: thermal erasable inks, lead-rotating mechanical pencils, dot-grid graph paper, and micro-perforated tear lines.'
        ],
        callout: {
          type: 'quote',
          content: 'Stationery is not just paper and ink; it is the physical bridge where thought meets tangible memory.',
          authorOrSource: 'Emi Tanaka, Editor-in-Chief',
        },
      },
      {
        id: 'midori',
        heading: 'Midori & Designphil: The Masters of Pure MD Paper',
        subheading: 'Minimalism stripped of unnecessary ornament',
        paragraphs: [
          'Founded in 1950, Midori (part of the Designphil group) is legendary among writers and journaling devotees. Rather than masking paper flaws with chemical coatings, Midori developed MD Paper (Midori Diary Paper) through decades of iterative testing that began in the 1960s.',
          'MD Paper features an unbleached, creamy hue that reduces eye fatigue, paired with a subtle tooth that offers acoustic and tactile feedback. When your pen touches MD Paper, you hear a quiet, reassuring rasp that reminds you of your own hand movement. Their notebooks come without stiff hardcovers—wrapped only in glassine paper with exposed cheesecloth thread binding so they lie completely flat at 180 degrees.'
        ],
        specTable: [
          { label: 'Founded', value: '1950 (Tokyo)' },
          { label: 'Signature Paper', value: 'MD Paper (Cream & White, ~80 gsm)' },
          { label: 'Iconic Products', value: 'MD Notebook, Traveler’s Notebook, Brass Stationery' },
          { label: 'Best For', value: 'Fountain pens, contemplative journaling, minimalists' },
        ],
      },
      {
        id: 'kokuyo',
        heading: 'Kokuyo: The Academic & Office Benchmark',
        subheading: 'Over 100 years of functional ergonomics and classroom dominance',
        paragraphs: [
          'If Midori represents poetic contemplation, Kokuyo represents scientific perfection. Founded in 1905, Kokuyo is best known for its ubiquitously loved "Campus" notebook series, first introduced in 1975. In Japan, virtually every university student and salaryman has used a Campus notebook.',
          'Kokuyo’s "Dot-Ruled" paper is a stroke of genius: subtle dots printed along horizontal rules at 5mm intervals allow students to draw precise vertical tables, diagrams, and indentations without the visual clutter of a heavy grid. Beyond paper, Kokuyo designs award-winning scissors, Harinacs stapleless staplers, and modular pencil cases.'
        ],
        highlightList: [
          { item: 'Kokuyo Campus Dot-Ruled Notebook', detail: 'The gold standard for academic organization and neat margin alignment.' },
          { item: 'Kokuyo Jibun Techo', detail: 'A 24-hour vertical time-tracking planner engineered for functional clarity.' },
          { item: 'Kokuyo NeoCritz Case', detail: 'A zippered pen case that transforms into a self-standing desk pen holder.' },
        ],
      },
      {
        id: 'pilot-zebra-uni',
        heading: 'The Big Three: Pilot, Zebra, and Uni Mitsubishi',
        subheading: 'The titanic innovators of fluid dynamics and ink chemistry',
        paragraphs: [
          'The Japanese pen landscape is anchored by three colossal powerhouses, each bringing unmatched technical breakthroughs:',
          'Pilot Corporation (1918) invented the Capless (Vanishing Point) fountain pen in 1963, introduced the world-dominating G2 gel pen, and engineered Frixion thermo-sensitive erasable ink. Pilot’s custom steel and 14k gold nibs are globally renowned for silk-smooth ink delivery.',
          'Zebra Co. (1897) is famed for the Sarasa Clip, a water-based pigment gel pen available in over 50 subtle vintage hues, and the DelGuard mechanical pencil whose dual-spring mechanism prevents lead breakage regardless of vertical or angled pressure.',
          'Uni (Mitsubishi Pencil Company, 1887) crafted the legendary Uni-ball One with formulated bead-pack pigments that sit on the paper surface without penetrating fibers, yielding the darkest, highest-contrast black lines in the industry.'
        ],
      },
      {
        id: 'tombow-maruman',
        heading: 'Tombow & Maruman: Artistry Meets Tactile Luxury',
        subheading: 'Precision correction, markers, and velvety smooth spiral pads',
        paragraphs: [
          'Tombow Pencil Co. (1913) is a staple for both artists and office workers. Their Mono eraser and Mono Graph mechanical pencil are design classics recognized by their blue, white, and black tricolor livery. Tombow Dual Brush Pens remain a cornerstone of modern hand-lettering and bullet journaling.',
          'Maruman (1920) produces the celebrated "Mnemosyne" notebook series, named after the Greek goddess of memory. Mnemosyne paper features an oil-smooth, high-density surface that handles fountain pen ink, brush markers, and highlighters with zero feathering and zero show-through.'
        ],
      },
      {
        id: 'buyer-guide',
        heading: 'How to Choose Your Brand Match',
        subheading: 'Finding the manufacturer aligned with your writing habit',
        paragraphs: [
          'For fountain pen enthusiasts: Begin with Midori or Maruman paired with Pilot Iroshizuku inks.',
          'For students taking rapid notes: Stock up on Kokuyo Campus dot-ruled notebooks and Zebra Sarasa Clip 0.5 pens.',
          'For daily organizers: Choose Hobonichi or Kokuyo Jibun Techo systems.'
        ],
      },
    ],
    conclusion: 'Japanese stationery brands do not view a notebook or a pen as a mere commodity. Each product represents a considered dialogue between human fingertips, ink fluidity, and paper texture. Choosing among them is not just about writing—it is an invitation to write with heightened awareness.',
    keyTakeaways: [
      'Japanese stationery is guided by monozukuri: craftsmanship with conscientious pride.',
      'Midori MD Paper offers unbleached tactile tooth with 180-degree lie-flat binding.',
      'Kokuyo Campus revolutionized school notes with ingenious dot-ruled lines.',
      'Pilot, Zebra, and Uni lead global ink chemistry and break-resistant mechanics.',
      'Mnemosyne by Maruman offers ultra-smooth, business-grade spiral writing pads.',
    ],
    relatedSlugs: [
      'why-japanese-stationery-is-so-popular',
      'best-japanese-notebooks-everyday-use',
      'must-have-japanese-pens-students',
    ],
    metaDescription: 'Explore the best Japanese stationery brands: Midori, Kokuyo, Pilot, Zebra, Uni, Tombow, and Maruman. Discover their history, paper types, and iconic tools.',
    metaKeywords: ['Japanese stationery brands', 'Midori MD', 'Kokuyo Campus', 'Pilot pens', 'Zebra Sarasa', 'Maruman Mnemosyne'],
  },
  {
    id: 'art-02',
    slug: 'must-have-japanese-pens-students',
    title: '10 Must-Have Japanese Pens for Students',
    japaneseTitle: '学生のための厳選日本のペン10選',
    subtitle: 'Ultra-fine tips, bleed-proof pigment inks, and zero-smudge formulas tested for long study sessions and rapid exams.',
    heroImage: '/src/assets/images/japanese_pens_collection_1791468769760.jpg',
    heroImageAlt: 'Array of high precision Japanese pens, needle points, and mechanical pencils on handmade washi',
    category: 'pens',
    categoryName: 'Pens',
    author: AUTHORS.kenji,
    publishedAt: 'October 4, 2026',
    updatedAt: 'October 5, 2026',
    readingTime: '9 min read',
    excerpt: 'Whether you need quick-drying ink for left-handers, ultra-dark pigments that boost recall, or needle tips for tiny margins, here are the 10 greatest Japanese student pens.',
    featured: false,
    editorsPick: true,
    tags: ['Pens', 'Study', 'Gel Pens', 'Students', 'Exam Prep'],
    tableOfContents: [
      { id: 'why-japanese-pens', title: 'Why Japanese Pens Rule the Classroom' },
      { id: 'top-10-list', title: 'The 10 Definitive Student Pens' },
      { id: 'drying-time-matrix', title: 'Drying Time & Smudge Resistance Test' },
      { id: 'left-handed-notes', title: 'Special Recommendations for Left-Handed Writers' },
      { id: 'verdict', title: 'Final Verdict & Daily Carry Recommendations' },
    ],
    introduction: [
      'In high-stakes exams and four-hour university lectures, a pen cannot afford to skip, blotch, or drag like sandpaper. Japanese pen engineers understand this visceral frustration better than anyone in the world.',
      'In Japan, where students write thousands of complex kanji characters containing intricate strokes in small 5mm squares, pen tips must be razor-sharp, ink must flow under zero downward pressure, and drying times must be instantaneous. We tested dozens of models to isolate the ten finest pens every student should keep in their pencil case.'
    ],
    sections: [
      {
        id: 'why-japanese-pens',
        heading: 'Why Japanese Pens Rule the Classroom',
        subheading: 'Micro-precision tips engineered for complex script',
        paragraphs: [
          'Western ballpoints are typically manufactured with 0.7mm or 1.0mm tips. In contrast, Japanese standards focus on 0.38mm, 0.4mm, and 0.5mm tips without sacrificing ink smoothness. Achieving this requires tungsten carbide roller balls machined to sub-micron roundness, housed in precision brass or stainless steel sockets.',
          'Additionally, Japanese pigment inks are formulated with anti-feathering surfactants that anchor immediately to cheap binder paper, preventing feathering and bleed-through.'
        ],
      },
      {
        id: 'top-10-list',
        heading: 'The 10 Definitive Student Pens',
        subheading: 'Curated by ink consistency, ergonomic balance, and refill value',
        paragraphs: [
          '1. Uni-ball One (0.38mm / 0.5mm): Uses revolutionary "bead-pack" pigment ink that stays on the paper surface without sinking. Studies by Ritsumeikan University demonstrated that notes written with its deeper black ink led to higher memory recall.',
          '2. Zebra Sarasa Clip (0.5mm): The gold standard student workhorse. Features a spring-loaded binder clip that fastens onto thick binders, water-resistant gel ink, and smooth, consistent flow in over 30 vibrant shades.',
          '3. Pilot Juice Up (0.4mm): Combines the smoothness of a cone tip with the precision of a needle point through its patented "Synergy Tip". Sleek metal weighted nose provides effortless downward glide.',
          '4. Pentel EnerGel Clena (0.5mm): The fastest-drying gel ink in existence. Ideal for rapid cursive writing and left-handed note-takers who smear standard inks.',
          '5. Tombow Mono Graph Lite (0.5mm): Low-viscosity oil-based ballpoint with an ultra-long needle tip that maximizes paper visibility around the tip.',
          '6. Kokuyo Campus Me Rollerball (0.4mm): Designed specifically to coordinate with Kokuyo Campus paper lines, offering zero bleed.',
          '7. Pilot Frixion Point Knock 04 (0.4mm): Thermo-sensitive erasable ink with clean friction eraser. Invaluable for math problem sets and editable study schedules.',
          '8. Uni Jetstream (0.5mm): The king of hybrid ballpoints. Blends the speed of oil ink with the low-resistance fluidity of gel.',
          '9. Zebra bLen (0.5mm): Engineered in partnership with Nendo design studio to eliminate internal vibrations, reducing hand fatigue during exams.',
          '10. Pilot Kakuno Fountain Pen (Fine): The friendliest entry-level fountain pen with a smiling stainless steel nib, perfect for practicing stroke weight.'
        ],
      },
      {
        id: 'drying-time-matrix',
        heading: 'Drying Time & Smudge Resistance Test',
        subheading: 'Laboratory test on standard 70 gsm copy paper and 75 gsm Campus paper',
        paragraphs: [
          'We subjected our top choices to immediate swipe tests at 1 second, 3 seconds, and 5 seconds following a rapid sentence stroke.'
        ],
        specTable: [
          { label: 'Pentel EnerGel 0.5', value: 'Dry in 0.8 sec (Zero smudge)' },
          { label: 'Uni Jetstream 0.5', value: 'Dry in 1.1 sec (Zero smudge)' },
          { label: 'Zebra Sarasa Clip 0.5', value: 'Dry in 2.9 sec (Minor trace at 1s)' },
          { label: 'Uni-ball One 0.38', value: 'Dry in 2.2 sec (Excellent crispness)' },
          { label: 'Pilot Juice Up 0.4', value: 'Dry in 1.8 sec (Near-instant fix)' },
        ],
      },
      {
        id: 'left-handed-notes',
        heading: 'Special Recommendations for Left-Handed Writers',
        subheading: 'Pushing rather than pulling the nib across paper',
        paragraphs: [
          'Because left-handed writers push the pen tip into the paper grain and drag their palm across fresh ink, standard rollerballs cause severe smudging. For lefties, Pentel EnerGel and Uni Jetstream are non-negotiable essentials: both dry within one second and resist paper-gouging.'
        ],
      },
      {
        id: 'verdict',
        heading: 'Final Verdict & Daily Carry Recommendations',
        subheading: 'The winning student pencil case trio',
        paragraphs: [
          'For daily lecture notes: Uni-ball One 0.38mm for supreme contrast and crisp margins.',
          'For rapid essay exams: Pentel EnerGel 0.5mm for blisteringly fast ink dry time.',
          'For diagrams and math: Pilot Juice Up 0.4mm for needle-point clarity.'
        ],
      },
    ],
    conclusion: 'Great pens will not write your thesis for you, but they remove every ounce of physical resistance between your thoughts and the page. Investing in the right Japanese pen is the most cost-effective study upgrade a student can make.',
    keyTakeaways: [
      'Uni-ball One delivers high-contrast pigment that aids academic memory retention.',
      'Pentel EnerGel is the fastest-drying gel pen, ideal for left-handed writers.',
      'Pilot Juice Up’s Synergy Tip merges needle accuracy with cone sturdiness.',
      'Zebra bLen dampens micro-vibrations to prevent long-session wrist strain.',
    ],
    relatedSlugs: [
      'japanese-gel-pens-vs-ballpoint-pens',
      'best-japanese-highlighters-for-studying',
      'how-to-build-perfect-japanese-stationery-kit',
    ],
    metaDescription: 'Discover the top 10 Japanese pens for students: Uni-ball One, Zebra Sarasa, Pilot Juice Up, Pentel EnerGel, and more. Tested for ink flow and smudge speed.',
    metaKeywords: ['Japanese pens for students', 'best gel pens', 'Uni-ball One', 'Zebra Sarasa', 'Pentel EnerGel', 'Pilot Juice Up'],
  },
  {
    id: 'art-03',
    slug: 'art-of-japanese-journaling',
    title: 'The Art of Japanese Journaling',
    japaneseTitle: '日本の手帳術と日々の記録',
    subtitle: 'Embracing Techo culture, wabi-sabi memory keeping, and mindful daily rituals that ground modern life.',
    heroImage: '/src/assets/images/japanese_journaling_desk_1791468786611.jpg',
    heroImageAlt: 'Open Hobonichi Techo planner on wooden desk with green tea, ink stamps, and Japanese calligraphy',
    category: 'journaling',
    categoryName: 'Journaling',
    author: AUTHORS.aoi,
    publishedAt: 'October 3, 2026',
    updatedAt: 'October 4, 2026',
    readingTime: '7 min read',
    excerpt: 'In Japan, a planner is not merely a task list; it is a "techo"—a companion for one’s life. Discover how intentional journaling creates quiet space in a hurried digital world.',
    featured: false,
    editorsPick: false,
    tags: ['Journaling', 'Techo', 'Hobonichi', 'Mindfulness', 'Wabi-Sabi'],
    tableOfContents: [
      { id: 'techo-philosophy', title: 'The Concept of Techo (手帳) as Life Partner' },
      { id: 'wabi-sabi-pages', title: 'Wabi-Sabi: Letting Go of Page Perfection' },
      { id: 'tools-of-ritual', title: 'The Three Physical Tools of the Daily Ritual' },
      { id: 'journaling-prompts', title: 'Japanese Prompts: Small Moments (Ichigo Ichie)' },
      { id: 'evening-reflection', title: 'Building a 10-Minute Evening Habit' },
    ],
    introduction: [
      'In Western productivity culture, planners are often treated as battle plans: lists of targets to conquer, checkboxes to vanquish, and calendar blocks to optimize. In Japan, however, the planner—known as a techo (手帳)—carries an entirely different emotional resonance.',
      'A techo is viewed as an intimate life companion. It is a quiet sanctuary where you preserve mundane moments: the scent of osmanthus flowers on your morning walk, a café receipt from a memorable conversation, a ticket stub, or a line of poetry. Here is how to embrace this transformative practice.'
    ],
    sections: [
      {
        id: 'techo-philosophy',
        heading: 'The Concept of Techo (手帳) as a Life Partner',
        subheading: 'A sacred mirror of your days rather than a guilt machine',
        paragraphs: [
          'The Japanese term "techo" combines hand (te) and book (cho). It implies something so compact and tactile that it belongs in your palm throughout the day. Makers like Hobonichi (creators of the legendary Techo Cousin and Original) refer to their notebooks as "LIFE books".',
          'Unlike rigid digital calendar notifications that constantly demand immediate reaction, an analog techo asks you to pause, feel the texture of ultra-thin paper, and reflect on the person you were today.'
        ],
        callout: {
          type: 'quote',
          content: 'A blank day in your journal is not a failure of productivity; it is simply a quiet day that passed in peace.',
          authorOrSource: 'Aoi Moriyama, Planner Specialist',
        },
      },
      {
        id: 'wabi-sabi-pages',
        heading: 'Wabi-Sabi: Letting Go of Page Perfection',
        subheading: 'Overcoming the anxiety of the first pristine page',
        paragraphs: [
          'Social media has popularized hyper-curated, immaculate journal spreads adorned with complex calligraphy and flawless paintings. For many beginners, this creates paralysis: the fear of "ruining" an expensive Japanese notebook with sloppy handwriting or an ink smudge.',
          'The Japanese aesthetic of wabi-sabi (侘寂) celebrates imperfection, impermanence, and the organic marks of time. An uneven date stamp, a crossed-out word, or coffee splatter does not diminish a journal; it authenticates it as a lived human document.'
        ],
      },
      {
        id: 'tools-of-ritual',
        heading: 'The Three Physical Tools of the Daily Ritual',
        subheading: 'Simplicity over cluttered desks',
        paragraphs: [
          '1. A dedicated notebook with fountain-pen friendly paper: Tomoe River Sanzen paper or Midori MD Paper provides the tactile friction that makes writing meditative.',
          '2. One signature writing instrument: Whether a brass Kaweco or a classic Pilot Kakuno, choose an instrument with balance and warmth in your hand.',
          '3. Meaningful ephemera: A roll of Japanese washi tape (made with traditional mulberry fibers that peel without tearing delicate paper) and an oil-based ink pad for rubber stamps.'
        ],
      },
      {
        id: 'journaling-prompts',
        heading: 'Japanese Prompts: Small Moments (Ichigo Ichie)',
        subheading: 'Reflective prompts to break the blank page',
        paragraphs: [
          'Instead of asking "What did I accomplish today?", try framing your daily reflection through classical Japanese concepts:'
        ],
        highlightList: [
          { item: 'Ichigo Ichie (一期一会)', detail: 'What was a singular moment or encounter today that will never happen again in this exact way?' },
          { item: 'Komorabi (木漏れ日)', detail: 'Where did you notice light filtering into your day, literally or emotionally?' },
          { item: 'Kansha (感謝)', detail: 'What tiny, overlooked physical object supported your comfort today?' },
        ],
      },
      {
        id: 'evening-reflection',
        heading: 'Building a 10-Minute Evening Habit',
        subheading: 'How to transition from screen blue light to paper calm',
        paragraphs: [
          'Dedicate ten minutes before sleep. Switch off your phone, steep a cup of hojicha or chamomile, and open your techo. Write just three sentences. The objective is not documentation of volume, but the grounding sensation of closing your day with intention.'
        ],
      },
    ],
    conclusion: 'When you look back on five years of Japanese journaling, you do not recall deadlines or calendar appointments. You recall who you were, what made you smile, and the quiet beauty of ordinary life.',
    keyTakeaways: [
      'A Japanese techo is a life companion, not just a task manager.',
      'Wabi-sabi invites you to embrace ink blotches and imperfect handwriting.',
      'Tomoe River paper allows heavy ink and watercolors without paper bulk.',
      'Three small daily sentences are enough to build a lifelong memory archive.',
    ],
    relatedSlugs: [
      'beginners-guide-japanese-planner-culture',
      'best-japanese-notebooks-everyday-use',
      'why-japanese-stationery-is-so-popular',
    ],
    metaDescription: 'Discover the art of Japanese journaling: Techo culture, Hobonichi rituals, wabi-sabi philosophy, and mindful memory keeping prompts.',
    metaKeywords: ['Japanese journaling', 'techo culture', 'Hobonichi Techo', 'wabi-sabi journal', 'analog mindfulness'],
  },
  {
    id: 'art-04',
    slug: 'why-japanese-stationery-is-so-popular',
    title: 'Why Japanese Stationery Is So Popular',
    japaneseTitle: 'なぜ日本の文房具は世界中で愛されるのか',
    subtitle: 'From ink surface tension to tactile sound design: the engineering secrets and cultural values driving a global obsession.',
    heroImage: '/src/assets/images/hero_stationery_flatlay_1791468753941.jpg',
    heroImageAlt: 'Japanese stationery collection with precision notebooks, pens, and paper tools',
    category: 'stationery-brands',
    categoryName: 'Stationery Brands',
    author: AUTHORS.kenji,
    publishedAt: 'October 2, 2026',
    updatedAt: 'October 3, 2026',
    readingTime: '8 min read',
    excerpt: 'Why do stationery lovers across North America, Europe, and Asia hoard Japanese notebooks and pens? The answer lies in microscopic mechanical engineering and cultural respect for tools.',
    featured: false,
    editorsPick: true,
    tags: ['Culture', 'Engineering', 'Innovation', 'Design Philosophy'],
    tableOfContents: [
      { id: 'obsession-with-details', title: 'Obsession with the Microscopic Detail' },
      { id: 'shodo-legacy', title: 'The Calligraphic Legacy: Sensitivity to Line' },
      { id: 'democratic-pricing', title: 'Democratic Luxury: $3 Engineering Miracles' },
      { id: 'sensory-design', title: 'Sensory Design: Sound, Resistance, and Weight' },
      { id: 'global-renaissance', title: 'Why Analog Survives the Digital Age' },
    ],
    introduction: [
      'Across international stationery forums, YouTube desk setup videos, and boutique writing shops, one geographic origin commands universal reverence: Made in Japan.',
      'What transforms an inexpensive plastic ballpoint or a soft-bound notebook into an object of worldwide adoration? It is neither hype nor minimalist marketing. It is the convergence of centuries of papermaking heritage, ruthless mechanical tolerances, and a cultural reverence for the tools of thought.'
    ],
    sections: [
      {
        id: 'obsession-with-details',
        heading: 'Obsession with the Microscopic Detail',
        subheading: 'Solving problems the user never even realized existed',
        paragraphs: [
          'Consider the Uni Kuru Toga mechanical pencil. When most people write with a pencil, writing on one side angles the graphite down into a chisel edge, resulting in thick, smudged lines. Uni engineers spent years developing a internal miniature ratchet gear mechanism that rotates the lead by 9 degrees every time the pencil lifts from the page, keeping the point continuously sharp.',
          'Consider the Tombow Mono One eraser: it includes an integrated rubber ring to dampen the mechanical shock of erasing on thin paper. This refusal to settle for "good enough" defines Japanese product design.'
        ],
      },
      {
        id: 'shodo-legacy',
        heading: 'The Calligraphic Legacy: Sensitivity to Line',
        subheading: 'Why line variation and paper resistance matter culturally',
        paragraphs: [
          'In Japanese calligraphy (shodō), every character is judged by tome (stop), hane (flick), and harai (sweep). Children learn early that line weight carries emotion and intention. Consequently, Japanese consumers notice the micro-scratch of a dry nib or the uneven pool of ink in a way that users raised on broad Western ballpoints rarely do.',
          'To satisfy this discerning domestic audience, Japanese manufacturers must maintain testing standards far beyond global baselines.'
        ],
      },
      {
        id: 'democratic-pricing',
        heading: 'Democratic Luxury: $3 Engineering Miracles',
        subheading: 'High quality accessible to schoolkids, not just elite collectors',
        paragraphs: [
          'Unlike European heritage brands that often reserve exquisite craftsmanship for $400 fountain pens and calfskin folios, Japanese manufacturers bring aerospace-grade innovation to products priced under 300 yen ($2–$3 USD).',
          'A student with spare pocket change can walk into an Itoya, Loft, or neighbourhood convenience store in Tokyo and purchase an ink flow system that outperforms luxury desk pens.'
        ],
        specTable: [
          { label: 'Uni Kuru Toga Engine', value: 'Internal 3-gear ratchet rotating lead at 9° increments' },
          { label: 'Pilot Frixion Thermo-Ink', value: 'Micro-capsule leuco dyes turning clear at 60°C' },
          { label: 'Zebra DelGuard Springs', value: 'Dual shock-absorbing springs guarding against vertical & diagonal pressure' },
          { label: 'Kokuyo Campus Dot Lines', value: 'Equidistant 5mm micro-dots printed to exact optical density' },
        ],
      },
      {
        id: 'sensory-design',
        heading: 'Sensory Design: Sound, Resistance, and Weight',
        subheading: 'Haptic feedback crafted for human comfort',
        paragraphs: [
          'Japanese stationery houses employ psycho-acoustic and ergonomic researchers. The click of a Pilot ballpoint is engineered to produce a crisp, satisfying snap without high-pitched harshness. Midori tests paper tooth so the sound of your pen resembles the whisper of footsteps on dry leaves.'
        ],
      },
      {
        id: 'global-renaissance',
        heading: 'Why Analog Survives the Digital Age',
        subheading: 'The need for tangible friction in an untouchable world',
        paragraphs: [
          'In an era dominated by smooth glass screens and disposable digital notifications, Japanese stationery offers what screens cannot: weight, grain, permanence, and human imperfection. It is an intentional antidote to screen fatigue.'
        ],
      },
    ],
    conclusion: 'Japanese stationery is beloved because it treats the writer with profound dignity. When you hold an instrument crafted with such care, it honors the thoughts you choose to commit to the page.',
    keyTakeaways: [
      'Innovative mechanisms solve subtle annoyances (lead rotation, ink vibration, paper glare).',
      'Calligraphic cultural history creates high consumer standards for line variation.',
      'Japanese craftsmanship is democratic, providing luxury precision at everyday prices.',
      'Tactile feedback provides a grounding mental relief from digital screen exhaustion.',
    ],
    relatedSlugs: [
      'best-japanese-stationery-brands',
      'history-evolution-japanese-stationery',
      'art-of-japanese-journaling',
    ],
    metaDescription: 'Why is Japanese stationery so popular? Discover the microscopic engineering, calligraphic culture, and sensory design that make Japan’s pens and notebooks unmatched.',
    metaKeywords: ['why Japanese stationery popular', 'monozukuri', 'Uni Kuru Toga', 'stationery engineering', 'Japanese stationery culture'],
  },
  {
    id: 'art-05',
    slug: 'best-japanese-notebooks-everyday-use',
    title: 'Best Japanese Notebooks for Everyday Use',
    japaneseTitle: '日常使いに最適な日本のノート徹底比較',
    subtitle: 'From Midori MD and Kokuyo Campus to Maruman Mnemosyne and Stalogy 365: a definitive paper benchmark.',
    heroImage: '/src/assets/images/notebooks_paper_texture_1791468801881.jpg',
    heroImageAlt: 'Stack of premium Japanese notebooks with thread-sewn spines and cream paper edges',
    category: 'notebooks',
    categoryName: 'Notebooks',
    author: AUTHORS.emi,
    publishedAt: 'October 1, 2026',
    updatedAt: 'October 2, 2026',
    readingTime: '10 min read',
    excerpt: 'A comprehensive benchmark of Japan’s most celebrated notebooks: bleed resistance, tooth, binding flexibility, and paper weight tested across gel, ballpoint, and fountain pen inks.',
    featured: false,
    editorsPick: false,
    tags: ['Notebooks', 'Midori', 'Campus', 'Mnemosyne', 'Paper Guide', 'Tomoe River'],
    tableOfContents: [
      { id: 'eval-criteria', title: 'Our Paper Testing Methodology' },
      { id: 'midori-md', title: '1. Midori MD Notebook: The Tactile Purist' },
      { id: 'kokuyo-campus', title: '2. Kokuyo Campus: The Academic Workhorse' },
      { id: 'maruman-mnemosyne', title: '3. Maruman Mnemosyne: The Executive Performer' },
      { id: 'stalogy-365', title: '4. Stalogy 365 Days: The Ultra-Lightweight Essential' },
      { id: 'life-noble', title: '5. Life Stationery Noble: Classical Silk Smoothness' },
      { id: 'benchmark-matrix', title: 'Head-to-Head Comparison Matrix' },
      { id: 'recommendation', title: 'Which Notebook Belongs on Your Desk?' },
    ],
    introduction: [
      'In a world where generic notebooks feather with the slightest hint of ink and refuse to lie open without a paperweight, Japanese notebooks are a revelation. Japanese paper mills approach paper creation like viniculture—obsessing over cellulose fiber length, water purity, sizing chemistry, and calendering roll pressure.',
      'We spent three months testing five of the most celebrated Japanese everyday notebooks across five ink categories. Here are our findings.'
    ],
    sections: [
      {
        id: 'eval-criteria',
        heading: 'Our Paper Testing Methodology',
        subheading: 'Tested under strict controlled conditions for real-world writing',
        paragraphs: [
          'We evaluated each notebook across four essential criteria: Feathering Resistance (does wet ink spread across fibers?), Bleed-Through (does ink soak into the reverse side?), Ghosting / Show-Through (is writing visible through the sheet?), and Binding Lie-Flat Ability (does the book open flat without hand pressure?).'
        ],
      },
      {
        id: 'midori-md',
        heading: '1. Midori MD Notebook: The Tactile Purist',
        subheading: 'Raw elegance, cheesecloth spine, and unforgettable tooth',
        paragraphs: [
          'The Midori MD Notebook has no stiff cardboard cover. It arrives clad in delicate semi-translucent glassine paper, showcasing its thread-stitched spine. Its cream paper is specifically tuned for fountain pens, offering a subtle tooth that lets you feel the exact friction of your nib.',
          'Bleed resistance is virtually bulletproof, even with broad, wet calligraphy stubs. Ghosting is very modest despite its moderate 80 gsm weight.'
        ],
      },
      {
        id: 'kokuyo-campus',
        heading: '2. Kokuyo Campus: The Academic Workhorse',
        subheading: 'Affordable perfection with patented wireless adhesive binding',
        paragraphs: [
          'Kokuyo uses a special wireless spine glue that allows pages to open flat without loose sheets falling out. Its bright white paper provides crisp color fidelity for gel pens and highlighters. The 5mm dot-ruled spacing is optimal for lecture notes, math matrices, and sketches.'
        ],
      },
      {
        id: 'maruman-mnemosyne',
        heading: '3. Maruman Mnemosyne: The Executive Performer',
        subheading: 'Black covers, micro-perforations, and buttery smoothness',
        paragraphs: [
          'Named after the mother of the Muses, Mnemosyne features heavyweight 80 gsm paper with an extraordinarily smooth finish. Fountain pens glide effortlessly, and micro-perforations allow clean sheet removal for scans and filing. Twin-wire coil binding ensures pages flip completely around 360 degrees.'
        ],
      },
      {
        id: 'stalogy-365',
        heading: '4. Stalogy 365 Days: The Ultra-Lightweight Essential',
        subheading: 'Faint gray 5mm grid printed on Bible-thin bleed-resistant sheets',
        paragraphs: [
          'Stalogy 365 uses ultra-thin paper reminiscent of Tomoe River. Despite containing 368 pages, the notebook is as slim as standard 100-page books. Subtle timeline markings along the left edge allow you to track hours without rigid layout constraints.'
        ],
      },
      {
        id: 'life-noble',
        heading: '5. Life Stationery Noble: Classical Silk Smoothness',
        subheading: 'Handcrafted in downtown Tokyo since 1946',
        paragraphs: [
          'Life Noble notebooks use "L-Writing Paper"—a premium, laid-finish paper with visible watermark chain lines that feels like heavy cream silk. It is stitched by hand in small Tokyo ateliers and resists the wettest inks without a whisper of feathering.'
        ],
      },
      {
        id: 'benchmark-matrix',
        heading: 'Head-to-Head Comparison Matrix',
        subheading: 'Direct ratings out of 5 stars based on testing logs',
        paragraphs: [
          'Review the performance metrics below to match your preferred pen type:'
        ],
        specTable: [
          { label: 'Midori MD (A5)', value: 'Lie-Flat: ★★★★★ | Bleed Control: ★★★★★ | Fountain Pen: ★★★★★' },
          { label: 'Kokuyo Campus (Semi-B5)', value: 'Lie-Flat: ★★★★☆ | Bleed Control: ★★★★☆ | Gel Pens: ★★★★★' },
          { label: 'Maruman Mnemosyne (A5)', value: 'Lie-Flat: ★★★★★ | Bleed Control: ★★★★★ | Rollerball: ★★★★★' },
          { label: 'Stalogy 365 (A5)', value: 'Lie-Flat: ★★★★★ | Bleed Control: ★★★★☆ | Portability: ★★★★★' },
          { label: 'Life Noble (A5)', value: 'Lie-Flat: ★★★★☆ | Bleed Control: ★★★★★ | Tactile Luxury: ★★★★★' },
        ],
      },
      {
        id: 'recommendation',
        heading: 'Which Notebook Belongs on Your Desk?',
        subheading: 'Our definitive buying advice',
        paragraphs: [
          'Choose Midori MD for fountain pen journaling and introspective writing.',
          'Choose Kokuyo Campus for high-speed student lecture note-taking.',
          'Choose Maruman Mnemosyne for meetings, project roadmaps, and sketches.',
          'Choose Stalogy 365 for a daily bullet journal or lightweight traveler carry.'
        ],
      },
    ],
    conclusion: 'There is no single "best" Japanese notebook—only the notebook whose paper texture sings in harmony with your chosen pen. Try a sample of each, and you will never return to supermarket paper again.',
    keyTakeaways: [
      'Midori MD paper provides unmatched acoustic tooth and true 180° lie-flat binding.',
      'Kokuyo Campus is the most cost-effective gel-pen friendly student notebook.',
      'Maruman Mnemosyne provides executive wire-bound silky smooth paper.',
      'Stalogy 365 packs a year’s worth of grid notes into an ultra-slim spine.',
    ],
    relatedSlugs: [
      'best-japanese-stationery-brands',
      'art-of-japanese-journaling',
      'beginners-guide-japanese-planner-culture',
    ],
    metaDescription: 'Compare the best Japanese notebooks: Midori MD, Kokuyo Campus, Maruman Mnemosyne, Stalogy 365, and Life Noble. Tested for fountain pens, bleed, and lie-flat binding.',
    metaKeywords: ['best Japanese notebooks', 'Midori MD review', 'Kokuyo Campus vs Mnemosyne', 'Stalogy 365', 'fountain pen friendly paper'],
  },
  {
    id: 'art-06',
    slug: 'japanese-gel-pens-vs-ballpoint-pens',
    title: 'Japanese Gel Pens vs Ballpoint Pens',
    japaneseTitle: 'ゲルインク対油性ボールペン徹底比較',
    subtitle: 'Ink viscosity, surface tension, drying time, and paper interaction: how to choose your ultimate writing instrument.',
    heroImage: '/src/assets/images/japanese_pens_collection_1791468769760.jpg',
    heroImageAlt: 'Fine Japanese pens side by side showing differences in tips and ink reservoirs',
    category: 'pens',
    categoryName: 'Pens',
    author: AUTHORS.kenji,
    publishedAt: 'September 28, 2026',
    updatedAt: 'September 29, 2026',
    readingTime: '7 min read',
    excerpt: 'Gel ink or low-viscosity emulsion ballpoint? We break down the fluid dynamics, drying speeds, archive longevity, and ergonomic differences to settle the debate.',
    featured: false,
    tags: ['Pens', 'Gel Pens', 'Ballpoint Pens', 'Ink Chemistry', 'Ergonomics'],
    tableOfContents: [
      { id: 'fluid-chemistry', title: 'The Underlying Chemistry of Japanese Inks' },
      { id: 'gel-pros-cons', title: 'Gel Pens: Vibrant Pigment and Effortless Flow' },
      { id: 'ballpoint-pros-cons', title: 'Hybrid Ballpoints: Speed, Longevity, and Zero Smear' },
      { id: 'paper-pairing', title: 'How Paper Choice Dictates Your Pen Decision' },
      { id: 'decision-guide', title: 'Quick Decision Checklist' },
    ],
    introduction: [
      'Walk into any stationery store in Osaka or Tokyo, and you will be confronted with an entire aisle dedicated solely to black pens. To the uninitiated, they might all appear similar. But beneath the plastic casing lies an ongoing civil war between two distinct ink philosophies: Gel Ink (水性ゲル) and Hybrid Oil-Based Ballpoint (低粘度油性).',
      'Understanding how these two formulations interact with paper fibers is the key to discovering your personal writing nirvana.'
    ],
    sections: [
      {
        id: 'fluid-chemistry',
        heading: 'The Underlying Chemistry of Japanese Inks',
        subheading: 'Thixotropy vs. low-viscosity emulsion formulas',
        paragraphs: [
          'Gel pens rely on thixotropic fluids: when at rest inside the reservoir, the ink behaves as a thick gel that cannot leak. However, as the tungsten carbide ball rotates against paper, the shear stress instantly liquifies the gel into a smooth, watery fluid. Once transferred to paper, it quickly returns to a stable gel state.',
          'Traditional Western ballpoints use paste-like oil inks that require heavy hand pressure to transfer. In 2006, Uni revolutionized this by launching the Jetstream hybrid ink—dissolving ultra-low viscosity solvents into the oil base to create an ink that flows under zero downward pressure while retaining the water-resistance and rapid drying of oil.'
        ],
      },
      {
        id: 'gel-pros-cons',
        heading: 'Gel Pens: Vibrant Pigment and Effortless Flow',
        subheading: 'Why writers fall in love with deep, saturated lines',
        paragraphs: [
          'Advantages: Unrivaled color saturation, crisp line edges, zero skipped strokes, and a rich black line that pops off cream paper. The Uni-ball One and Zebra Sarasa Clip showcase gel ink at its peak.',
          'Disadvantages: Longer drying times (typically 2 to 4 seconds), higher consumption rate (cartridges run dry faster), and potential smudging if highlighted too quickly.'
        ],
      },
      {
        id: 'ballpoint-pros-cons',
        heading: 'Hybrid Ballpoints: Speed, Longevity, and Zero Smear',
        subheading: 'The champion of carbon copies, official forms, and rapid signatures',
        paragraphs: [
          'Advantages: Near-instantaneous drying (under 1 second), complete water resistance, twice the write-out distance per refill, and zero bleed-through even on the thinnest Bible or newspaper sheets.',
          'Disadvantages: Lines can appear slightly more charcoal-gray rather than obsidian black, and very slick papers can occasionally cause minor railroading if held at steep angles.'
        ],
        specTable: [
          { label: 'Uni Jetstream (Hybrid Oil)', value: 'Drying Time: < 0.5s | Water Resistance: 100% | Write-out: ~900 meters' },
          { label: 'Pilot Acroball (Hybrid Oil)', value: 'Drying Time: < 0.8s | Water Resistance: 100% | Write-out: ~850 meters' },
          { label: 'Zebra Sarasa Clip (Water Gel)', value: 'Drying Time: 2–3s | Water Resistance: High (Pigment) | Write-out: ~450 meters' },
          { label: 'Uni-ball One (Pigment Gel)', value: 'Drying Time: 1.5–2s | Water Resistance: High (Bead-pack) | Write-out: ~400 meters' },
        ],
      },
      {
        id: 'paper-pairing',
        heading: 'How Paper Choice Dictates Your Pen Decision',
        subheading: 'Matching viscosity to coating and sizing',
        paragraphs: [
          'If you write on Tomoe River paper or glossier coated paper: choose hybrid ballpoints (Uni Jetstream or Pilot Acroball) to prevent long drying delays.',
          'If you write on toothy uncoated paper like Midori MD or Kokuyo Campus: choose gel pens (Sarasa Clip or Juice Up) to fully appreciate their rich, saturated line weight.'
        ],
      },
      {
        id: 'decision-guide',
        heading: 'Quick Decision Checklist',
        subheading: 'Pick the right tool for the task at hand',
        paragraphs: [
          'Choose Gel Pens if: You crave high contrast, keep a contemplative journal, love colored inks, and don’t drag your hand across fresh writing.',
          'Choose Hybrid Ballpoints if: You are left-handed, take rapid meeting minutes, sign official receipts, or use ultra-thin planner paper.'
        ],
      },
    ],
    conclusion: 'There is no objective winner between gel and ballpoint—only the right ink for the right paper. Most seasoned Japanese stationery enthusiasts keep both in their daily kit for different tasks.',
    keyTakeaways: [
      'Gel pens utilize shear-thinning thixotropic ink for saturated, dark lines.',
      'Japanese hybrid ballpoints (Jetstream, Acroball) deliver instantaneous drying.',
      'Left-handers generally benefit from low-viscosity hybrid ballpoints.',
      'Coated or Tomoe River papers pair best with hybrid ballpoint inks.',
    ],
    relatedSlugs: [
      'must-have-japanese-pens-students',
      'best-japanese-notebooks-everyday-use',
      'how-to-build-perfect-japanese-stationery-kit',
    ],
    metaDescription: 'Japanese gel pens vs ballpoint pens explained: ink chemistry, drying speeds, smudge resistance, and which one fits your notebook paper best.',
    metaKeywords: ['gel pens vs ballpoint', 'Uni Jetstream vs Sarasa', 'hybrid ballpoint', 'Japanese ink chemistry'],
  },
  {
    id: 'art-07',
    slug: 'beginners-guide-japanese-planner-culture',
    title: 'A Beginner’s Guide to Japanese Planner Culture',
    japaneseTitle: '初心者のための日本手帳文化入門',
    subtitle: 'Navigating Hobonichi, Jibun Techo, Traveler’s Notebook, and Nolty to design your ideal analog life system.',
    heroImage: '/src/assets/images/japanese_journaling_desk_1791468786611.jpg',
    heroImageAlt: 'Detailed desk view of Hobonichi Techo planner with timestamps, grid layout, and bookmarks',
    category: 'planners',
    categoryName: 'Planners',
    author: AUTHORS.aoi,
    publishedAt: 'September 25, 2026',
    updatedAt: 'September 26, 2026',
    readingTime: '9 min read',
    excerpt: 'Why does Japan celebrate an annual "Techo Season" every autumn? Learn the distinct architectures of Hobonichi, Jibun Techo, and Traveler’s Notebook, and find the planner for your year.',
    featured: false,
    tags: ['Planners', 'Hobonichi', 'Jibun Techo', 'Travelers Notebook', 'Productivity'],
    tableOfContents: [
      { id: 'techo-season', title: 'The Phenomenon of "Techo Season" (手帳シーズン)' },
      { id: 'big-three-systems', title: 'The Big Three Japanese Planner Philosophies' },
      { id: 'hobonichi', title: '1. Hobonichi Techo: The Creative Life Log' },
      { id: 'jibun-techo', title: '2. Kokuyo Jibun Techo: The 24-Hour Chrono Tracker' },
      { id: 'travelers-notebook', title: '3. Traveler’s Notebook: Modular Freedom' },
      { id: 'grid-vs-horizontal', title: 'Grid Paper & Subtle Design Details' },
      { id: 'finding-your-system', title: 'How to Choose Your System' },
    ],
    introduction: [
      'Every year in early September, Japanese bookstores, department stores, and stationery boutiques transform. Massive retail floor areas are cleared to make room for hundreds of thousands of planners. This ritual is known as Techo Season (手帳シーズン).',
      'For the Japanese, buying a planner for the upcoming year is not an afterthought; it is an introspective ritual where one chooses how they want to experience time. Let us demystify the most revered Japanese planner systems.'
    ],
    sections: [
      {
        id: 'techo-season',
        heading: 'The Phenomenon of "Techo Season" (手帳シーズン)',
        subheading: 'When an entire nation reflects on how to shape the coming year',
        paragraphs: [
          'While the rest of the world often treats planners as uniform January-to-December agendas, Japan produces books aligned with the April school and fiscal year, as well as the standard January calendar. Communities gather in Tokyo and Osaka for "Techo Kaigi" (planner conferences) to showcase cover pairings, layouts, and ink swatches.'
        ],
      },
      {
        id: 'big-three-systems',
        heading: 'The Big Three Japanese Planner Philosophies',
        subheading: 'Three radically different approaches to managing your days',
        paragraphs: [
          'Different people relate to time differently. Some crave unstructured creative space for sketches and reflections; others need a strict 24-hour vertical timeline; others want modular leather passports they can customize as their lifestyle shifts.'
        ],
      },
      {
        id: 'hobonichi',
        heading: '1. Hobonichi Techo: The Creative Life Log',
        subheading: 'One page per day on legendary Tomoe River paper',
        paragraphs: [
          'Created by copywriter Shigesato Itoi in 2001, the Hobonichi Techo is the undisputed global icon of Japanese planners. Available in A6 (Original/Planner) and A5 (Cousin) formats, it grants a full dedicated page to every single day of the year.',
          'Its pages are printed on feather-light Tomoe River paper with a subtle 3.7mm grid and daily curated quotes. You can write your schedule, paste restaurant labels, paint watercolors, or leave days minimal without feeling restricted.'
        ],
      },
      {
        id: 'jibun-techo',
        heading: '2. Kokuyo Jibun Techo: The 24-Hour Chrono Tracker',
        subheading: 'Designed for people who want clarity over their hours',
        paragraphs: [
          'Designed by creator Keiko Sakuma, "Jibun" means "oneself". The Jibun Techo is built around a vertical weekly layout spanning all 24 hours of the day (including the night hours), complete with sunrise/sunset markers, mood trackers, and weather icons.',
          'Printed on Kokuyo’s proprietary THIN Paper, it resists ghosting while keeping the book astonishingly light.'
        ],
      },
      {
        id: 'travelers-notebook',
        heading: '3. Traveler’s Notebook: Modular Freedom',
        subheading: 'Vegetable-tanned leather from Chiang Mai with Japanese paper refills',
        paragraphs: [
          'Produced by Designphil’s Traveler’s Company, this system consists of a rugged leather cover with an elastic band mechanism. You insert up to three or four specialized booklets: monthly calendars, weekly vertical schedules, blank sketch paper, or kraft folders.',
          'It ages with you over decades, accumulating scuffs and patina that tell your personal travel and life story.'
        ],
        specTable: [
          { label: 'Hobonichi Techo', value: 'Format: 1 Page Per Day | Paper: Tomoe River Sanzen | Best: Creative journalers' },
          { label: 'Jibun Techo', value: 'Format: 24h Vertical Weekly | Paper: Kokuyo THIN Paper | Best: Habit trackers & timeblockers' },
          { label: 'Traveler’s Notebook', value: 'Format: Modular booklet inserts | Paper: MD Paper | Best: Nomads & minimalist travelers' },
          { label: 'Nolty (JMAM)', value: 'Format: Classic horizontal weekly | Paper: Nolty proprietary | Best: Business professionals' },
        ],
      },
      {
        id: 'grid-vs-horizontal',
        heading: 'Grid Paper & Subtle Design Details',
        subheading: 'Why the Japanese grid format outclasses lined paper',
        paragraphs: [
          'Notice that almost every Japanese planner utilizes a 3.5mm to 4mm grid rather than horizontal lines. A fine grid guides handwriting without confining it, enabling you to switch fluidly between Japanese kanji, Western alphabet, flowcharts, and sketches.'
        ],
      },
      {
        id: 'finding-your-system',
        heading: 'How to Choose Your System',
        subheading: 'Ask yourself three diagnostic questions',
        paragraphs: [
          '1. Do you prefer reviewing your week at a glance, or sinking into one day at a time? (Week = Jibun Techo; Day = Hobonichi).',
          '2. Do you want to carry your planner everywhere in a coat pocket, or keep it open on a desk? (Pocket = Hobonichi A6 or Traveler’s Passport; Desk = Hobonichi Cousin A5).',
          '3. Do you paint and use fountain pens? (Both Hobonichi and Traveler’s provide pristine fountain pen handling).'
        ],
      },
    ],
    conclusion: 'A Japanese planner is not a taskmaster judging your productivity; it is a hospitable friend awaiting your thoughts. Whichever system you choose, allow it to become a peaceful harbor in your daily routine.',
    keyTakeaways: [
      'Japan’s Techo Season occurs each autumn with nationwide exhibitions.',
      'Hobonichi provides a page a day for freeform life logging on Tomoe River paper.',
      'Jibun Techo is the premier 24-hour vertical time-tracking planner.',
      'Traveler’s Notebook offers modular booklet freedom inside aging leather.',
    ],
    relatedSlugs: [
      'art-of-japanese-journaling',
      'best-japanese-notebooks-everyday-use',
      'best-japanese-stationery-brands',
    ],
    metaDescription: 'A complete beginner’s guide to Japanese planner culture: Hobonichi Techo, Jibun Techo, Traveler’s Notebook, and how to choose the right techo system.',
    metaKeywords: ['Japanese planner culture', 'Hobonichi Techo guide', 'Jibun Techo vs Hobonichi', 'Travelers Notebook', 'techo season'],
  },
  {
    id: 'art-08',
    slug: 'best-japanese-highlighters-for-studying',
    title: 'Best Japanese Highlighters for Studying',
    japaneseTitle: '勉強が捗る日本の名作蛍光ペン',
    subtitle: 'Muted pastel palettes, windowed tips, dual-line chisel nibs, and zero-smear pigment formulas.',
    heroImage: '/src/assets/images/japanese_pens_collection_1791468769760.jpg',
    heroImageAlt: 'Assortment of Japanese pastel highlighters and study tools laid neatly on desk',
    category: 'study',
    categoryName: 'Study',
    author: AUTHORS.daiki,
    publishedAt: 'September 22, 2026',
    updatedAt: 'September 23, 2026',
    readingTime: '6 min read',
    excerpt: 'Tired of harsh neon highlighters that bleed through textbook pages and blind your eyes? Discover the muted beauty and ingenious window tips of Japanese study markers.',
    featured: false,
    tags: ['Study', 'Highlighters', 'Mildliner', 'Exam Prep', 'Student Tools'],
    tableOfContents: [
      { id: 'death-of-neon', title: 'The Death of Aggressive Neon Inks' },
      { id: 'top-highlighters', title: 'Top 4 Japanese Highlighters Tested' },
      { id: 'zebra-mildliner', title: '1. Zebra Mildliner: The Cultural Phenomenon' },
      { id: 'uni-propus', title: '2. Uni Propus Window: See Where You Stop' },
      { id: 'kokuyo-beetle', title: '3. Kokuyo Beetle Tip Dual Color' },
      { id: 'tombow-kei-coat', title: '4. Tombow Kei Coat: Reinforced Chisel Durability' },
      { id: 'color-coding-tips', title: 'Psychology of Color-Coded Study Notes' },
    ],
    introduction: [
      'For decades, standard highlighters have suffered from two glaring flaws: fluorescent neon pigments so radioactive they cause eye fatigue after thirty minutes of reading, and chisel nibs that crush and fray under pressure.',
      'Japanese stationery brands re-engineered the humble highlighter from scratch, introducing soft pastel tones, clear view windows, and dual-angled tips. Here are the best highlighters currently transforming student desks.'
    ],
    sections: [
      {
        id: 'death-of-neon',
        heading: 'The Death of Aggressive Neon Inks',
        subheading: 'Why soft dusty tones improve cognitive focus',
        paragraphs: [
          'High-contrast fluorescent yellow draws attention, but when half a textbook page is coated in bright neon, visual hierarchy collapses and reader fatigue skyrockets. Japanese researchers found that desaturated tones—dusty rose, mild smoke blue, warm olive, and muted gray—guide the eye without overwhelming visual cortex capacity.'
        ],
      },
      {
        id: 'top-highlighters',
        heading: 'Top 4 Japanese Highlighters Tested',
        subheading: 'Evaluated on textbook gloss paper and thin notebook sheets',
        paragraphs: [
          'We tested ink bleed on 60 gsm notebook paper and tested smear resistance over ballpoint and gel pen notes.'
        ],
      },
      {
        id: 'zebra-mildliner',
        heading: '1. Zebra Mildliner: The Cultural Phenomenon',
        subheading: 'Double-ended versatility with thirty soothing shades',
        paragraphs: [
          'Zebra’s Mildliner revolutionized study culture worldwide. Each marker features a broad chisel tip on one end and a fine bullet nib on the other for underlining and margin notes. Its water-resistant pigment ink dries rapidly and never bleeds through standard paper.',
          'Colors like Mild Smoke Blue, Mild Gray, and Mild Gold have become staples for aesthetic study notes and bullet journals.'
        ],
      },
      {
        id: 'uni-propus',
        heading: '2. Uni Propus Window: See Where You Stop',
        subheading: 'A transparent plastic window built directly into the nib',
        paragraphs: [
          'How many times have you accidentally highlighted past the end of a sentence? Uni solved this by placing a clear plastic window in the center of the chisel nib, allowing you to see the exact words you are about to highlight and stop with sub-millimeter precision.'
        ],
      },
      {
        id: 'kokuyo-beetle',
        heading: '3. Kokuyo Beetle Tip Dual Color',
        subheading: 'Two different ink colors in a single beetle-horn nib',
        paragraphs: [
          'Inspired by the horns of the Japanese rhinoceros beetle (kabutomushi), this marker features a bifurcated tip with two distinct colors (e.g. soft pink on one side, soft yellow on the other). A simple twist of your fingers switches the color instantly without changing pens or recapping.'
        ],
      },
      {
        id: 'tombow-kei-coat',
        heading: '4. Tombow Kei Coat: Reinforced Chisel Durability',
        subheading: 'Polymer sleeve that prevents nib deformation against rulers',
        paragraphs: [
          'Normal felt chisel nibs quickly mush down when dragged repeatedly against hard plastic rulers. Tombow Kei Coat surrounds the polyester nib with a sturdy polymer sleeve, ensuring the 3.8mm chisel stays crisp and razor-straight for the marker’s entire lifespan.'
        ],
        specTable: [
          { label: 'Zebra Mildliner', value: 'Double-ended (Chisel + Bullet) | 35 soft colors | Low bleed' },
          { label: 'Uni Propus Window', value: 'Clear see-through window | Prevents over-highlighting | Double-ended' },
          { label: 'Kokuyo Beetle Tip', value: 'Dual color horn nib | Instant color flip | Space-saving' },
          { label: 'Tombow Kei Coat', value: 'Polymer jacketed nib | Won’t fray against rulers | Crisp lines' },
        ],
      },
      {
        id: 'color-coding-tips',
        heading: 'Psychology of Color-Coded Study Notes',
        subheading: 'A disciplined 3-color taxonomy for exam prep',
        paragraphs: [
          'Avoid using more than three highlighter shades per chapter to preserve visual clarity:',
          '• Mild Blue/Green: Core concepts, vocabulary, and primary principles.',
          '• Mild Coral/Gold: Key equations, dates, and exam-critical warnings.',
          '• Mild Gray: Secondary context, references, or completed checklist steps.'
        ],
      },
    ],
    conclusion: 'Switching from harsh neon markers to gentle Japanese highlighters does not just make your study notes prettier—it makes long study sessions significantly gentler on your eyes and mind.',
    keyTakeaways: [
      'Japanese highlighters replace blinding neon with calming pastel tones.',
      'Zebra Mildliner offers dual tips and low-bleed water-resistant pigment.',
      'Uni Propus Window features a see-through nib to prevent over-marking.',
      'Limit note-taking to a three-color system to preserve clear visual hierarchy.',
    ],
    relatedSlugs: [
      'must-have-japanese-pens-students',
      'how-to-build-perfect-japanese-stationery-kit',
      'best-japanese-notebooks-everyday-use',
    ],
    metaDescription: 'The best Japanese highlighters for studying: Zebra Mildliner, Uni Propus Window, Kokuyo Beetle Tip, and Tombow Kei Coat reviewed for study notes and exam prep.',
    metaKeywords: ['best Japanese highlighters', 'Zebra Mildliner review', 'Uni Propus Window', 'study stationery', 'pastel highlighters'],
  },
  {
    id: 'art-09',
    slug: 'how-to-build-perfect-japanese-stationery-kit',
    title: 'How to Build the Perfect Japanese Stationery Kit',
    japaneseTitle: '理想の日本文具ポーチを作る完全ガイド',
    subtitle: 'Curating an essential pencil case: pens, mechanical pencils, erasers, scissors, and compact correction tools.',
    heroImage: '/src/assets/images/hero_stationery_flatlay_1791468753941.jpg',
    heroImageAlt: 'Carefully curated Japanese desk kit with pencil case, compact scissors, eraser, and fine pens',
    category: 'study',
    categoryName: 'Study',
    author: AUTHORS.daiki,
    publishedAt: 'September 18, 2026',
    updatedAt: 'September 19, 2026',
    readingTime: '8 min read',
    excerpt: 'Step-by-step blueprint for building a compact, versatile Japanese stationery everyday carry kit that handles note-taking, planning, and creative work anywhere.',
    featured: false,
    tags: ['Stationery Kit', 'Everyday Carry', 'Pencil Case', 'Kokuyo', 'Tombow Mono'],
    tableOfContents: [
      { id: 'curation-philosophy', title: 'The Philosophy of the Intentional Pencil Case' },
      { id: 'the-case-itself', title: 'Step 1: The Container (Pencil Case)' },
      { id: 'core-writing-duo', title: 'Step 2: The Core Writing Duo (Pen & Pencil)' },
      { id: 'correction-precision', title: 'Step 3: Precision Correction (Eraser & Tape)' },
      { id: 'compact-cutters-rules', title: 'Step 4: Compact Cutting & Measuring' },
      { id: 'sticky-notes-flags', title: 'Step 5: Modular Flags & Adhesive Tabs' },
      { id: 'kit-checklist', title: 'The Master Kit Checklist' },
    ],
    introduction: [
      'Most pencil cases end up as messy graveyards of dried-out markers, snapped pencil leads, and rubber dust. A Japanese stationery kit, by contrast, is an intentional ecosystem of compact, high-efficiency tools designed to nest harmoniously together.',
      'Whether you are setting up your desk at a café, studying in a library, or commuting between meetings, here is how to assemble the ultimate Japanese everyday stationery carry.'
    ],
    sections: [
      {
        id: 'curation-philosophy',
        heading: 'The Philosophy of the Intentional Pencil Case',
        subheading: 'Every tool must earn its weight and volume',
        paragraphs: [
          'Japanese stationery design excels at folding, sliding, and nesting mechanisms. Products are engineered with minimal footprints so that you can carry an entire drafting office inside a pencil case no thicker than a paperback novel.'
        ],
      },
      {
        id: 'the-case-itself',
        heading: 'Step 1: The Container (Pencil Case)',
        subheading: 'Function first: standing pouches vs. lay-flat trays',
        paragraphs: [
          '• Kokuyo NeoCritz: Zips open and folds down into a rigid standing pen cup, saving precious café table space.',
          '• Lihit Lab Teffa Pen Case: Book-style organizer with elastic loops and mesh pouches that keeps delicate pen finishes from scratching against each other.'
        ],
      },
      {
        id: 'core-writing-duo',
        heading: 'Step 2: The Core Writing Duo (Pen & Pencil)',
        subheading: 'One reliable black ink pen and one break-proof mechanical pencil',
        paragraphs: [
          '• Black Pen: Pilot Juice Up 0.4mm (for razor-sharp margin clarity) or Uni Jetstream 0.5mm (for instant dry speed).',
          '• Mechanical Pencil: Uni Kuru Toga Advance (0.5mm) with its 2x speed lead-rotation engine, or Zebra DelGuard for heavy-handed writers.'
        ],
      },
      {
        id: 'correction-precision',
        heading: 'Step 3: Precision Correction (Eraser & Tape)',
        subheading: 'Clean erasing without tearing paper or creating clouds of dust',
        paragraphs: [
          '• Eraser: Tombow Mono One or Kokuyo Mirikeshi (a pentagon-shaped eraser with 5 distinct edge widths from 3mm to 6mm to erase single lines of text).',
          '• Correction Tape: Tombow Mono CC or Plus Whiper MR, featuring flexible roller heads that lay tape flat without peeling.'
        ],
      },
      {
        id: 'compact-cutters-rules',
        heading: 'Step 4: Compact Cutting & Measuring',
        subheading: 'Pen-shaped folding scissors and aluminum non-slip rulers',
        paragraphs: [
          '• Scissors: Raymay Pencut or Plus Twiggy—full-function stainless steel scissors that fold completely into the shape and size of a standard pen.',
          '• Ruler: Midori Multi Ruler (15cm folded, expands to 30cm on a brass pivot hinge with angle markings).'
        ],
      },
      {
        id: 'sticky-notes-flags',
        heading: 'Step 5: Modular Flags & Adhesive Tabs',
        subheading: 'Translucent film flags that don’t obscure underlying text',
        paragraphs: [
          '• Midori Film Index Tabs: Translucent PET sticky tabs you can write on with pencil, which stay flat and never curl over time.',
          '• Kokuyo DotLiner: Roller adhesive dispenser that lays down micro-dots of glue without paper wrinkling.'
        ],
        specTable: [
          { label: 'Pen Pouch', value: 'Kokuyo NeoCritz (Self-standing desk cup)' },
          { label: 'Primary Pen', value: 'Uni-ball One 0.38 or Pilot Juice Up 0.4' },
          { label: 'Pencil', value: 'Uni Kuru Toga Advance 0.5' },
          { label: 'Eraser', value: 'Kokuyo Mirikeshi or Tombow Mono One' },
          { label: 'Scissors', value: 'Plus Twiggy pen-style scissors' },
          { label: 'Ruler', value: 'Midori 15cm-to-30cm Folding Ruler' },
        ],
      },
      {
        id: 'kit-checklist',
        heading: 'The Master Kit Checklist',
        subheading: 'Keep these six items checked and ready to go',
        paragraphs: [
          '1 Pen-style standing case | 1 Gel pen (black 0.4) | 1 Hybrid ballpoint (blue 0.5) | 1 Lead-rotating pencil | 1 Pastel highlighter | 1 Compact fold-out scissors | 1 Mini correction tape.'
        ],
      },
    ],
    conclusion: 'A well-curated Japanese stationery kit is a personal mobile workshop. When every tool in your hands is thoughtfully engineered, sit down anywhere and dive effortlessly into productive flow.',
    keyTakeaways: [
      'Choose a transforming standing case like Kokuyo NeoCritz to save desk footprint.',
      'Pair a lead-rotating pencil (Kuru Toga) with a high-contrast fine gel pen.',
      'Pen-shaped folding scissors (Plus Twiggy) eliminate bulky shears.',
      'Translucent film index tabs provide clean bookmarking without hiding text.',
    ],
    relatedSlugs: [
      'must-have-japanese-pens-students',
      'best-japanese-highlighters-for-studying',
      'best-japanese-stationery-brands',
    ],
    metaDescription: 'How to build the ultimate Japanese stationery kit: curated pencil cases, lead-rotating pencils, folding scissors, and precision erasers for mobile work.',
    metaKeywords: ['Japanese stationery kit', 'pencil case curation', 'everyday carry stationery', 'Kokuyo NeoCritz', 'Tombow Mono'],
  },
  {
    id: 'art-10',
    slug: 'history-evolution-japanese-stationery',
    title: 'The History and Evolution of Japanese Stationery',
    japaneseTitle: '筆と和紙から現代へ：日本文具の進化史',
    subtitle: 'From Edo period washi and sumi ink stones to the 1984 invention of the gel pen and modern micro-engineering.',
    heroImage: '/src/assets/images/notebooks_paper_texture_1791468801881.jpg',
    heroImageAlt: 'Antique and modern Japanese paper textures reflecting the evolutionary history of stationery craft',
    category: 'stationery-brands',
    categoryName: 'Stationery Brands',
    author: AUTHORS.kenji,
    publishedAt: 'September 15, 2026',
    updatedAt: 'September 16, 2026',
    readingTime: '11 min read',
    excerpt: 'Trace the astonishing journey of Japanese writing culture: how traditional brush makers adapted to the Meiji industrial era and sparked revolutions in global pen technology.',
    featured: false,
    tags: ['History', 'Washi', 'Gel Pen Invention', 'Sakura', 'Meiji Era'],
    tableOfContents: [
      { id: 'edo-origins', title: '1. The Edo Period: Washi, Yatate, and Sumi Ink' },
      { id: 'meiji-modernization', title: '2. The Meiji Restoration & Steel Nib Revolution' },
      { id: 'post-war-pencils', title: '3. Post-War Resurgence: Tombow and Mitsubishi Lead' },
      { id: '1984-gel-revolution', title: '4. 1984: The Invention of the Gel Pen by Sakura' },
      { id: '21st-century-ergonomics', title: '5. The 21st Century: Micro-Mechanics and Digital Era' },
      { id: 'legacy-tomorrow', title: 'The Living Legacy of Japanese Paper & Ink' },
    ],
    introduction: [
      'Today, Japanese pens and notebooks are high-tech marvels of fluid mechanics and polymer chemistry. Yet the DNA of these instruments was forged centuries ago in traditional workshops along the canals of Kyoto, the paper mills of Gifu, and the merchant houses of Edo (modern Tokyo).',
      'To truly appreciate a Japanese gel pen or a thread-bound journal, one must understand the fascinating history of how Japan transformed from a calligraphy-bound feudal society into the undisputed world capital of analog stationery.'
    ],
    sections: [
      {
        id: 'edo-origins',
        heading: '1. The Edo Period: Washi, Yatate, and Sumi Ink',
        subheading: 'Portable writing sets and handmade mulberry fibers',
        paragraphs: [
          'During the Edo period (1603–1867), literacy rates in Japan were among the highest in the pre-industrial world, spurred by neighborhood temple schools (terakoya). Samurai, merchants, and scholars carried a "yatate" (矢立)—an ingenious portable brass or bamboo pipe that housed both a calligraphy brush and a small cotton-filled reservoir saturated with sumi ink.',
          'Concurrently, master papermakers developed washi (和紙) using fibers from the kozo (mulberry), mitsumata, and gampi plants. These papers possessed extraordinary durability, resisting insects and moisture for over a thousand years.'
        ],
      },
      {
        id: 'meiji-modernization',
        heading: '2. The Meiji Restoration & Steel Nib Revolution',
        subheading: 'The transition from brush to Western dipping pens',
        paragraphs: [
          'With the Meiji Restoration in 1868, Japan opened its borders and adopted Western educational and administrative models. European steel dip pens and fountain pens flooded into ports like Yokohama.',
          'Recognizing that imported pens were not suited to the varied stroke pressures of Japanese characters, domestic craftsmen quickly began modifying steel nibs. In 1918, Ryosuke Namiki, a professor at the Tokyo Merchant Marine College, partnered with Masao Wada to found the Namiki Manufacturing Company (later renamed Pilot Corporation), patenting Japan’s first domestic fountain pen nibs and lacquered maki-e barrels.'
        ],
      },
      {
        id: 'post-war-pencils',
        heading: '3. Post-War Resurgence: Tombow and Mitsubishi Lead',
        subheading: 'Graphite purity and the rise of schoolroom standards',
        paragraphs: [
          'Following the devastation of World War II, stationery manufacturers led the country’s industrial recovery. Companies like Mitsubishi Pencil (Uni) and Tombow focused intensely on graphite purification and polymer bonding.',
          'In 1958, Mitsubishi launched the "Uni" pencil, featuring an unprecedentedly smooth graphite core formulated with clay and lampblack, packaged in a sleek burgundy case. Tombow responded with the "Mono 100" in 1967. The Japanese pencil set a global quality benchmark that remains unchallenged.'
        ],
      },
      {
        id: '1984-gel-revolution',
        heading: '4. 1984: The Invention of the Gel Pen by Sakura',
        subheading: 'The single greatest leap in modern writing technology',
        paragraphs: [
          'Until the 1980s, the writing world was split: ballpoints were smear-free but required heavy pressure and had dull oil ink; rollerballs used fluid water ink but bled profusely through cheap paper.',
          'In 1984, in Osaka, Sakura Color Products Corporation made history. Chemical engineer Hiroshi Inoue and his team spent years experimenting with water-soluble biopolymers, eventually discovering that xanthan gum created a thixotropic gel. They launched the world’s first gel pen: the Sakura Ballsign (marketed internationally as the Gelly Roll).',
          'This invention unlocked vibrant pigments, metallic inks, and pastel colors, forever altering writing culture on every continent.'
        ],
        specTable: [
          { label: 'Edo Period (~1600s)', value: 'Yatate portable inkwells & handmade washi mulberry paper' },
          { label: '1918', value: 'Founding of Pilot (Namiki) & first Japanese fountain pen nibs' },
          { label: '1950', value: 'Midori founded; development of MD Paper begins' },
          { label: '1958', value: 'Mitsubishi launches "Uni" premium pencil' },
          { label: '1975', value: 'Kokuyo introduces the Campus notebook series' },
          { label: '1984', value: 'Sakura Color Products invents the world’s first Gel Pen' },
          { label: '2008', value: 'Uni Kuru Toga introduces lead-rotating engine' },
        ],
      },
      {
        id: '21st-century-ergonomics',
        heading: '5. The 21st Century: Micro-Mechanics and Digital Era',
        subheading: 'Turning stationery into precision micro-engineering',
        paragraphs: [
          'In the 21st century, Japanese stationery manufacturers shifted focus toward ergonomic and mechanical micro-tolerances. Dual-spring shock absorption (Zebra DelGuard), thermal erasable polymers (Pilot Frixion), and lead-rotating ratchets (Uni Kuru Toga) proved that even a 100-year-old product category could undergo radical innovation.'
        ],
      },
      {
        id: 'legacy-tomorrow',
        heading: 'The Living Legacy of Japanese Paper & Ink',
        subheading: 'Past, present, and future intertwined on the desk',
        paragraphs: [
          'Today, when you uncap a gel pen and touch it to a thread-bound cream notebook, you are not merely taking notes. You are participating in a living lineage of Japanese artisans who have dedicated over four hundred years to the simple, profound joy of putting ink to paper.'
        ],
      },
    ],
    conclusion: 'The history of Japanese stationery is a testament to the belief that small things matter. By honoring the physical instruments of thought, Japan has gifted the world a richer, more tactile way to think and live.',
    keyTakeaways: [
      'The Edo-period yatate combined brush and ink into a portable everyday carry.',
      'Meiji-era craftsmen adapted Western nibs to the nuances of Japanese calligraphy.',
      'Sakura Color Products invented the world’s first gel pen in Osaka in 1984.',
      'Modern Japanese stationery treats pens and pencils as precision mechanical systems.',
    ],
    relatedSlugs: [
      'why-japanese-stationery-is-so-popular',
      'best-japanese-stationery-brands',
      'japanese-gel-pens-vs-ballpoint-pens',
    ],
    metaDescription: 'Discover the rich history of Japanese stationery: from Edo period washi and yatate inkwells to the 1984 invention of the gel pen by Sakura.',
    metaKeywords: ['history of Japanese stationery', 'gel pen invention 1984', 'yatate Edo period', 'Sakura Gelly Roll history', 'Pilot pen heritage'],
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug || a.id === slug);
}

export function getArticlesByCategory(categoryId: string): Article[] {
  return ARTICLES.filter((a) => a.category === categoryId);
}

export function getRelatedArticles(article: Article): Article[] {
  return ARTICLES.filter((a) => article.relatedSlugs.includes(a.slug));
}

export function searchArticles(query: string): Article[] {
  const clean = query.trim().toLowerCase();
  if (!clean) return ARTICLES;
  return ARTICLES.filter((a) => {
    return (
      a.title.toLowerCase().includes(clean) ||
      a.subtitle.toLowerCase().includes(clean) ||
      a.excerpt.toLowerCase().includes(clean) ||
      a.categoryName.toLowerCase().includes(clean) ||
      a.tags.some((t) => t.toLowerCase().includes(clean)) ||
      a.author.name.toLowerCase().includes(clean)
    );
  });
}

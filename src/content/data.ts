/**
 * Centralised, editable mock content. No real clients, dates, budgets or
 * performance figures are asserted anywhere in this file.
 */
import type { Dictionary, Localized } from './index'

export type CategoryId = keyof Dictionary['categories']

export interface Service {
  id: CategoryId
  number: string
  title: Localized
  summary: Localized
  description: Localized
  deliverables: Localized[]
  image: string
}

export interface Project {
  slug: string
  number: string
  title: Localized
  category: CategoryId
  summary: Localized
  concept: Localized
  scope: Localized
  deliverables: Localized[]
  image: string
  gallery: string[]
  /** Creates the deliberate asymmetric rhythm of the portfolio grid. */
  feature?: boolean
}

export const IMAGES = {
  hero: '/images/hero-architecture.jpg',
  intro: '/images/intro-stone.jpg',
  why: '/images/why-columns.jpg',
  positioning: '/images/positioning-tower.jpg',
  strategy: '/images/project-strategy.jpg',
  identity: '/images/project-identity.jpg',
  digital: '/images/project-digital.jpg',
  social: '/images/project-social.jpg',
  commerce: '/images/project-commerce.jpg',
  web: '/images/project-web.jpg',
  performance: '/images/project-performance.jpg',
  content: '/images/project-content.jpg',
} as const

export const SERVICES: Service[] = [
  {
    id: 'strategy',
    number: '01',
    title: { ar: 'استراتيجية التسويق', en: 'Marketing Strategy' },
    summary: {
      ar: 'تحديد الاتجاه قبل اختيار الأدوات.',
      en: 'Direction before tools.',
    },
    description: {
      ar: 'نبدأ بقراءة السوق والجمهور والمنافسة، ثم نبني موقعاً واضحاً وخطة تُحوّل الأهداف إلى أولويات قابلة للتنفيذ. الاستراتيجية عندنا ليست ملفاً، بل مرجعاً يُستخدم يومياً.',
      en: 'We begin with the market, the audience and the competitive set, then build a clear position and a plan that turns objectives into executable priorities. For us, strategy is not a document — it is a reference used every day.',
    },
    deliverables: [
      { ar: 'تشخيص السوق والجمهور', en: 'Market and audience diagnosis' },
      { ar: 'تحديد الموقع والرسالة', en: 'Positioning and core message' },
      { ar: 'خريطة الأولويات والنمو', en: 'Growth and priority map' },
      { ar: 'خطة تنفيذ مرحلية', en: 'Phased execution plan' },
    ],
    image: IMAGES.strategy,
  },
  {
    id: 'identity',
    number: '02',
    title: { ar: 'استراتيجية العلامة وهويتها', en: 'Brand Strategy & Identity' },
    summary: {
      ar: 'نظام بصري ولغوي يعكس الحقيقة.',
      en: 'A visual and verbal system that reflects the truth.',
    },
    description: {
      ar: 'نُعرّف ما تعنيه العلامة، ثم نبني لها نظاماً بصرياً ولغوياً متماسكاً: شكل، لون، خط، صوت، وقواعد استخدام تحفظ الاتساق مع اتساع العمل.',
      en: 'We define what the brand means, then build a coherent visual and verbal system: form, colour, type, voice and usage rules that keep consistency as the work grows.',
    },
    deliverables: [
      { ar: 'منصة العلامة والقيم', en: 'Brand platform and values' },
      { ar: 'نظام الهوية البصرية', en: 'Visual identity system' },
      { ar: 'لغة التواصل والنبرة', en: 'Tone of voice and messaging' },
      { ar: 'دليل الاستخدام والتطبيق', en: 'Identity guidelines' },
    ],
    image: IMAGES.identity,
  },
  {
    id: 'digital',
    number: '03',
    title: { ar: 'التسويق الرقمي', en: 'Digital Marketing' },
    summary: {
      ar: 'حضورٌ متماسك عبر كل نقطة التقاء.',
      en: 'One coherent presence across every touchpoint.',
    },
    description: {
      ar: 'نصمّم بنية القنوات الرقمية ورسائلها بحسب رحلة الجمهور، ونربط المحتوى والحملات والموقع في تجربة واحدة تُقاد من خطة واضحة.',
      en: 'We design the channel architecture and its messages around the audience journey, connecting content, campaigns and site into a single experience guided by one plan.',
    },
    deliverables: [
      { ar: 'خطة القنوات الرقمية', en: 'Digital channel plan' },
      { ar: 'بنية الحملات والرسائل', en: 'Campaign and message architecture' },
      { ar: 'رحلة الجمهور ونقاط الاتصال', en: 'Audience journey and touchpoints' },
      { ar: 'تقويم التنفيذ', en: 'Execution calendar' },
    ],
    image: IMAGES.digital,
  },
  {
    id: 'social',
    number: '04',
    title: { ar: 'إدارة منصات التواصل', en: 'Social Media Management' },
    summary: {
      ar: 'صوتٌ ثابت، وحضورٌ يستحق المتابعة.',
      en: 'A consistent voice worth following.',
    },
    description: {
      ar: 'نبني هوية تحريرية للمنصات، ونُدير الإيقاع والنبرة والتفاعل ضمن خط تحريري واضح، بحيث تبدو العلامة واحدة في كل منشور.',
      en: 'We build an editorial identity for social platforms and manage rhythm, tone and interaction within a clear editorial line, so the brand feels like one voice in every post.',
    },
    deliverables: [
      { ar: 'هوية تحريرية للمنصات', en: 'Platform editorial identity' },
      { ar: 'تقويم محتوى دوري', en: 'Recurring content calendar' },
      { ar: 'إرشادات النبرة والتفاعل', en: 'Tone and engagement guidelines' },
      { ar: 'قوالب منشورات قابلة للتطوير', en: 'Adaptable post templates' },
    ],
    image: IMAGES.social,
  },
  {
    id: 'content',
    number: '05',
    title: { ar: 'صناعة المحتوى', en: 'Content Creation' },
    summary: {
      ar: 'صور وكلمات تُبنى لتُستخدم، لا لتُملأ.',
      en: 'Images and words built to be used, not to fill space.',
    },
    description: {
      ar: 'من الاتجاه البصري إلى التصوير والكتابة والإنتاج، نصنع أصولاً تخدم الرسالة ويمكن إعادة توظيفها عبر القنوات دون أن تفقد شخصيتها.',
      en: 'From art direction to photography, writing and production, we create assets that serve the message and can be reused across channels without losing their character.',
    },
    deliverables: [
      { ar: 'اتجاه بصري ومزاج عام', en: 'Art direction and mood' },
      { ar: 'تصوير وإنتاج', en: 'Photography and production' },
      { ar: 'نصوص تحريرية', en: 'Editorial copywriting' },
      { ar: 'مكتبة أصول قابلة لإعادة الاستخدام', en: 'Reusable asset library' },
    ],
    image: IMAGES.content,
  },
  {
    id: 'performance',
    number: '06',
    title: { ar: 'تسويق الأداء', en: 'Performance Marketing' },
    summary: {
      ar: 'قراراتٌ تستند إلى ما يحدث فعلاً.',
      en: 'Decisions grounded in what actually happens.',
    },
    description: {
      ar: 'نبني هيكل قياس واضح قبل الإطلاق، ونُصمّم الحملات والرسائل لتُختبر وتُطوَّر دورياً، مع فصلٍ دائم بين الملاحظة والافتراض.',
      en: 'We define a measurement structure before launch, then design campaigns and messages to be tested and refined, always separating observation from assumption.',
    },
    deliverables: [
      { ar: 'هيكل القياس والمؤشرات', en: 'Measurement framework' },
      { ar: 'بنية الحملات', en: 'Campaign structure' },
      { ar: 'خطة اختبار الرسائل', en: 'Message testing plan' },
      { ar: 'مراجعات دورية موثّقة', en: 'Documented periodic reviews' },
    ],
    image: IMAGES.performance,
  },
  {
    id: 'commerce',
    number: '07',
    title: { ar: 'تسويق التجارة الإلكترونية', en: 'E-Commerce Marketing' },
    summary: {
      ar: 'من الاكتشاف إلى القرار، بلا فجوات.',
      en: 'From discovery to decision, without gaps.',
    },
    description: {
      ar: 'نُنسّق محتوى المنتج ومسار الشراء وحملات المواسم ضمن تجربة واحدة، ونهتم بالتفاصيل التي تُزيل التردد عند لحظة القرار.',
      en: 'We align product content, the purchase path and seasonal campaigns into one experience, with close attention to the details that remove hesitation at the moment of decision.',
    },
    deliverables: [
      { ar: 'هيكل صفحات المنتج', en: 'Product page structure' },
      { ar: 'محتوى المنتج وأسلوبه', en: 'Product content system' },
      { ar: 'تحسين مسار الشراء', en: 'Purchase path refinement' },
      { ar: 'خطط الحملات الموسمية', en: 'Seasonal campaign plans' },
    ],
    image: IMAGES.commerce,
  },
  {
    id: 'web',
    number: '08',
    title: { ar: 'تصميم وتطوير المواقع', en: 'Website Design & Development' },
    summary: {
      ar: 'واجهة تُترجم المعمارية إلى تجربة.',
      en: 'An interface that turns architecture into experience.',
    },
    description: {
      ar: 'نصمّم بنية المعلومات والواجهة ونظام المكوّنات، ونُسلّم تجربة سريعة وواضحة تعمل بلغتين واتجاهين، وقابلة للتطوير لاحقاً.',
      en: 'We design the information architecture, interface and component system, delivering a fast, clear experience that works in two languages and both directions and is ready to grow.',
    },
    deliverables: [
      { ar: 'بنية المعلومات والمحتوى', en: 'Information architecture' },
      { ar: 'تصميم واجهة متجاوب', en: 'Responsive interface design' },
      { ar: 'نظام مكوّنات وتصميم', en: 'Design component system' },
      { ar: 'دعم ثنائي اللغة والاتجاه', en: 'Bilingual, bidirectional support' },
    ],
    image: IMAGES.web,
  },
]

export const PROJECTS: Project[] = [
  {
    slug: 'ofuq',
    number: '01',
    category: 'strategy',
    feature: true,
    title: { ar: 'أُفق', en: 'OFUQ' },
    summary: {
      ar: 'منصة positioning لعلامة عقارية في مرحلة التأسيس.',
      en: 'A positioning platform for a real-estate brand at foundation stage.',
    },
    concept: {
      ar: 'تصور لعلامة تحتاج أن تُعرّف نفسها قبل أن تُعرّف مشروعها. بنينا الفكرة حول سؤال واحد: ما الذي يجعل المكان جديراً بأن يُنتظر؟ ثم صغنا الموقع والرسالة وخريطة الأولويات للمرحلة الأولى.',
      en: 'A concept for a brand that needs to define itself before defining its project. Built around one question: what makes a place worth waiting for? From there we shaped the position, the message and a first-phase priority map.',
    },
    scope: {
      ar: 'تشخيص السوق، منصة العلامة، معمارية الرسائل، وخطة إطلاق مرحلية.',
      en: 'Market diagnosis, brand platform, message architecture and a phased launch plan.',
    },
    deliverables: [
      { ar: 'وثيقة الموقع والجمهور', en: 'Positioning and audience document' },
      { ar: 'معمارية الرسائل', en: 'Message architecture' },
      { ar: 'خريطة الأولويات', en: 'Priority map' },
    ],
    image: IMAGES.strategy,
    gallery: [IMAGES.intro, IMAGES.identity],
  },
  {
    slug: 'miyar',
    number: '02',
    category: 'identity',
    title: { ar: 'مِعيار', en: 'MI’YAR' },
    summary: {
      ar: 'نظام هوية مستوحى من دقة التفاصيل المعمارية.',
      en: 'An identity system drawn from architectural precision.',
    },
    concept: {
      ar: 'تصور لهوية تعتمد على النِّسَب لا على الزخرفة: شبكة واضحة، وحضور هادئ، وتفاصيل نحاسية تُرى عن قرب فقط. الهدف كان نظاماً يتسع لمواد مختلفة دون أن يفقد شخصيته.',
      en: 'An identity concept built on proportion rather than ornament: a clear grid, a quiet presence and copper details visible only up close. The aim was a system that stretches across materials without losing its character.',
    },
    scope: {
      ar: 'منصة العلامة، نظام بصري، لغة تواصل، ودليل تطبيق.',
      en: 'Brand platform, visual system, tone of voice and application guidelines.',
    },
    deliverables: [
      { ar: 'نظام الشبكة والنِّسَب', en: 'Grid and proportion system' },
      { ar: 'مكتبة مواد وتطبيقات', en: 'Material and application library' },
      { ar: 'دليل استخدام', en: 'Usage guidelines' },
    ],
    image: IMAGES.identity,
    gallery: [IMAGES.intro, IMAGES.web],
  },
  {
    slug: 'sadim',
    number: '03',
    category: 'digital',
    title: { ar: 'سَديم', en: 'SADIM' },
    summary: {
      ar: 'بنية حملة رقمية متعددة نقاط الالتقاء.',
      en: 'A multi-touchpoint digital campaign architecture.',
    },
    concept: {
      ar: 'تصور يربط الرسالة الواحدة بأشكال مختلفة بحسب القناة، مع الحفاظ على إيقاع بصري ثابت. عُرضت الفكرة كخريطة رحلة تُوضّح ما يراه الجمهور في كل مرحلة.',
      en: 'A concept connecting one message to different forms by channel, while keeping a constant visual rhythm. Presented as a journey map showing what the audience sees at each stage.',
    },
    scope: {
      ar: 'خطة القنوات، معمارية الرسائل، وتقويم تنفيذ.',
      en: 'Channel plan, message architecture and execution calendar.',
    },
    deliverables: [
      { ar: 'خريطة الرحلة', en: 'Journey map' },
      { ar: 'مصفوفة الرسائل', en: 'Message matrix' },
      { ar: 'تقويم القنوات', en: 'Channel calendar' },
    ],
    image: IMAGES.digital,
    gallery: [IMAGES.web, IMAGES.performance],
  },
  {
    slug: 'nasaq',
    number: '04',
    category: 'social',
    title: { ar: 'نَسَق', en: 'NASAQ' },
    summary: {
      ar: 'خط تحريري بصري لمنصات التواصل.',
      en: 'A visual editorial line for social platforms.',
    },
    concept: {
      ar: 'تصور لمنظومة منشورات تتكرر بإيقاع ثابت، وتتنوع داخل حدود واضحة. الفكرة: أن يكون الاتساق هويةً لا قيداً على الإبداع.',
      en: 'A concept for a post system that repeats with a steady rhythm and varies within clear boundaries. The idea: consistency as an identity, not a limit on creativity.',
    },
    scope: {
      ar: 'هوية تحريرية، قوالب محتوى، وإرشادات نبرة.',
      en: 'Editorial identity, content templates and tone guidelines.',
    },
    deliverables: [
      { ar: 'دليل الخط التحريري', en: 'Editorial line guide' },
      { ar: 'مكتبة قوالب', en: 'Template library' },
      { ar: 'إرشادات النبرة', en: 'Tone guidelines' },
    ],
    image: IMAGES.social,
    gallery: [IMAGES.content, IMAGES.identity],
  },
  {
    slug: 'riwaq',
    number: '05',
    category: 'commerce',
    title: { ar: 'رُواق', en: 'RIWAQ' },
    summary: {
      ar: 'تجربة تجارة إلكترونية لمواد ومنتجات مختارة.',
      en: 'An e-commerce experience for considered objects.',
    },
    concept: {
      ar: 'تصور يختبر كيف تُعرض المنتجات بهدوء: مساحة كافية، ومعلومة في مكانها، ومسار قرار بلا ضجيج. صُممت الصفحات لتُقرأ قبل أن تُشاهد.',
      en: 'A concept testing how products can be presented quietly: enough space, information in its place, and a decision path without noise. Pages designed to be read before they are looked at.',
    },
    scope: {
      ar: 'هيكل صفحات المنتج، نظام المحتوى، ومسار الشراء.',
      en: 'Product page structure, content system and purchase path.',
    },
    deliverables: [
      { ar: 'هيكل صفحة المنتج', en: 'Product page structure' },
      { ar: 'نظام محتوى المنتج', en: 'Product content system' },
      { ar: 'خريطة مسار الشراء', en: 'Purchase path map' },
    ],
    image: IMAGES.commerce,
    gallery: [IMAGES.content, IMAGES.web],
  },
  {
    slug: 'misaha',
    number: '06',
    category: 'web',
    title: { ar: 'مِساحة', en: 'MISAH' },
    summary: {
      ar: 'موقع تعريفي ثنائي اللغة بمعمارية صفحات واضحة.',
      en: 'A bilingual showcase site with a clear page architecture.',
    },
    concept: {
      ar: 'تصور لواجهة تعمل بالعربية والإنجليزية بالجودة نفسها، مع تركيبات مختلفة للشاشات الصغيرة لا تُختزل من نسخة سطح المكتب. التركيز على التسلسل الهرمي والفراغ.',
      en: 'A concept for an interface that works equally well in Arabic and English, with deliberate small-screen compositions rather than a shrunken desktop. Focused on hierarchy and space.',
    },
    scope: {
      ar: 'بنية المعلومات، نظام الواجهة، وتجربة متجاوبة.',
      en: 'Information architecture, interface system and responsive experience.',
    },
    deliverables: [
      { ar: 'خريطة الموقع', en: 'Sitemap' },
      { ar: 'نظام مكوّنات', en: 'Component system' },
      { ar: 'نماذج متجاوبة', en: 'Responsive compositions' },
    ],
    image: IMAGES.web,
    gallery: [IMAGES.intro, IMAGES.digital],
  },
  {
    slug: 'miqyas',
    number: '07',
    category: 'performance',
    title: { ar: 'مِقياس', en: 'MIQYAS' },
    summary: {
      ar: 'هيكل قياس واختبار رسائل لحملة متعددة المراحل.',
      en: 'A measurement and message-testing structure for a phased campaign.',
    },
    concept: {
      ar: 'تصور يُظهر كيف يُبنى هيكل القياس قبل كتابة أي إعلان: ما الذي نراقبه، وما الذي نُغيّره، ومتى. لا أرقام ولا ادعاءات، بل ترتيبٌ للأسئلة.',
      en: 'A concept showing how the measurement structure comes before any ad copy: what we observe, what we change, and when. No figures and no claims — just an order of questions.',
    },
    scope: {
      ar: 'إطار قياس، خطة اختبار، ومراجعات موثّقة.',
      en: 'Measurement framework, testing plan and documented reviews.',
    },
    deliverables: [
      { ar: 'شجرة المؤشرات', en: 'Indicator tree' },
      { ar: 'خطة الاختبار', en: 'Testing plan' },
      { ar: 'نموذج المراجعة', en: 'Review template' },
    ],
    image: IMAGES.performance,
    gallery: [IMAGES.digital, IMAGES.strategy],
  },
  {
    slug: 'maraya',
    number: '08',
    category: 'content',
    title: { ar: 'مَرايا', en: 'MARAYA' },
    summary: {
      ar: 'مكتبة أصول بصرية وتحريرية قابلة لإعادة التوظيف.',
      en: 'A reusable library of visual and editorial assets.',
    },
    concept: {
      ar: 'تصور لإنتاج محتوى يُخطط له مرة ويُستخدم مرات: لقطات أساسية، وتفاصيل قريبة، ونصوص قصيرة تتسع لقنوات مختلفة دون إعادة بناء الفكرة.',
      en: 'A concept for content planned once and used many times: core shots, close details and short copy that extend to different channels without rebuilding the idea.',
    },
    scope: {
      ar: 'اتجاه بصري، إنتاج، وكتابة أصول متعددة الاستخدام.',
      en: 'Art direction, production and multi-use asset copy.',
    },
    deliverables: [
      { ar: 'دليل الاتجاه البصري', en: 'Art direction guide' },
      { ar: 'مكتبة لقطات', en: 'Shot library' },
      { ar: 'بنك نصوص قصيرة', en: 'Short copy bank' },
    ],
    image: IMAGES.content,
    gallery: [IMAGES.social, IMAGES.commerce],
  },
]

/** Category order is defined explicitly to keep filters and data in sync. */
export const CATEGORY_ORDER: CategoryId[] = [
  'strategy',
  'identity',
  'digital',
  'social',
  'content',
  'performance',
  'commerce',
  'web',
]

export function getService(id: CategoryId): Service {
  return SERVICES.find((service) => service.id === id) ?? SERVICES[0]
}

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find((project) => project.slug === slug)
}


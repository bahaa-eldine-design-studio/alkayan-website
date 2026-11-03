const publicUrl = (value: string | undefined, allowLocal = false) => {
  if (!value) return '';
  try { const url = new URL(value); return url.protocol === 'https:' || (allowLocal && url.protocol === 'http:' && url.hostname === 'localhost') ? url.toString().replace(/\/$/, '') : ''; }
  catch { return ''; }
};
const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() || '';
const contactPhone = process.env.NEXT_PUBLIC_CONTACT_PHONE?.trim() || '';

export const site = {
  name: 'AL KAYAN MARKETING',
  parent: 'AL KAYAN CONSTRUCTION',
  url: publicUrl(process.env.NEXT_PUBLIC_SITE_URL, true),
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactEmail) ? contactEmail : '',
  phone: /^[+\d().\-\s]{6,40}$/.test(contactPhone) ? contactPhone : '',
  whatsapp: (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '').replace(/\D/g, ''),
  socials: {
    instagram: publicUrl(process.env.NEXT_PUBLIC_INSTAGRAM_URL),
    linkedin: publicUrl(process.env.NEXT_PUBLIC_LINKEDIN_URL),
    x: publicUrl(process.env.NEXT_PUBLIC_X_URL),
  },
  colors: { espresso: '#30231F', limestone: '#E9E0D5', copper: '#B47B55', sage: '#78958A' },
};

export type Locale = 'ar' | 'en';
export const isLocale = (value: string): value is Locale => value === 'ar' || value === 'en';
export const languages = ['ar', 'en'] as const;

export const navigation = {
  ar: [
    { href: '', label: 'الرئيسية' }, { href: '/about', label: 'من نحن' },
    { href: '/services', label: 'خدماتنا' }, { href: '/work', label: 'أعمالنا' }, { href: '/contact', label: 'تواصل معنا' },
  ],
  en: [
    { href: '', label: 'Home' }, { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' }, { href: '/work', label: 'Our work' }, { href: '/contact', label: 'Contact' },
  ],
};

export const services = [
  { slug: 'brand-strategy', number: '01', icon: '◒', en: { title: 'Brand strategy & identity', short: 'A clear point of view, made unmistakably yours.', problem: 'When a brand looks or sounds like everyone else, it is harder for the right people to remember — or choose — it.', approach: 'We bring business ambition and audience insight together to shape a distinct position, a coherent story and an identity system built to travel across every touchpoint.', deliverables: ['Positioning & audience definition', 'Brand narrative and messaging', 'Visual identity direction', 'Brand guidelines'], value: 'A more recognizable brand, clearer decisions and a consistent foundation for every marketing investment.' }, ar: { title: 'استراتيجية العلامة وهويتها', short: 'رؤية واضحة وهوية تعبّر عنك بصدق.', problem: 'حين تبدو العلامة أو تتحدث كغيرها، يصبح تذكّرها واختيارها أصعب على الجمهور المناسب.', approach: 'نصل طموح الأعمال بفهم الجمهور لصياغة مكانة مميزة، وحكاية واضحة، ونظام هوية متماسك عبر مختلف نقاط التواصل.', deliverables: ['تحديد المكانة والجمهور', 'حكاية العلامة ورسائلها', 'توجيه الهوية البصرية', 'دليل استخدام العلامة'], value: 'علامة أسهل تمييزاً، وقرارات أوضح، وأساس متسق لكل استثمار تسويقي.' } },
  { slug: 'digital-marketing', number: '02', icon: '↗', en: { title: 'Digital marketing', short: 'A connected plan for meaningful digital reach.', problem: 'Scattered activity can consume time and budget without creating a clear path from attention to action.', approach: 'We map the customer journey, choose channels for a reason and build a practical plan that can be measured and refined.', deliverables: ['Channel and audience planning', 'Campaign architecture', 'Content and channel calendars', 'Measurement framework'], value: 'More focused digital activity, with clearer priorities and useful signals for what to do next.' }, ar: { title: 'التسويق الرقمي', short: 'خطة مترابطة لحضور رقمي أكثر أثراً.', problem: 'قد تستهلك الأنشطة المتفرقة الوقت والميزانية من دون مسار واضح من الاهتمام إلى التفاعل.', approach: 'نرسم رحلة العميل، ونختار القنوات لأسباب واضحة، ونبني خطة قابلة للقياس والتطوير.', deliverables: ['تخطيط القنوات والجمهور', 'هيكلة الحملات', 'تقويم المحتوى والقنوات', 'إطار للقياس'], value: 'أنشطة رقمية أكثر تركيزاً وأولويات أوضح ومؤشرات تساعد على تحديد الخطوة التالية.' } },
  { slug: 'social-content', number: '03', icon: '✳', en: { title: 'Social & content', short: 'Content with a point of view — and a purpose.', problem: 'Publishing without a consistent voice or useful rhythm makes it difficult to earn attention and trust.', approach: 'We shape a content system around your brand voice and audience needs, then plan and produce stories with a reason to exist.', deliverables: ['Social content strategy', 'Editorial calendars', 'Creative concepts and copy', 'Platform-ready asset direction'], value: 'A recognizable voice and a more deliberate connection with the people your business wants to reach.' }, ar: { title: 'المحتوى والمنصات الاجتماعية', short: 'محتوى له وجهة وهدف واضح.', problem: 'النشر بلا صوت متسق أو إيقاع مدروس يصعّب كسب الانتباه والثقة.', approach: 'نبني منظومة محتوى حول نبرة علامتك واحتياجات جمهورك، ثم نخطط قصصاً تستحق أن تُروى.', deliverables: ['استراتيجية المحتوى الاجتماعي', 'تقويم تحريري', 'أفكار إبداعية ونصوص', 'توجيه مواد ملائمة للمنصات'], value: 'صوت أوضح وعلاقة أكثر وعياً مع الجمهور الذي تسعى أعمالك للوصول إليه.' } },
  { slug: 'performance-marketing', number: '04', icon: '⌁', en: { title: 'Performance marketing', short: 'Make every campaign easier to learn from.', problem: 'Activity without useful tracking makes it hard to know which messages and channels deserve more investment.', approach: 'We connect campaign goals, audience, creative and measurement so performance can inform the next decision — not just a report.', deliverables: ['Campaign and funnel planning', 'Creative testing approach', 'Tracking requirements', 'Performance review framework'], value: 'A learning-led approach to campaigns and a clearer view of the actions behind results.' }, ar: { title: 'التسويق بالأداء', short: 'حملات تمنحك مساحة للتعلّم والتحسين.', problem: 'من دون قياس مفيد، يصعب معرفة الرسائل والقنوات التي تستحق استثماراً أكبر.', approach: 'نربط أهداف الحملة بالجمهور والإبداع والقياس، لتدعم النتائج القرار القادم لا التقرير فحسب.', deliverables: ['تخطيط الحملات ومسار التحويل', 'منهجية اختبار الأفكار', 'متطلبات التتبع والقياس', 'إطار لمراجعة الأداء'], value: 'نهج يتعلم من الحملات ويمنح رؤية أوضح لما يقود التفاعل والنتائج.' } },
  { slug: 'ecommerce-growth', number: '05', icon: '◇', en: { title: 'E-commerce growth', short: 'A considered experience from discovery to purchase.', problem: 'A good product can be overlooked when the shopping journey, product story and marketing do not work together.', approach: 'We look at the whole customer journey — from finding the product to feeling confident enough to buy — and identify practical opportunities to improve it.', deliverables: ['Customer journey review', 'Product and offer messaging', 'Acquisition and retention planning', 'Storefront experience recommendations'], value: 'A more coherent path to purchase and a practical roadmap for improving the customer experience.' }, ar: { title: 'نمو التجارة الإلكترونية', short: 'تجربة مدروسة من الاكتشاف حتى الشراء.', problem: 'قد لا يصل المنتج المناسب إلى جمهوره حين لا تتكامل رحلة التسوق وحكاية المنتج والتسويق.', approach: 'نراجع رحلة العميل كاملة، من اكتشاف المنتج حتى الاطمئنان للشراء، ونحدد فرصاً عملية لتطويرها.', deliverables: ['مراجعة رحلة العميل', 'رسائل المنتج والعروض', 'تخطيط الاستحواذ والاحتفاظ', 'توصيات لتجربة المتجر'], value: 'مسار شراء أكثر ترابطاً وخطوات عملية لتحسين تجربة العميل.' } },
  { slug: 'web-design', number: '06', icon: '▱', en: { title: 'Web design & development', short: 'Digital experiences built around real business needs.', problem: 'A website that is difficult to navigate or unclear in its offer can get between a business and its next customer.', approach: 'We organise information around what visitors need, shape an expressive visual system and build responsive experiences with a clear next step.', deliverables: ['Information architecture', 'UX and visual design', 'Responsive website development', 'Content and launch guidance'], value: 'A clear, considered digital home that helps people understand your offer and take action.' }, ar: { title: 'تصميم وتطوير المواقع', short: 'تجارب رقمية تبدأ من احتياجات العمل.', problem: 'قد يقف الموقع المربك أو غير الواضح بين أعمالك وبين عميلك القادم.', approach: 'ننظم المعلومات حول ما يحتاجه الزائر، ونصوغ تجربة بصرية مميزة، ونبني واجهات مرنة تقوده إلى خطوة واضحة.', deliverables: ['هيكلة المعلومات', 'تصميم التجربة والواجهة', 'تطوير موقع متجاوب', 'إرشادات المحتوى والإطلاق'], value: 'واجهة رقمية واضحة ومدروسة تساعد الناس على فهم عرضك واتخاذ خطوة.' } },
] as const;

export const project = {
  slug: 'brand-world-concept',
  category: { en: 'Brand world · Concept', ar: 'عالم العلامة · عمل مفاهيمي' },
  title: { en: 'A quieter kind of confidence', ar: 'ثقة تعبّر عن نفسها بهدوء' },
  summary: { en: 'A self-initiated concept exploring how a contemporary hospitality brand might express warmth through material, rhythm and restraint.', ar: 'تصور إبداعي مستقل يستكشف كيف يمكن لعلامة ضيافة معاصرة أن تعبّر عن الدفء عبر الخامة والإيقاع والبساطة.' },
  brief: { en: 'A conceptual brand direction — not commissioned client work and not a claim of completed commercial results.', ar: 'اتجاه تصوري للعلامة، وليس مشروعاً منفذاً لعميل أو ادعاءً بنتائج تجارية.' },
  objective: { en: 'Explore a distinctive visual language that balances a welcoming character with a considered, premium feel.', ar: 'استكشاف لغة بصرية مميزة تجمع بين الترحيب والإحساس المدروس بالجودة.' },
  output: { en: ['Brand positioning prompt', 'Identity art direction', 'Material and colour study', 'Digital campaign mock-up'], ar: ['تصور لمكانة العلامة', 'توجيه فني للهوية', 'دراسة للخامات والألوان', 'تصور لحملة رقمية'] },
};

export type ServiceSlug = 'interior' | 'exterior' | 'landscaping' | 'property-improvement' | 'handyman';

export const SERVICE_SLUGS: ServiceSlug[] = ['interior', 'exterior', 'landscaping', 'property-improvement', 'handyman'];

export interface ServiceSummary {
  slug: ServiceSlug;
  num: string;
  title: string;
  label: string;
  cta: string;
  desc: string;
  tags: string[];
}

// Used on the Home grid and the Services list page.
export const SERVICE_SUMMARIES: ServiceSummary[] = [
  {
    slug: 'interior',
    num: '01',
    title: 'Interior Services',
    label: 'Interior',
    cta: 'Explore interior services',
    desc: 'House cleaning, deep cleans, move-in/move-out and turnover cleaning for homes, offices and short-term rentals.',
    tags: ['House cleaning', 'Deep cleaning', 'Move-out cleaning', 'Airbnb turnovers'],
  },
  {
    slug: 'exterior',
    num: '02',
    title: 'Exterior Services',
    label: 'Exterior',
    cta: 'Explore exterior services',
    desc: 'Pressure washing, soft washing, roof and gutter cleaning that protects surfaces and keeps curb appeal sharp.',
    tags: ['Pressure washing', 'Roof cleaning', 'Gutter cleaning', 'Window cleaning'],
  },
  {
    slug: 'landscaping',
    num: '03',
    title: 'Landscaping',
    label: 'Landscaping',
    cta: 'Explore landscaping',
    desc: 'Lawn mowing, hedge trimming and seasonal cleanup that keeps your yard looking after itself year-round.',
    tags: ['Lawn mowing', 'Hedge trimming', 'Garden maintenance', 'Seasonal cleanup'],
  },
  {
    slug: 'property-improvement',
    num: '04',
    title: 'Property Improvement',
    label: 'Improvement',
    cta: 'Explore property improvement',
    desc: 'Driveway, walkway and patio installation, fence and deck repair, and hardscaping built to last.',
    tags: ['Paver installation', 'Patio installation', 'Fence repair', 'Retaining walls'],
  },
  {
    slug: 'handyman',
    num: '05',
    title: 'Handyman Services',
    label: 'Handyman',
    cta: 'Explore handyman services',
    desc: 'Drywall repair, furniture assembly, TV mounting and small fixes — one call for the list you keep putting off.',
    tags: ['Drywall repair', 'TV mounting', 'Furniture assembly', 'Minor repairs'],
  },
];

export function serviceHref(slug: ServiceSlug) {
  return `/services/${slug}`;
}

export interface ServiceDetail {
  num: string;
  title: string;
  heroLabel: string;
  intro: string;
  tagline: string;
  includes: { t: string; d: string }[];
  whyTitle: string;
  whyBody: string;
  outcomes: { n: string; title: string; desc: string }[];
}

// Full copy for each individual /services/[slug] page.
export const SERVICE_DETAILS: Record<ServiceSlug, ServiceDetail> = {
  interior: {
    num: '01',
    title: 'Interior Services',
    heroLabel: 'Interior clean in progress',
    intro:
      'Reliable interior cleaning for homes, offices and short-term rentals — from a weekly refresh to a full move-out deep clean, held to the same documented standard every visit.',
    tagline: 'Interior cleaning scoped to your space, not a one-size checklist',
    includes: [
      { t: 'House Cleaning', d: 'Recurring weekly, biweekly or monthly cleans that keep every room to a consistent standard.' },
      { t: 'Deep Cleaning', d: 'A top-to-bottom reset — baseboards, appliances, grout and the spots routine cleaning skips.' },
      { t: 'Move-In Cleaning', d: 'A full clean before you unpack, so day one starts in a spotless space.' },
      { t: 'Move-Out Cleaning', d: 'Detailed cleaning that satisfies landlord walkthroughs and helps secure your deposit.' },
      { t: 'Airbnb Turnover Cleaning', d: 'Fast, consistent resets between guests, timed to your booking calendar.' },
      { t: 'Office Cleaning', d: 'After-hours cleaning for offices sized to your floor plan and traffic.' },
      { t: 'Commercial Cleaning', d: 'Scheduled cleaning for retail and mixed-use spaces, keyed to your operating hours.' },
      { t: 'Post Construction Cleaning', d: 'Dust removal and detailed finishing after a renovation or build.' },
    ],
    whyTitle: 'A clean interior is the first thing people notice',
    whyBody:
      'Whether it’s a guest, a tenant or a new hire, the state of your space sets the tone before anyone says a word. We hold a documented standard and inspect against it every visit.',
    outcomes: [
      { n: '01', title: 'Consistent results', desc: 'The same standard met every visit, verified with photos so you don’t have to check yourself.' },
      { n: '02', title: 'Flexible scheduling', desc: 'One-time, recurring, or on-demand between bookings — whatever your space needs.' },
      { n: '03', title: 'Faster turnarounds', desc: 'Coordinated crews mean move-outs, turnovers and post-construction cleans finish on time.' },
    ],
  },
  exterior: {
    num: '02',
    title: 'Exterior Services',
    heroLabel: 'Exterior wash in progress',
    intro:
      'Pressure washing, soft washing and detailed exterior cleaning that protects your property’s surfaces and keeps curb appeal sharp year-round.',
    tagline: 'Exterior surfaces cleaned the right way for the material',
    includes: [
      { t: 'Pressure Washing', d: 'High-pressure cleaning for driveways, patios and siding that can handle it.' },
      { t: 'Soft Washing', d: 'Low-pressure, chemical-assisted cleaning for delicate surfaces like roofs and painted siding.' },
      { t: 'Roof Cleaning', d: 'Moss and algae removal that extends shingle life and protects your roof’s warranty.' },
      { t: 'Gutter Cleaning', d: 'Full debris removal so water drains properly and doesn’t back up under your roofline.' },
      { t: 'Window Cleaning', d: 'Interior and exterior glass cleaning, streak-free, for homes and storefronts.' },
      { t: 'Deck Cleaning', d: 'Wood and composite deck cleaning that lifts grime without damaging the surface.' },
      { t: 'Fence Cleaning', d: 'Restores wood and vinyl fencing, removing algae, mildew and grey weathering.' },
      { t: 'Driveway Cleaning', d: 'Removes oil stains, grime and moss from concrete, asphalt and pavers.' },
    ],
    whyTitle: 'Your exterior takes the most weather damage — and shows it first',
    whyBody:
      'Moss, algae and grime don’t just look bad — left alone they degrade roofing, siding and concrete. Regular exterior cleaning is the cheapest way to protect those surfaces.',
    outcomes: [
      { n: '01', title: 'Protected surfaces', desc: 'The right method for each material means real results without damage.' },
      { n: '02', title: 'Better curb appeal', desc: 'A clean exterior supports resale value and first impressions.' },
      { n: '03', title: 'Fewer costly repairs', desc: 'Removing moss and algae early prevents the water damage that leads to bigger bills.' },
    ],
  },
  landscaping: {
    num: '03',
    title: 'Landscaping',
    heroLabel: 'Grounds crew on site',
    intro:
      'Regular lawn care and seasonal grounds maintenance that keeps your yard looking after itself, all year long.',
    tagline: 'A landscaping program that runs on its own schedule',
    includes: [
      { t: 'Lawn Mowing', d: 'Scheduled mowing and edging that keeps your lawn even and tidy.' },
      { t: 'Weed Removal', d: 'Ongoing weed control in beds, walkways and lawn areas.' },
      { t: 'Hedge Trimming', d: 'Shaped, healthy hedges and shrubs cut on a regular cycle.' },
      { t: 'Yard Cleanup', d: 'Leaf, branch and debris removal so your yard always looks intentional.' },
      { t: 'Garden Maintenance', d: 'Weeding, deadheading and seasonal planting care for garden beds.' },
      { t: 'Seasonal Cleanup', d: 'Spring and fall resets that prep your property for the season ahead.' },
      { t: 'Mulching', d: 'Fresh mulch application that locks in moisture and finishes beds cleanly.' },
    ],
    whyTitle: 'A kept yard is a kept impression',
    whyBody:
      'Overgrown lawns and beds are the fastest way a property looks neglected. Scheduled landscaping keeps grounds consistently presentable without you having to think about it.',
    outcomes: [
      { n: '01', title: 'Always presentation-ready', desc: 'A set schedule means your grounds never fall behind.' },
      { n: '02', title: 'Healthier lawns and beds', desc: 'Consistent care catches issues — dry patches, weeds, overgrowth — before they spread.' },
      { n: '03', title: 'One less thing to manage', desc: 'A standing schedule means you’re never chasing a landscaper.' },
    ],
  },
  'property-improvement': {
    num: '04',
    title: 'Property Improvement',
    heroLabel: 'Installation in progress',
    intro:
      'Driveways, patios, walkways and retaining walls — installed or repaired with the same accountability as our recurring services.',
    tagline: 'Hardscaping and repairs delivered on a fixed scope',
    includes: [
      { t: 'Driveway Repair', d: 'Crack and surface repair that extends the life of asphalt and concrete driveways.' },
      { t: 'Paver Installation', d: 'Interlocking paver driveways and patios installed to proper base and drainage spec.' },
      { t: 'Walkway Installation', d: 'New pathways in paver, stone or concrete, built to match your property.' },
      { t: 'Patio Installation', d: 'Outdoor living spaces built from the ground up, from base prep to finish.' },
      { t: 'Fence Repair', d: 'Post, panel and gate repair that restores structure without a full replacement.' },
      { t: 'Deck Repair', d: 'Structural and surface repair that keeps decks safe and code-compliant.' },
      { t: 'Retaining Walls', d: 'Engineered retaining walls for grade changes, erosion control and garden beds.' },
      { t: 'Epoxy Flooring', d: 'Durable, seamless epoxy coatings for garages, basements and workshop floors.' },
      { t: 'Gravel Installation', d: 'Graded gravel surfaces for driveways, paths and drainage areas.' },
    ],
    whyTitle: 'Hardscaping is only as good as what’s underneath it',
    whyBody:
      'Most paver and driveway failures come down to poor base prep, not the materials. We build to spec the first time, so it doesn’t need redoing in two years.',
    outcomes: [
      { n: '01', title: 'Built to last', desc: 'Proper base and drainage work means installations hold up through winters, not just one season.' },
      { n: '02', title: 'Fixed-scope pricing', desc: 'A clear quote up front, with no surprise costs once work starts.' },
      { n: '03', title: 'One crew, start to finish', desc: 'The same team scopes, builds and finishes the job — no handoffs.' },
    ],
  },
  handyman: {
    num: '05',
    title: 'Handyman Services',
    heroLabel: 'Handyman on site',
    intro:
      'The small jobs that pile up on every to-do list — handled by a single, reliable handyman instead of a stack of one-off contractors.',
    tagline: 'One call for the list you keep putting off',
    includes: [
      { t: 'Drywall Repair', d: 'Patching holes, cracks and water damage to a finish you can’t see.' },
      { t: 'Door Repair', d: 'Fixes for sticking, misaligned or damaged interior and exterior doors.' },
      { t: 'Furniture Assembly', d: 'Flat-pack and ready-to-assemble furniture, built properly the first time.' },
      { t: 'TV Mounting', d: 'Secure wall mounting with cables run clean and hidden.' },
      { t: 'Caulking', d: 'Re-caulking around tubs, sinks, windows and trim to stop drafts and leaks.' },
      { t: 'Paint Touch-Ups', d: 'Scuffs, marks and small paint jobs matched to your existing colour.' },
      { t: 'Minor Home Repairs', d: 'The general fix-it list — hardware, fixtures, small carpentry — handled in one visit.' },
    ],
    whyTitle: 'Small jobs shouldn’t need a big search',
    whyBody:
      'Most handyman jobs are too small for a full contractor and too involved to DIY. We handle the list in one visit instead of you juggling five different people.',
    outcomes: [
      { n: '01', title: 'One visit, whole list', desc: 'Batch your small jobs into a single appointment instead of five separate calls.' },
      { n: '02', title: 'No job too small', desc: 'From a single TV mount to a full repair list, the same standard applies.' },
      { n: '03', title: 'Reliable follow-through', desc: 'The same technician who quotes the job is the one who shows up to do it.' },
    ],
  },
};

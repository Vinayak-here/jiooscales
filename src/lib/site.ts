export const site = {
  name: 'Siddarama Tech Solution',
  brand: 'Jioo Weighing System',
  tagline: 'Complete Weighing Solution for Retail, Dairy & Industrial Segments',
  phone: '9591076119',
  phoneDisplay: '+91 95910 76119',
  email: 'jiooscales@gmail.com',
  location: 'Tumkur, Karnataka, India',
  catalogUrl: '/jioo-catalog.pdf',
  whatsappUrl:
    'https://wa.me/919591076119?text=Hi%20Jioo%20Weighing%20System%2C%20I%27d%20like%20to%20enquire%20about%20your%20products.',
}

export const products = [
  {
    slug: 'tabletop-scale',
    name: 'Tabletop Scale',
    model: 'J-TT',
    image: 'tabletop',
    sizeLabel: 'Pan Size (mm)',
    models: [
      { size: '210x210', capacity: '10 kg', accuracy: '1 g' },
      { size: '250x250', capacity: '20 kg', accuracy: '2 g' },
      { size: '250x300', capacity: '30 kg', accuracy: '5 g' },
    ],
    features: [
      'Bright LED Display',
      'Easy to Use Interface',
      'Long Battery Backup',
    ],
    description:
      'Compact, accurate counter scale ideal for retail counters, dairy, jewellery and small parcels.',
    catalog: '/jioo-catalog.pdf',
  },
  {
    slug: 'portable-scale',
    name: 'Portable Scale',
    model: 'J-PF',
    image: 'portable',
    sizeLabel: 'Platform (mm)',
    models: [
      { size: '400 x 400', capacity: '100 / 200 kg', accuracy: '10 / 20 gm' },
      { size: '500 x 500', capacity: '200 / 300 kg', accuracy: '20 / 50 gm' },
      { size: '450 x 550', capacity: '200 / 300 kg', accuracy: '20 / 50 gm' },
      { size: '600 x 600', capacity: '300 / 600 kg', accuracy: '50 / 100 gm' },
    ],
    features: [
      'Lightweight design',
      'Long battery life',
      'Easy-carry handle',
      'Auto-off function',
    ],
    description:
      'Take-anywhere precision for couriers, dairy collection, farmers and on-site weighing.',
    catalog: '/jioo-catalog.pdf',
  },
  {
    slug: 'platform-scale',
    name: 'Platform Scale',
    model: 'J-PF',
    image: 'platform',
    sizeLabel: 'Platform (mm)',
    models: [
      { size: '400x400', capacity: '60/100 kg', accuracy: '10/20 gm' },
      { size: '450x550', capacity: '200/300 kg', accuracy: '20/50 gm' },
      { size: '600x600', capacity: '300/500 kg', accuracy: '50/100 gm' },
      { size: '750x750', capacity: '500/1000 kg', accuracy: '100 gm' },
    ],
    features: [
      'ABS Indicator',
      'RS-232 Option',
      'Kg/Ltr Option',
      'Bright LED Display',
      'Easy To Use',
    ],
    description:
      'Workhorse platform scale built for warehouses, mandis, dairies and shop floors.',
    catalog: '/jioo-catalog.pdf',
  },
  {
    slug: '4-load-cell-platform-scale',
    name: '4 Load Cell Platform Scale',
    model: 'J-PF',
    image: 'loadcell',
    sizeLabel: 'Platform (mm)',
    models: [
      { size: '700x700', capacity: '600 kg', accuracy: '100 gm' },
      { size: '1000x1000', capacity: '1000 kg', accuracy: '100 gm' },
      { size: '1200x1200', capacity: '1000 kg', accuracy: '100 gm' },
      { size: '1200x1200', capacity: '2000 kg', accuracy: '200 gm' },
      { size: '1500x1500', capacity: '5000 kg', accuracy: '500 gm' },
    ],
    materials: ['MS Top Plate', 'SS Top Plate'],
    features: [
      '4 high-precision load cells',
      'MS or SS top plate option',
      'Industrial indicator',
      'RS232 connectivity',
    ],
    description:
      'Precision-engineered industrial scale for heavy loads, drums and pallets.',
    catalog: '/jioo-catalog.pdf',
  },
] as const

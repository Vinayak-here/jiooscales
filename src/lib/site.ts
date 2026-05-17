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
    image: 'tabletop',
    capacity: '1g – 30kg',
    accuracy: '±1g',
    capacities: ['1g – 6kg', '1g – 15kg', '1g – 30kg', '5g – 50kg'],
    accuracies: ['±0.5g', '±1g', '±2g', '±5g'],
    features: [
      'Bright LED display',
      'Stainless steel pan',
      'Tare & zero functions',
      'Rechargeable battery',
    ],
    description:
      'Compact, accurate counter scale ideal for retail counters, dairy, jewellery and small parcels.',
    catalog: '/jioo-catalog.pdf',
  },
  {
    slug: 'portable-scale',
    name: 'Portable Scale',
    image: 'portable',
    capacity: 'Up to 50kg',
    accuracy: '±5g',
    capacities: ['Up to 20kg', 'Up to 30kg', 'Up to 50kg', 'Up to 100kg'],
    accuracies: ['±2g', '±5g', '±10g', '±20g'],
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
    image: 'platform',
    capacity: '100kg – 500kg',
    accuracy: '±20g',
    capacities: ['100kg', '200kg', '300kg', '500kg', '1000kg'],
    accuracies: ['±10g', '±20g', '±50g', '±100g'],
    features: [
      'Heavy-duty MS frame',
      'Anti-slip platform',
      'Detachable indicator',
      'Overload protection',
    ],
    description:
      'Workhorse platform scale built for warehouses, mandis, dairies and shop floors.',
    catalog: '/jioo-catalog.pdf',
  },
  {
    slug: '4-load-cell-platform-scale',
    name: '4 Load Cell Platform Scale',
    image: 'loadcell',
    capacity: '500kg – 3000kg',
    accuracy: '±100g',
    capacities: ['500kg', '1000kg', '2000kg', '3000kg', '5000kg'],
    accuracies: ['±50g', '±100g', '±200g', '±500g'],
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

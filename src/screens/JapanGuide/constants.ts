import { Location } from '../../types';

export const COLORS = {
  primary: '#1E3A8A', // Navy blue
  secondary: '#DC2626', // Red
  background: '#FFFFFF', // White
  lightGray: '#F3F4F6',
  darkGray: '#6B7280',
  success: '#10B981',
  warning: '#F59E0B',
} as const;

export const LOCATIONS: Location[] = [
  {
    id: 'kumamoto',
    name: 'Kumamoto',
    prefecture: 'Kumamoto Prefecture',
    recyclingRules: [
      {
        category: 'Paper',
        description: 'Newspapers, magazines, cardboard boxes',
        examples: ['Newspapers', 'Magazines', 'Cardboard boxes', 'Paper bags']
      },
      {
        category: 'Plastic',
        description: 'Plastic bottles, containers with recycling mark',
        examples: ['PET bottles', 'Plastic containers', 'Shopping bags', 'Food packaging']
      },
      {
        category: 'Burnable',
        description: 'Food waste, wood, cloth, small plastic items',
        examples: ['Food scraps', 'Tissues', 'Small wooden items', 'Cloth materials']
      },
      {
        category: 'Hard Plastic',
        description: 'Large plastic items, furniture, appliances',
        examples: ['Plastic chairs', 'Storage containers', 'Toys', 'Kitchen utensils']
      },
      {
        category: 'Metal',
        description: 'Cans, metal containers, small metal items',
        examples: ['Aluminum cans', 'Steel cans', 'Metal caps', 'Foil']
      },
      {
        category: 'Glass',
        description: 'Bottles and jars (separate by color)',
        examples: ['Glass bottles', 'Jars', 'Drinking glasses']
      }
    ]
  },
  {
    id: 'tokyo',
    name: 'Tokyo',
    prefecture: 'Tokyo Metropolis',
    recyclingRules: [
      {
        category: 'Burnable',
        description: 'Food waste, paper, wood, small plastics',
        examples: ['Food scraps', 'Paper waste', 'Wooden chopsticks', 'Small plastic items']
      },
      {
        category: 'Non-burnable',
        description: 'Metal, glass, ceramics, small electronics',
        examples: ['Metal items', 'Glass products', 'Ceramics', 'Small appliances']
      },
      {
        category: 'Recyclable',
        description: 'PET bottles, cans, glass bottles, paper',
        examples: ['PET bottles', 'Aluminum cans', 'Glass bottles', 'Newspapers']
      },
      {
        category: 'Oversized',
        description: 'Large items requiring special pickup',
        examples: ['Furniture', 'Large appliances', 'Bicycles', 'Mattresses']
      }
    ]
  },
  {
    id: 'osaka',
    name: 'Osaka',
    prefecture: 'Osaka Prefecture',
    recyclingRules: [
      {
        category: 'General Waste',
        description: 'Mixed burnable and non-burnable items',
        examples: ['Food waste', 'Paper', 'Small plastics', 'Metal items']
      },
      {
        category: 'Plastic Containers',
        description: 'Plastic packaging with recycling mark',
        examples: ['Food containers', 'Bottle caps', 'Plastic bags', 'Styrofoam trays']
      },
      {
        category: 'Cans & Bottles',
        description: 'Metal cans and glass bottles',
        examples: ['Aluminum cans', 'Steel cans', 'Glass bottles', 'Jars']
      },
      {
        category: 'PET Bottles',
        description: 'Plastic bottles with PET mark',
        examples: ['Drink bottles', 'Sauce bottles', 'Oil bottles']
      }
    ]
  },
  {
    id: 'kyoto',
    name: 'Kyoto',
    prefecture: 'Kyoto Prefecture',
    recyclingRules: [
      {
        category: 'Burnable',
        description: 'Organic waste and combustible materials',
        examples: ['Food waste', 'Paper', 'Wood', 'Natural fabrics']
      },
      {
        category: 'Non-burnable',
        description: 'Metal, glass, ceramics',
        examples: ['Metal items', 'Glass products', 'Ceramics', 'Small electronics']
      },
      {
        category: 'Plastic',
        description: 'All plastic items and containers',
        examples: ['Plastic bottles', 'Containers', 'Bags', 'Packaging']
      },
      {
        category: 'Paper',
        description: 'Recyclable paper products',
        examples: ['Newspapers', 'Magazines', 'Cardboard', 'Office paper']
      },
      {
        category: 'Large Items',
        description: 'Furniture and large appliances',
        examples: ['Furniture', 'Large appliances', 'Bicycles']
      }
    ]
  }
];

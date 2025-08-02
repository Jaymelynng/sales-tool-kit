// Mock data for the sales toolkit dashboard

export interface Location {
  id: string;
  custom_id: string;
  name: string;
}

export interface Lead {
  id: string;
  parent_name: string;
  child_name: string;
  email: string;
  phone: string;
  source: string;
  notes: string;
  status: string;
  temperature: string;
  follow_up_date: string;
  location_id: string;
}

export interface GymStats {
  total_leads: number;
  new_leads: number;
  successes: number;
  location_id?: string;
}

export interface Resource {
  id: string;
  type: 'scripts' | 'tips' | 'faqs';
  title: string;
  content: string;
  location_id: string;
}

export const mockLocations: Location[] = [
  { id: '1', custom_id: 'CCP', name: 'Capital Cedar Park' },
  { id: '2', custom_id: 'CPF', name: 'Capital Pflugerville' },
  { id: '3', custom_id: 'CRR', name: 'Capital Round Rock' },
  { id: '4', custom_id: 'RBA', name: 'Rowland Ballard A' },
  { id: '5', custom_id: 'RBK', name: 'Rowland Ballard K' },
  { id: '6', custom_id: 'HGA', name: 'HGA' },
  { id: '7', custom_id: 'OAS', name: 'Oasis' },
  { id: '8', custom_id: 'EST', name: 'Estrella' },
  { id: '9', custom_id: 'SGT', name: 'Scottsdale' },
  { id: '10', custom_id: 'TIG', name: 'Tiger' },
];

export const mockLeads: Lead[] = [
  {
    id: '1',
    parent_name: 'Sarah Johnson',
    child_name: 'Emma Johnson',
    email: 'sarah.johnson@email.com',
    phone: '555-0123',
    source: 'Thanksgiving Camp',
    notes: 'Interested in winter camp\nEmma loves beam\nHas previous gymnastics experience\nPrefers weekend classes',
    status: 'new',
    temperature: 'hot',
    follow_up_date: '2024-12-25',
    location_id: '1'
  },
  {
    id: '2',
    parent_name: 'Mike Chen',
    child_name: 'Alex Chen',
    email: 'mike.chen@email.com',
    phone: '555-0456',
    source: 'Website Inquiry',
    notes: 'Looking for beginner classes\nChild is 5 years old\nNo previous experience',
    status: 'contacted',
    temperature: 'warm',
    follow_up_date: '2024-12-23',
    location_id: '1'
  },
  {
    id: '3',
    parent_name: 'Lisa Rodriguez',
    child_name: 'Sofia Rodriguez',
    email: 'lisa.rodriguez@email.com',
    phone: '555-0789',
    source: 'Referral',
    notes: 'Referred by Maria Garcia\nInterested in competitive team\nChild has 2 years experience',
    status: 'scheduled',
    temperature: 'hot',
    follow_up_date: '2024-12-24',
    location_id: '2'
  },
  {
    id: '4',
    parent_name: 'David Wilson',
    child_name: 'Jake Wilson',
    email: 'david.wilson@email.com',
    phone: '555-0321',
    source: 'Facebook Ad',
    notes: 'Price sensitive\nLooking for recreational classes\nChild is very energetic',
    status: 'enrolled',
    temperature: 'warm',
    follow_up_date: '',
    location_id: '3'
  },
  {
    id: '5',
    parent_name: 'Jennifer Smith',
    child_name: 'Mia Smith',
    email: 'jennifer.smith@email.com',
    phone: '555-0654',
    source: 'Google Search',
    notes: 'First time parent\nChild is shy but interested\nLooking for small class sizes',
    status: 'lost',
    temperature: 'cold',
    follow_up_date: '',
    location_id: '1'
  }
];

export const mockStats: Record<string, GymStats> = {
  '1': { total_leads: 15, new_leads: 5, successes: 8, location_id: '1' },
  '2': { total_leads: 12, new_leads: 3, successes: 6, location_id: '2' },
  '3': { total_leads: 18, new_leads: 7, successes: 10, location_id: '3' },
  '4': { total_leads: 9, new_leads: 2, successes: 4, location_id: '4' },
  '5': { total_leads: 11, new_leads: 4, successes: 5, location_id: '5' },
  '6': { total_leads: 14, new_leads: 6, successes: 7, location_id: '6' },
  '7': { total_leads: 16, new_leads: 5, successes: 9, location_id: '7' },
  '8': { total_leads: 13, new_leads: 3, successes: 6, location_id: '8' },
  '9': { total_leads: 10, new_leads: 2, successes: 5, location_id: '9' },
  '10': { total_leads: 8, new_leads: 1, successes: 3, location_id: '10' },
};

export const mockResources: Resource[] = [
  {
    id: '1',
    type: 'scripts',
    title: 'Camp Follow-up Call Script',
    content: `Hi, this is [Your Name] from [Gym Name]! I'm reaching out because your family attended our Thanksgiving Camp, and we're excited to kick off some specials for our Winter Break Camps next week.

As a priority family, you can use the promo code THANKS15 to get 15% off camp registration through our portal. Or, if you prefer, you're also eligible for a special discount on one of our leotards—just give us a call to redeem that offer instead! You can register for all three camp days or just the days that work best for your schedule.

If you'd like to take advantage of the offers or have any questions, feel free to call me at [Phone Number], or use the THANKS15 code online to enroll. Again, that's [Phone Number] if you need anything. Hope to see you soon!`,
    location_id: '1'
  },
  {
    id: '2',
    type: 'scripts',
    title: 'New Lead Welcome Call',
    content: `Hello! This is [Your Name] from [Gym Name]. I noticed you recently inquired about our programs, and I wanted to personally reach out to welcome you and answer any questions you might have.

We offer a variety of classes for different age groups and skill levels. Based on what you've shared, I'd love to tell you more about our [specific program].

Would you like to schedule a tour of our facility or try a free trial class?`,
    location_id: '1'
  },
  {
    id: '3',
    type: 'tips',
    title: 'Building Parent Rapport',
    content: `- Always greet parents by name
- Remember details about their child
- Share specific positive observations
- Follow up within 24 hours of first contact
- Keep communication professional but warm`,
    location_id: '1'
  },
  {
    id: '4',
    type: 'tips',
    title: 'Converting Trial Classes',
    content: `- Give personalized attention during class
- Point out child's strengths
- Explain next steps in skill progression
- Have enrollment forms ready
- Offer limited-time enrollment incentives`,
    location_id: '1'
  },
  {
    id: '5',
    type: 'faqs',
    title: 'What age can my child start?',
    content: `We offer programs for children as young as 18 months in our parent-tot classes. For independent classes, children can start at age 3. Each age group has specially designed curriculum to match their developmental needs.`,
    location_id: '1'
  },
  {
    id: '6',
    type: 'faqs',
    title: 'What should my child wear?',
    content: `For girls: A leotard is recommended. For boys: Athletic shorts and a fitted t-shirt. All children should have bare feet for safety. No jewelry, and long hair must be tied back. We have appropriate attire available in our pro shop.`,
    location_id: '1'
  }
];

// Helper function to get aggregated stats for all locations
export function getAggregatedStats(): GymStats {
  const allStats = Object.values(mockStats);
  return {
    total_leads: allStats.reduce((sum, stat) => sum + stat.total_leads, 0),
    new_leads: allStats.reduce((sum, stat) => sum + stat.new_leads, 0),
    successes: allStats.reduce((sum, stat) => sum + stat.successes, 0),
  };
}
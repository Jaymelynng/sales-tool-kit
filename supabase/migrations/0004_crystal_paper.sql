/*
  # Add resources data

  1. New Data
    - Adds sample scripts, tips, and FAQs to the resources table
    - Links resources to the main location

  2. Content
    - Call scripts for different scenarios
    - Helpful tips for staff
    - Common FAQs and their answers
*/

-- Get the main location ID
WITH main_location AS (
  SELECT id FROM locations WHERE name = 'Main Location' LIMIT 1
)
INSERT INTO resources (location_id, type, title, content)
VALUES
  -- Scripts
  ((SELECT id FROM main_location), 'scripts', 'Camp Follow-up Call Script', 
   E'Hi, this is [Your Name] from [Gym Name]! I''m reaching out because your family attended our Thanksgiving Camp, and we''re excited to kick off some specials for our Winter Break Camps next week.\n\nAs a priority family, you can use the promo code THANKS15 to get 15% off camp registration through our portal. Or, if you prefer, you''re also eligible for a special discount on one of our leotards—just give us a call to redeem that offer instead! You can register for all three camp days or just the days that work best for your schedule.\n\nIf you''d like to take advantage of the offers or have any questions, feel free to call me at [Phone Number], or use the THANKS15 code online to enroll. Again, that''s [Phone Number] if you need anything. Hope to see you soon!'),
  
  ((SELECT id FROM main_location), 'scripts', 'New Lead Welcome Call', 
   E'Hello! This is [Your Name] from [Gym Name]. I noticed you recently inquired about our programs, and I wanted to personally reach out to welcome you and answer any questions you might have.\n\nWe offer a variety of classes for different age groups and skill levels. Based on what you''ve shared, I''d love to tell you more about our [specific program].\n\nWould you like to schedule a tour of our facility or try a free trial class?'),
  
  -- Tips
  ((SELECT id FROM main_location), 'tips', 'Building Parent Rapport', 
   E'- Always greet parents by name\n- Remember details about their child\n- Share specific positive observations\n- Follow up within 24 hours of first contact\n- Keep communication professional but warm'),
  
  ((SELECT id FROM main_location), 'tips', 'Converting Trial Classes', 
   E'- Give personalized attention during class\n- Point out child''s strengths\n- Explain next steps in skill progression\n- Have enrollment forms ready\n- Offer limited-time enrollment incentives'),
  
  -- FAQs
  ((SELECT id FROM main_location), 'faqs', 'What age can my child start?', 
   E'We offer programs for children as young as 18 months in our parent-tot classes. For independent classes, children can start at age 3. Each age group has specially designed curriculum to match their developmental needs.'),
  
  ((SELECT id FROM main_location), 'faqs', 'What should my child wear?', 
   E'For girls: A leotard is recommended. For boys: Athletic shorts and a fitted t-shirt. All children should have bare feet for safety. No jewelry, and long hair must be tied back. We have appropriate attire available in our pro shop.');
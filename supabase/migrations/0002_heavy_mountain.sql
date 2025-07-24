/*
  # Add camp follow-up script

  1. New Data
    - Adds a new script resource for camp follow-up calls
*/

INSERT INTO resources (id, location_id, type, title, content)
SELECT 
  gen_random_uuid(),
  locations.id,
  'scripts',
  'Camp Follow-up Call Script',
  E'Hi, this is [Your Name] from [Gym Name]! I''m reaching out because your family attended our Thanksgiving Camp, and we''re excited to kick off some specials for our Winter Break Camps next week.\n\nAs a priority family, you can use the promo code THANKS15 to get 15% off camp registration through our portal. Or, if you prefer, you''re also eligible for a special discount on one of our leotards—just give us a call to redeem that offer instead! You can register for all three camp days or just the days that work best for your schedule.\n\nIf you''d like to take advantage of the offers or have any questions, feel free to call me at [Phone Number], or use the THANKS15 code online to enroll. Again, that''s [Phone Number] if you need anything. Hope to see you soon!'
FROM locations;
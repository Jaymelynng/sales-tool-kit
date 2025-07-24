/*
  # Add sample lead data

  1. Changes
    - Add a sample lead to demonstrate the data structure
    - Add sample location if none exists
*/

-- First ensure we have at least one location
INSERT INTO locations (id, name)
SELECT 
  gen_random_uuid(),
  'Main Location'
WHERE NOT EXISTS (SELECT 1 FROM locations LIMIT 1);

-- Add a sample lead
INSERT INTO leads (
  location_id,
  parent_name,
  child_name,
  email,
  phone,
  source,
  notes,
  status,
  temperature,
  follow_up_date
)
SELECT
  (SELECT id FROM locations LIMIT 1),
  'Sarah Johnson',
  'Emma Johnson',
  'sarah.johnson@email.com',
  '555-0123',
  'Thanksgiving Camp',
  E'- Interested in winter camp\n- Emma loves beam\n- Has previous gymnastics experience\n- Prefers weekend classes',
  'new',
  'hot',
  CURRENT_DATE + INTERVAL '2 days';

-- Update stats for the location
INSERT INTO gym_stats (location_id, total_leads, new_leads)
SELECT 
  id,
  1,
  1
FROM locations
WHERE NOT EXISTS (SELECT 1 FROM gym_stats LIMIT 1);
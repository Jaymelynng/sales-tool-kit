/*
  # Fix locations table and add sample data

  1. Changes
    - Clear existing locations data
    - Ensure custom_id is properly set
    - Add new sample locations
*/

-- First, clear existing data to avoid conflicts
TRUNCATE TABLE locations CASCADE;

-- Now insert the locations with proper IDs
INSERT INTO locations (id, custom_id, name)
VALUES 
  (gen_random_uuid(), 'CCP', 'Capital Cedar Park'),
  (gen_random_uuid(), 'CPF', 'Capital Pflugerville'),
  (gen_random_uuid(), 'CRR', 'Capital Round Rock'),
  (gen_random_uuid(), 'RBA', 'Rowland Ballard A'),
  (gen_random_uuid(), 'RBK', 'Rowland Ballard K'),
  (gen_random_uuid(), 'HGA', 'HGA'),
  (gen_random_uuid(), 'OAS', 'Oasis'),
  (gen_random_uuid(), 'EST', 'Estrella'),
  (gen_random_uuid(), 'SGT', 'Scottsdale'),
  (gen_random_uuid(), 'TIG', 'Tiger');
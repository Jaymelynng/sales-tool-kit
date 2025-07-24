/*
  # Add custom IDs for gym locations
  
  1. Changes
    - Adds custom_id column to locations table
    - Inserts gym locations with custom identifiers
  
  2. New Data
    - Multiple gym locations with meaningful custom IDs
*/

-- Add custom_id column to locations table
ALTER TABLE locations 
ADD COLUMN custom_id text UNIQUE;

-- Insert locations with custom IDs
INSERT INTO locations (custom_id, name)
VALUES 
  ('CCP', 'Capital Cedar Park'),
  ('CPF', 'Capital Pflugerville'),
  ('CRR', 'Capital Round Rock'),
  ('RBA', 'Rowland Ballard A'),
  ('RBK', 'Rowland Ballard K'),
  ('HGA', 'HGA'),
  ('OAS', 'Oasis'),
  ('EST', 'Estrella'),
  ('SGT', 'Scottsdale'),
  ('TIG', 'Tiger');
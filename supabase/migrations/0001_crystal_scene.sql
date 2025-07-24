/*
  # Initial Schema for Sales Toolkit

  1. New Tables
    - `locations`
      - `id` (uuid, primary key)
      - `name` (text)
      - `created_at` (timestamp)
    
    - `leads`
      - `id` (uuid, primary key)
      - `location_id` (uuid, foreign key)
      - `parent_name` (text)
      - `child_name` (text)
      - `email` (text)
      - `phone` (text)
      - `source` (text)
      - `notes` (text)
      - `status` (text)
      - `temperature` (text)
      - `follow_up_date` (date)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

    - `gym_stats`
      - `id` (uuid, primary key)
      - `location_id` (uuid, foreign key)
      - `total_leads` (integer)
      - `new_leads` (integer)
      - `successes` (integer)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

    - `resources`
      - `id` (uuid, primary key)
      - `location_id` (uuid, foreign key)
      - `type` (text) -- 'script', 'tip', 'faq'
      - `title` (text)
      - `content` (text)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users to access their location's data
*/

-- Create tables
CREATE TABLE locations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  location_id uuid REFERENCES locations(id) NOT NULL,
  parent_name text NOT NULL,
  child_name text NOT NULL,
  email text,
  phone text,
  source text,
  notes text,
  status text NOT NULL DEFAULT 'new',
  temperature text NOT NULL DEFAULT 'warm',
  follow_up_date date,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

CREATE TABLE gym_stats (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  location_id uuid REFERENCES locations(id) NOT NULL,
  total_leads integer DEFAULT 0,
  new_leads integer DEFAULT 0,
  successes integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

CREATE TABLE resources (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  location_id uuid REFERENCES locations(id) NOT NULL,
  type text NOT NULL,
  title text NOT NULL,
  content text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE locations ENABLE ROW LEVEL SECURITY;
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE gym_stats ENABLE ROW LEVEL SECURITY;
ALTER TABLE resources ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can read locations"
  ON locations
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Users can read their location's leads"
  ON leads
  FOR ALL
  TO authenticated
  USING (location_id IN (
    SELECT id FROM locations
  ));

CREATE POLICY "Users can read their location's stats"
  ON gym_stats
  FOR ALL
  TO authenticated
  USING (location_id IN (
    SELECT id FROM locations
  ));

CREATE POLICY "Users can read their location's resources"
  ON resources
  FOR ALL
  TO authenticated
  USING (location_id IN (
    SELECT id FROM locations
  ));
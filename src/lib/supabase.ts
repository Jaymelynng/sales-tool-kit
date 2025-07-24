import { createClient } from '@supabase/supabase-js';
import { Database } from './database.types';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

console.log('Initializing Supabase client with:', {
  url: supabaseUrl,
  hasKey: !!supabaseKey
});

export const supabase = createClient<Database>(supabaseUrl, supabaseKey);
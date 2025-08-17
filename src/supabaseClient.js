import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://gcudhrrrizgrmuuzrmht.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdjdWRocnJyaXpncm11dXpybWh0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU0NzAwNTUsImV4cCI6MjA3MTA0NjA1NX0.9e952txyAO4yFdGN1IvtdFzLSleXxU22w6JXe_M-JO8';

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

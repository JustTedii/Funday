import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://gppomelpzuqzxqpfnptj.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdwcG9tZWxwenVxenhxcGZucHRqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg4MTE0ODgsImV4cCI6MjAzNDM4NzQ4OH0.JX-hvnW0KDalXYJVjw0qtwGQzpYTuXR3ssPK-OawRe8';
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase
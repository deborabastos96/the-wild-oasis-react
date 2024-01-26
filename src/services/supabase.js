import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://wsliqsmzwhluuknikpyr.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndzbGlxc216d2hsdXVrbmlrcHlyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ4NDg4MjIsImV4cCI6MjAyMDQyNDgyMn0.5IcZBVjfZwx_yXeHErwd2cJX0YbAcCzaKKYodVC1u_w";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

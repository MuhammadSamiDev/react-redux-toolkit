import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
export const supabase = createClient(
  "https://tseczqavatcootwnrkel.supabase.co/",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRzZWN6cWF2YXRjb290d25ya2VsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk1OTA2ODksImV4cCI6MjA0NTE2NjY4OX0.ELRAM-vZjy4DlpOV0vSXU_pLEzD8wRk-zTVwynm8Suk"
);

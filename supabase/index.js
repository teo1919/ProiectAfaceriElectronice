import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  'https://kfscpndyxpivcxkxrgoe.supabase.co',
   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtmc2NwbmR5eHBpdmN4a3hyZ29lIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5OTM3Njg2MCwiZXhwIjoyMDE0OTUyODYwfQ.2YuxT14hl-RgCqu_69Mk_SuGEgSiFls6XgJmIPdAMmk'
  );

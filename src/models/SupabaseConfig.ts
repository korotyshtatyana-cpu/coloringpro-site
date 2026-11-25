import type { SupabaseClient } from '@supabase/supabase-js';

let clientPromise: Promise<SupabaseClient | null> | null = null;

/**
 * Lazily loads the Supabase SDK and returns the shared client, or null when
 * VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY are missing from .env.
 */
export function getSupabaseClient(): Promise<SupabaseClient | null> {
  if (!clientPromise) {
    clientPromise = (async () => {
      const url = import.meta.env.VITE_SUPABASE_URL;
      const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
      if (!url || !anonKey) {
        return null;
      }

      const { createClient } = await import('@supabase/supabase-js');
      return createClient(url, anonKey);
    })();
  }

  return clientPromise;
}

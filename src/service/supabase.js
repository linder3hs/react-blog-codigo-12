import { createClient } from "@supabase/supabase-js";

// para conectarnos a supabase vamos a requerir 2 variables
const url = "https://wthbwvqyjsbgjazhffkr.supabase.co";
const publicKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind0aGJ3dnF5anNiZ2phemhmZmtyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODExNzk5MTAsImV4cCI6MTk5Njc1NTkxMH0.XnZNfq3Rut2KJrgrIjv8Lou84hD2NjCWK-U9yRZa2b0";

const supabase = createClient(url, publicKey);

// Funcion para poder crear una cuenta
export async function signUp(user) {
  const { data, error } = await supabase.auth.signUp(user);

  if (error) {
    console.log("error", error);
    return {
      ok: false,
      error,
    };
  }

  return {
    ok: true,
    data,
  };
}

// Funcion para iniciar session
export async function signIn(user) {
  const { data, error } = await supabase.auth.signInWithPassword(user);

  if (error) {
    console.log("error", error);
    return {
      ok: false,
      error,
    };
  }

  return {
    ok: true,
    data,
  };
}

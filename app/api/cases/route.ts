import { createClient } from '@supabase/supabase-js'

export async function GET() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,  // <- this IS your friend's API URL
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY! // <- this IS your friend's anon key
  )
  const { data } = await supabase.from('cases').select('*')
  return Response.json(data)
}

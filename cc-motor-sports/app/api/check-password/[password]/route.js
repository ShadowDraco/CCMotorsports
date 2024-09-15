export async function POST(req, params) {
  //const body = await req.json()
  const password = params.params.password

  return new Response(JSON.stringify(password === process.env.PREVIEW_PASSWORD))
}

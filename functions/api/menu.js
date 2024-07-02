export async function onRequest(context) {
    const input = { prompt: "What is a cat cafe" }
  
    const answer = await context.env.Baristas.run('@cf/meta/llama-3-8b-instruct', input);
  
    return Response.json(answer.Response);
}
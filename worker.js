import { checkTrialAccess, onRequestPost } from "./functions/api/analyze.js";

export default {
  async fetch(request, env) {
    if (new URL(request.url).pathname === "/api/trial-access" && request.method === "POST") {
      return (await checkTrialAccess(request, env)) || new Response(null, {status: 204, headers: {"Cache-Control": "no-store"}});
    }
    if (new URL(request.url).pathname === "/api/analyze") {
      if (request.method !== "POST") {
        return new Response("Método no permitido", { status: 405, headers: { Allow: "POST" } });
      }
      return onRequestPost({ request, env });
    }
    return env.ASSETS.fetch(request);
  }
};

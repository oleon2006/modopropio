import { onRequestPost } from "./functions/api/analyze.js";

export default {
  fetch(request, env) {
    if (new URL(request.url).pathname === "/api/analyze") {
      if (request.method !== "POST") {
        return new Response("Método no permitido", { status: 405, headers: { Allow: "POST" } });
      }
      return onRequestPost({ request, env });
    }
    return env.ASSETS.fetch(request);
  }
};

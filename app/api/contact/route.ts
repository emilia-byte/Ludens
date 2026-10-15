// Recibe el formulario de contacto y lo envía por email con Resend (https://resend.com).
// Variables de entorno (en Vercel: Settings → Environment Variables):
//   RESEND_API_KEY      clave de la API de Resend (obligatoria)
//   CONTACT_FROM_EMAIL  remitente con el dominio verificado en Resend, por ejemplo
//                       "Web Ludens <web@ludenssa.com>" (obligatoria)
//   CONTACT_TO_EMAIL    a quién llegan los mensajes (opcional, por defecto el email de contacto del sitio)

import { site } from "@/content/site";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const MAX_LENGTH = { name: 120, email: 200, company: 160, message: 5000 };

function field(value: unknown, max: number) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

// Evita saltos de línea en el asunto del email.
function singleLine(value: string) {
  return value.replace(/[\r\n]+/g, " ");
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "invalid-body" }, { status: 400 });
  }

  // Campo trampa para bots: las personas no lo ven ni lo completan.
  if (field(body.website, 200)) return Response.json({ ok: true });

  const name = field(body.name, MAX_LENGTH.name);
  const email = field(body.email, MAX_LENGTH.email);
  const company = field(body.company, MAX_LENGTH.company);
  const message = field(body.message, MAX_LENGTH.message);
  const lang = field(body.lang, 5);

  if (!name || !EMAIL_PATTERN.test(email) || message.length < 10) {
    return Response.json({ error: "invalid-fields" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL || site.contact.email;

  if (!apiKey || !from) {
    if (process.env.NODE_ENV === "development") {
      // En desarrollo, sin claves, se simula el envío para poder revisar el formulario.
      console.info("[contacto] Envío simulado (falta configurar Resend):", { name, email, company, message });
      return Response.json({ ok: true });
    }
    return Response.json({ error: "not-configured" }, { status: 503 });
  }

  const subject = singleLine(`Nuevo contacto desde la web: ${name}${company ? ` (${company})` : ""}`);
  const text = [
    `Nombre: ${name}`,
    `Email: ${email}`,
    `Empresa: ${company || "-"}`,
    `Idioma de la página: ${lang || "-"}`,
    "",
    message,
  ].join("\n");

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({ from, to: [to], reply_to: email, subject, text }),
  });

  if (!response.ok) {
    console.error("[contacto] Resend respondió", response.status, await response.text());
    return Response.json({ error: "send-failed" }, { status: 502 });
  }

  return Response.json({ ok: true });
}

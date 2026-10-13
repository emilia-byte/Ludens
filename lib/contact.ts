// Envío del formulario de contacto.
// TODO: conectar el envío. Opciones sin backend propio:
//   - Formspree / Web3Forms: definir NEXT_PUBLIC_CONTACT_ENDPOINT con la URL que te dan.
//   - En Vercel: crear un Route Handler (app/api/contact/route.ts) y apuntar el endpoint ahí.

export type ContactPayload = {
  name: string;
  email: string;
  company: string;
  message: string;
};

export type ContactResult = "sent" | "not-configured";

const ENDPOINT = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT;

export async function submitContact(payload: ContactPayload): Promise<ContactResult> {
  if (!ENDPOINT) {
    if (process.env.NODE_ENV === "development") {
      // En desarrollo simulamos un envío exitoso para poder revisar los estados del formulario.
      console.info("[contacto] Envío simulado (sin endpoint configurado):", payload);
      await new Promise((resolve) => setTimeout(resolve, 600));
      return "sent";
    }
    return "not-configured";
  }

  const response = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(payload),
  });
  if (!response.ok) throw new Error(`El envío falló con estado ${response.status}`);
  return "sent";
}

// Política de cookies de Ludens SA.
// TODO: BORRADOR. Debe ser revisado por un asesor legal antes de publicar.
// Para editar: cambiá el texto de abajo. Los estilos los aplica app/politica-de-cookies/page.tsx.

import { site } from "./site";

export const cookiePolicyMeta = {
  title: "Política de cookies",
  description: `Cómo ${site.legalName} usa cookies y tecnologías similares en su sitio web.`,
  lastUpdated: "13 de octubre de 2026",
  draft: true,
  draftNote:
    "este texto es una versión preliminar y está pendiente de revisión legal. No constituye asesoramiento jurídico.",
};

export function CookiePolicy() {
  const { legalName, contact } = site;
  return (
    <>
      <p>
        En {legalName} (en adelante, “Ludens”) usamos cookies y tecnologías similares en este sitio
        web. Esta política explica qué son, cuáles usamos, para qué y cómo podés aceptarlas,
        rechazarlas o cambiar tu elección en cualquier momento.
      </p>

      <h2>¿Qué son las cookies?</h2>
      <p>
        Las cookies son pequeños archivos de texto que un sitio web guarda en tu navegador cuando lo
        visitás. Sirven, por ejemplo, para recordar tus preferencias o para obtener información
        estadística sobre cómo se usa el sitio. También usamos el almacenamiento local del navegador
        (<em>localStorage</em>), que funciona de forma similar.
      </p>

      <h2>Qué cookies usamos</h2>
      <table>
        <thead>
          <tr>
            <th scope="col">Tipo</th>
            <th scope="col">Finalidad</th>
            <th scope="col">Duración</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <strong>Esenciales</strong>
              <br />
              <code>ludens-cookie-consent</code> (almacenamiento local)
            </td>
            <td>
              Guardar tu elección sobre las cookies para no volver a preguntarte en cada visita. No
              requieren consentimiento porque son necesarias para el funcionamiento del sitio.
            </td>
            <td>Hasta que la borres o cambies tu elección</td>
          </tr>
          <tr>
            <td>
              <strong>Analítica</strong>
              <br />
              Google Analytics (<code>_ga</code>, <code>_ga_*</code>)
            </td>
            <td>
              Medir de forma agregada cuántas personas visitan el sitio y qué secciones consultan,
              para mejorarlo. Solo se activan si las aceptás.
            </td>
            <td>Hasta 2 años</td>
          </tr>
        </tbody>
      </table>
      <p>
        No usamos cookies publicitarias ni vendemos información sobre tus visitas a terceros.
      </p>

      <h2>Cómo gestionar tu consentimiento</h2>
      <p>
        La primera vez que visitás el sitio te mostramos un aviso para que aceptes o rechaces las
        cookies no esenciales. Hasta que elijas, solo funcionan las esenciales. Podés cambiar tu
        decisión en cualquier momento desde el enlace <strong>“Configurar cookies”</strong> en el pie
        de página.
      </p>
      <p>
        También podés bloquear o borrar las cookies desde la configuración de tu navegador. Si lo
        hacés, es posible que algunas funciones del sitio no se comporten como esperás.
      </p>

      <h2>Terceros</h2>
      <p>
        Si aceptás las cookies de analítica, Google LLC puede tratar datos de navegación según su
        propia política de privacidad. Los datos se usan de forma agregada y con la dirección IP
        anonimizada.
      </p>

      <h2>Marco legal</h2>
      <p>
        Tratamos los datos personales de acuerdo con la Ley N.º 18.331 de Protección de Datos
        Personales de la República Oriental del Uruguay y su normativa complementaria. Podés ejercer
        tus derechos de acceso, rectificación, actualización, inclusión y supresión escribiéndonos a
        los datos de contacto que figuran abajo.
      </p>

      <h2>Cambios en esta política</h2>
      <p>
        Podemos actualizar esta política para reflejar cambios en el sitio o en la normativa. Si el
        cambio es importante, te volveremos a pedir tu consentimiento.
      </p>

      <h2>Contacto</h2>
      <p>
        {legalName}
        <br />
        {contact.address}, {contact.city}
        <br />
        Tel: <a href={contact.phoneHref}>{contact.phoneDisplay}</a>
        <br />
        Email: <a href={`mailto:${contact.email}`}>{contact.email}</a>
      </p>
    </>
  );
}

import { createTransport } from "../config/nodemailer.js";

export async function sendEmailVerification(email, token) {
  const transport = createTransport(
    process.env.MAILTRAP_HOST,
    process.env.MAILTRAP_PORT,
    process.env.MAILTRAP_USER,
    process.env.MAILTRAP_PASS
  );
  const info = await transport.sendMail({
    from: 'App Salon <MJWqz@example.com>',
    to: email,
    subject: "App Sañon - Verificar correo electronico",
    text: "Verificar correo electronico",
    html: `
        <h1>Verificar correo electronico</h1>
        <p>Haga click en el siguiente enlace para verificar su correo electronico</p>
        <a href="${ process.env.FRONTEND_URL }/auth/confirmar-cuenta/${token}">Verificar correo electronico</a>

        `,
  });

  console.log(`Mensaje enviado: ${info.messageId}`);

  return;
}

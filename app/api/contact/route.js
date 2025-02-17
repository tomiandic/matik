import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json(); // Parse the request body
    const { name, email, tel, message } = body;
    console.log("env vars", process.env.EMAIL_RECEIVER, process.env.EMAIL_PASS);
    // Nodemailer configuration
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_RECEIVER, // Your email address from env
        pass: process.env.EMAIL_PASS, // App password from env
      },
    });

    // Send email
    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_RECEIVER, // The email address receiving messages
      subject: `Novi upit za Matik od ${name}`,
      text: `Imate novu poruku sa matik weba:\n\nIme pošiljatelja: ${name}\nEmail: ${email}\nBroj telefona: ${tel}\nPoruka: ${message}`,
    });

    // Respond with success
    return new Response(
      JSON.stringify({ message: "Email sent successfully!" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Failed to send email." }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

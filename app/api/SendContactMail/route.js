import { NextResponse } from "next/server";
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  pool: true,
  host: "smtp.ionos.fr",
  port: 465,
  secure: true, // use TLS
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});
const ccEmails = [process.env.EMAIL, "boukili.dg@gmail.com"];
// <boukili.dg@gmail.com>
export async function POST(request) {
  try {
    const requestBody = await request.text(); // Log the raw request body
    const { to, subject, html } = JSON.parse(requestBody); // Parse the request body
    console.log("requet body =>" ,requestBody)
    const mailOptions = {
      from: `"EDUKALIS contact" <${process.env.EMAIL}>`,
      to,
      cc: ccEmails.join(","),
      bcc : 'yelmouss.gmc@gmail.com',
      subject,
      html,
    };
    await transporter.sendMail(mailOptions);
    return NextResponse.json("order contact sent", { status: 200 });
  } catch (error) {
    console.error("Error =>", error);
    if (error instanceof SyntaxError) {
      return NextResponse.json(
        { error: "Invalid JSON format in request body" },
        { status: 400 }
      );
    } else {
      return NextResponse.json(
        { error: "Failed to send contact email" },
        { status: 500 }
      );
    }
  }
}

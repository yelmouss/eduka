import { NextResponse } from "next/server";
const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  //   host: "mail.touzar.ma",
  //   port: 587,
  //   secure: false,
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS,
  },
  //   tls: {
  //     rejectUnauthorized: false,
  //   },
});
const ccEmails = [
  process.env.EMAIL,
  "yelmouss.gmc@gmail.com",
  "abdelaziz.elmoussawi@gmail.com",
];
export async function POST(request) {
  try {
    const requestBody = await request.text(); // Log the raw request body
    const { to, subject, html } = JSON.parse(requestBody); // Parse the request body
    const mailOptions = {
      from: `"Touzar contact" <${process.env.EMAIL}>`,
      to,
      cc: ccEmails.join(","),
      subject,
      html,
    };
    await transporter.sendMail(mailOptions);
    return NextResponse.json("order mail sent", { status: 200 });
  } catch (error) {
    console.error("Error sending order email:", error);
    if (error instanceof SyntaxError) {
      return NextResponse.json(
        { error: "Invalid JSON format in request body" },
        { status: 400 }
      );
    } else {
      return NextResponse.json(
        { error: "Failed to send order email" },
        { status: 500 }
      );
    }
  }
}

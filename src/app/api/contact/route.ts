import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    // Check if required environment variables are set
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('Email configuration missing: EMAIL_USER or EMAIL_PASS not set');
      return NextResponse.json({ 
        success: false, 
        error: 'Email service not configured' 
      }, { status: 500 });
    }

    // Configure Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER, // Use configured email as sender
      to: process.env.EMAIL_TO || process.env.EMAIL_USER, // Your email
      replyTo: email, // Set reply-to as the contact form email
      subject: `New Contact Form Message from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Message: ${message}
      `,
      html: `
<h2>New Contact Form Message</h2>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Message:</strong></p>
<p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email send error:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to send email. Please try again later.' 
    }, { status: 500 });
  }
} 
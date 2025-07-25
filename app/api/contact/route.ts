import { NextRequest, NextResponse } from 'next/server';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  location: string;
  message: string;
  honeypot: string;
  recaptchaToken: string;
}

// Verify reCAPTCHA token with Google
async function verifyRecaptcha(token: string): Promise<boolean> {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  
  if (!secretKey) {
    console.error('RECAPTCHA_SECRET_KEY not configured');
    return false;
  }

  try {
    const response = await fetch('https://recaptchaenterprise.googleapis.com/v1/projects/YOUR_PROJECT_ID/assessments?key=' + secretKey, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        event: {
          token: token,
          expectedAction: 'submit',
          siteKey: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
        },
      }),
    });

    const data = await response.json();
    
    // Check if the token is valid and has a good score
    return data.tokenProperties?.valid && data.riskAnalysis?.score >= 0.5;
  } catch (error) {
    console.error('reCAPTCHA verification error:', error);
    return false;
  }
}

// Send email notification
async function sendEmailNotification(formData: ContactFormData): Promise<boolean> {
  // In a production environment, you would integrate with an email service like:
  // - SendGrid
  // - Mailgun
  // - AWS SES
  // - Postmark
  
  // For now, we'll log the form submission
  console.log('New contact form submission:', {
    name: formData.name,
    email: formData.email,
    phone: formData.phone,
    service: formData.service,
    location: formData.location,
    message: formData.message,
    timestamp: new Date().toISOString(),
  });

  // In production, send email here
  // Example with SendGrid:
  // const sgMail = require('@sendgrid/mail');
  // sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  // const msg = {
  //   to: 'info@customkitchensbylopez.com',
  //   from: 'noreply@customkitchensbylopez.com',
  //   subject: `New Contact Form Submission from ${formData.name}`,
  //   text: `...`,
  //   html: `...`,
  // };
  // await sgMail.send(msg);

  return true;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    // Check honeypot field (spam prevention)
    if (body.honeypot) {
      return NextResponse.json(
        { error: 'Invalid submission' },
        { status: 400 }
      );
    }

    // Validate required fields
    const requiredFields = ['name', 'email', 'phone', 'service', 'location', 'message', 'recaptchaToken'];
    for (const field of requiredFields) {
      if (!body[field as keyof ContactFormData]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    // Verify reCAPTCHA
    const isValidRecaptcha = await verifyRecaptcha(body.recaptchaToken);
    if (!isValidRecaptcha) {
      return NextResponse.json(
        { error: 'reCAPTCHA verification failed' },
        { status: 400 }
      );
    }

    // Send email notification
    const emailSent = await sendEmailNotification(body);
    if (!emailSent) {
      return NextResponse.json(
        { error: 'Failed to send notification' },
        { status: 500 }
      );
    }

    // Return success response
    return NextResponse.json(
      { 
        success: true,
        message: 'Thank you for your message. We will contact you within 24 hours.' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
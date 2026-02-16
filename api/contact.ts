import { Resend } from 'resend';

interface VercelRequest {
  method?: string;
  body?: {
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
  };
}

interface VercelResponse {
  status: (code: number) => VercelResponse;
  json: (data: any) => void;
}

export default async function handler(
  req: VercelRequest,
  res: VercelResponse,
) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const resendApiKey = process.env.RESEND_API_KEY;
    
    if (!resendApiKey) {
      console.error('Resend API key is missing');
      return res.status(500).json({ message: 'Email service not configured' });
    }

    const resend = new Resend(resendApiKey);
    const { name, email, subject, message } = req.body || {};

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // Basic HTML escaping function to prevent XSS
    const escapeHtml = (text: string) => {
      const map: Record<string, string> = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;',
      };
      return text.replace(/[&<>"']/g, (m) => map[m]);
    };

    // Configure email addresses
    // For production: Verify your domain at resend.com/domains and set RESEND_FROM_EMAIL
    // Example: RESEND_FROM_EMAIL=UrbanUplink Contact <contact@urbanuplink.in>
    const fromEmail = process.env.RESEND_FROM_EMAIL || 'UrbanUplink Contact <onboarding@resend.dev>';
    
    // Recipient email - can be configured or defaults to admin email
    // Set RESEND_TO_EMAIL in .env to send to a specific address, or it will use admin@urbanuplink.ai
    const recipientEmail = process.env.RESEND_TO_EMAIL || 'admin@urbanuplink.ai';

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [recipientEmail],
      subject: subject ? `New Contact: ${escapeHtml(subject)}` : 'New Contact Form Submission',
      replyTo: email, // This allows you to reply directly to the form submitter
      html: `
        <h3>New Message from Contact Form</h3>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        ${subject ? `<p><strong>Subject:</strong> ${escapeHtml(subject)}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message)}</p>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return res.status(500).json({ 
        message: 'Failed to send email',
        error: error.message || 'Unknown error'
      });
    }

    return res.status(200).json({ success: true, data });
  } catch (error: any) {
    console.error('Server error:', error);
    return res.status(500).json({ 
      message: error.message || 'Internal server error' 
    });
  }
}

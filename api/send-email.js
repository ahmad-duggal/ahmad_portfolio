import { Resend } from 'resend'

export default async function handler(req, res) {
  // CORS configuration
  res.setHeader('Access-Control-Allow-Credentials', true)
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  )

  // Handle OPTIONS request for CORS preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed. Only POST requests are accepted.' })
  }

  // Graceful API Key check to prevent fatal Vercel 500 errors
  if (!process.env.RESEND_API_KEY) {
    console.error('Fatal: Missing RESEND_API_KEY environment variable.')
    return res.status(500).json({ success: false, message: 'Server configuration error: Missing Resend API Key.' })
  }

  const resend = new Resend(process.env.RESEND_API_KEY)

  try {
    const { name, email, subject, message } = req.body
    console.log('Received payload:', { name, email, subject: subject || '(none)' })

    if (!name || !email || !message) {
      console.error('Validation Error: Missing required fields.', { name: !!name, email: !!email, message: !!message })
      return res.status(400).json({ success: false, message: 'Name, email, and message are required.' })
    }

    const dynamicSubject = subject ? `Portfolio Contact: ${subject}` : 'New Portfolio Contact Message'

    const emailHtml = `
      <div style="font-family: system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
        <h2 style="color: #111827; margin-top: 0; margin-bottom: 24px; text-align: center; font-weight: 600;">
          New Portfolio Contact Request
        </h2>
        
        <div style="margin-bottom: 24px;">
          <p style="margin: 0 0 8px; color: #374151;"><strong>Name:</strong> ${name}</p>
          <p style="margin: 0 0 8px; color: #374151;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #4f46e5; text-decoration: none;">${email}</a></p>
          <p style="margin: 0 0 8px; color: #374151;"><strong>Subject:</strong> ${subject || 'No subject provided'}</p>
        </div>

        <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 24px 0;" />
        
        <h3 style="color: #111827; margin-top: 0; margin-bottom: 12px; font-size: 16px;">
          Message Content:
        </h3>
        
        <div style="background-color: #f9fafb; border: 1px solid #f3f4f6; border-radius: 6px; padding: 16px; color: #4b5563; line-height: 1.6;">
          ${message.replace(/\n/g, '<br/>')}
        </div>
        
        <div style="margin-top: 32px; font-size: 12px; color: #9ca3af; text-align: center;">
          This message was sent from your portfolio contact form.
        </div>
      </div>
    `

    console.log('Attempting to dispatch email via Resend...')
    
    const data = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: 'duggalmuhammadahmad@gmail.com',
      reply_to: email,
      subject: dynamicSubject,
      html: emailHtml,
    })

    if (data.error) {
      console.error('Resend API Delivery Error:', data.error)
      return res.status(500).json({ success: false, message: 'Failed to send email', error: data.error })
    }

    console.log('Email dispatched successfully! Resend ID:', data.data?.id)
    return res.status(200).json({ success: true, message: 'Email sent successfully', data })

  } catch (error) {
    console.error('Critical Server execution error:', error)
    return res.status(500).json({ success: false, message: 'Failed to send email', error: error.message || 'Internal Server Error' })
  }
}

import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { Resend } from 'resend'

dotenv.config({ path: './server/.env' })

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

const resend = new Resend(process.env.RESEND_API_KEY)

app.post('/send-email', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body

    if (!name || !email || !message) {
      return res.status(400).json({ success: false, error: 'Name, email, and message are required.' })
    }

    const emailHtml = `
      <h3>New Contact Message from Portfolio</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject || 'No subject provided'}</p>
      <h4>Message:</h4>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `

    const data = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: 'duggalmuhammadahmad@gmail.com',
      replyTo: email,
      subject: 'New Portfolio Contact Message',
      html: emailHtml,
    })

    if (data.error) {
      console.error('Resend API Error:', data.error)
      return res.status(500).json({ success: false, error: data.error.message })
    }

    console.log('Email sent successfully:', data.data?.id)
    return res.status(200).json({ success: true, data })

  } catch (error) {
    console.error('Server Error:', error)
    return res.status(500).json({ success: false, error: error.message })
  }
})

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`)
})

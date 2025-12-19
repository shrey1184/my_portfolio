# EmailJS Setup Guide for Contact Form

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (allows 200 emails/month)
3. Verify your email address

## Step 2: Add Email Service

1. Go to **Email Services** in the dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the connection instructions
5. Copy your **Service ID** (e.g., `service_abc123`)

## Step 3: Create Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Use this template structure:

```
Subject: New Contact Form Message from {{name}}

From: {{name}}
Email: {{email}}
Subject: {{subject}}

Message:
{{message}}

---
This email was sent from your portfolio contact form.
```

4. Save the template and copy your **Template ID** (e.g., `template_xyz789`)

## Step 4: Get Your Public Key

1. Go to **Account** → **General**
2. Find your **Public Key** (e.g., `your_public_key_here`)

## Step 5: Update ContactSection.jsx

Open `/myportfolio/src/components/sections/ContactSection.jsx` and replace these values around line 26-28:

```javascript
const SERVICE_ID = 'YOUR_SERVICE_ID'; // Replace with your Service ID
const TEMPLATE_ID = 'YOUR_TEMPLATE_ID'; // Replace with your Template ID
const PUBLIC_KEY = 'YOUR_PUBLIC_KEY'; // Replace with your Public Key
```

## Step 6: Update Your Email Address

At the bottom of `ContactSection.jsx` (around line 188), replace:

```javascript
<a href="mailto:your-email@example.com">
  your-email@example.com
</a>
```

With your actual email address.

## Step 7: Test Your Form

1. Run your development server: `npm run dev`
2. Navigate to the contact section
3. Fill out and submit the test form
4. Check your email inbox

## EmailJS Template Variables

Make sure your EmailJS template includes these variables:
- `{{name}}` - User's name
- `{{email}}` - User's email
- `{{subject}}` - Message subject
- `{{message}}` - Message content

## Troubleshooting

### Error: "Failed to send message"
- Double-check your Service ID, Template ID, and Public Key
- Ensure your email service is properly connected
- Check EmailJS dashboard for error logs

### Not receiving emails?
- Check spam/junk folder
- Verify email service connection in EmailJS dashboard
- Ensure template variables match form field names

### Rate limit exceeded?
- Free tier: 200 emails/month
- Upgrade to paid plan if needed
- Consider adding a captcha for production

## Security Note

The Public Key is safe to expose in frontend code. However, consider:
- Adding reCAPTCHA to prevent spam
- Implementing rate limiting
- Using EmailJS's built-in spam protection features

## Alternative: Using a Backend

If you prefer more control, you can:
1. Create a backend API endpoint
2. Use Nodemailer or SendGrid
3. Keep email credentials secure on the server

For now, EmailJS is the quickest solution without needing a backend!

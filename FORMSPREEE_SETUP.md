# Formspree Setup Guide

## 🚀 **Setting Up Formspree for Your Contact Form**

### **Step 1: Create a Formspree Account**
1. Go to [formspree.io](https://formspree.io)
2. Sign up for a free account
3. Verify your email address

### **Step 2: Create a New Form**
1. Click "New Form" in your dashboard
2. Give your form a name (e.g., "Contact Form")
3. Choose "Contact Form" as the form type
4. Click "Create Form"

### **Step 3: Get Your Form ID**
1. After creating the form, you'll see a form ID
2. It will look like: `xrgjqkab` or similar
3. Copy this ID

### **Step 4: Update Your Code**
1. Open `src/app/contact/page.tsx`
2. Find this line:
   ```typescript
   const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
   ```
3. Replace `YOUR_FORM_ID` with your actual form ID:
   ```typescript
   const response = await fetch('https://formspree.io/f/xrgjqkab', {
   ```

### **Step 5: Test Your Form**
1. Fill out the contact form on your website
2. Submit it
3. Check your Formspree dashboard for the submission
4. You'll receive an email notification

### **Step 6: Customize Email Notifications (Optional)**
1. In your Formspree dashboard, go to "Settings"
2. Customize the email template
3. Add team members who should receive notifications
4. Set up spam protection if needed

### **Step 7: Upgrade (Optional)**
- **Free Plan**: 50 submissions/month
- **Pro Plan**: 1,000 submissions/month + advanced features
- **Business Plan**: Unlimited submissions + team features

## 🔧 **Form Fields Included**
- **Name** (required)
- **Email** (required)
- **Company** (optional)
- **Budget Range** (dropdown)
- **Timeline** (dropdown)
- **Project Details** (required)

## 📧 **Email Template Variables**
You can use these variables in your Formspree email template:
- `{{name}}` - Sender's name
- `{{email}}` - Sender's email
- `{{company}}` - Company name
- `{{budget}}` - Budget range
- `{{timeline}}` - Project timeline
- `{{message}}` - Project details

## 🚨 **Important Notes**
- The form includes client-side validation
- Formspree handles spam protection automatically
- All submissions are stored in your Formspree dashboard
- You can export submissions as CSV
- The form is fully responsive and accessible

## 🎨 **Customization**
Feel free to modify the form fields, styling, and validation rules in the `src/app/contact/page.tsx` file to match your specific needs!

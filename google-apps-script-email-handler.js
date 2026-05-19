/**
 * GOOGLE APPS SCRIPT - SECURE EMAIL HANDLER (FOR PORTFOLIO CONTACT FORM)
 * Deployed as a Web App to receive and forward portfolio contact form messages securely.
 * 
 * INSTRUCTIONS TO DEPLOY:
 * 1. Open Google Sheets (https://sheets.google.com).
 * 2. Click on "Extensions" -> "Apps Script" in the top menu.
 * 3. Delete any default code in the editor and paste this entire code.
 * 4. Change the RECIPIENT_EMAIL variable below to your email (e.g., adarshkumar9172641@gmail.com).
 * 5. Click "Deploy" button (top right) -> Select "New deployment".
 * 6. Click the Gear Icon next to "Select type" and choose "Web app".
 * 7. Configure the following:
 *    - Description: Portfolio Mail API
 *    - Execute as: "Me" (your-email@gmail.com)
 *    - Who has access: "Anyone" (This is crucial so your portfolio website can call this endpoint).
 * 8. Click "Deploy".
 * 9. Google will ask you to Authorize access. Click "Authorize Access", choose your account, click "Advanced" -> "Go to Untitled project (unsafe)" -> click "Allow".
 * 10. Copy the generated "Web app URL" (it ends with /exec).
 * 11. Go to your `script.js` file, and paste this URL inside the `CONTACT_EMAIL_OR_KEY` variable!
 * 
 * BENEFITS OF THIS SYSTEM:
 * - 100% Free & Secure: Your Gmail acts as a serverless mailing backend.
 * - No Spam bots: Your email address is hidden inside Google Drive, and spambots can't crawl it.
 * - Fits your Resume: Shows off your practical Google Apps Script knowledge to potential recruiters!
 */

const RECIPIENT_EMAIL = "adarshkumar9172641@gmail.com";

function doPost(e) {
  try {
    // Parse the JSON request body
    const data = JSON.parse(e.postData.contents);
    
    const name = data.name || "Anonymous";
    const email = data.email || "No Email Provided";
    const subject = data.subject || "No Subject";
    const message = data.message || "No Message Body";
    
    // Honeypot field detection for simple spambots
    if (data._honey && data._honey !== "") {
      return ContentService.createTextOutput(JSON.stringify({
        success: "true",
        message: "Spam block simulated successfully."
      })).setMimeType(ContentService.MimeType.JSON);
    }
    
    // Construct HTML Email Content
    const emailBody = `
      <div style="font-family: 'Segoe UI', Arial, sans-serif; padding: 25px; border: 1px solid #e2e8f0; border-radius: 12px; max-width: 600px; color: #1a202c; background: #ffffff; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
        <div style="background: linear-gradient(135deg, #1abc9c, #16a085); padding: 15px 25px; border-radius: 8px 8px 0 0; color: #ffffff; margin: -25px -25px 25px -25px;">
          <h2 style="margin: 0; font-size: 20px; font-weight: 600; letter-spacing: 0.5px;">New Message From Portfolio</h2>
        </div>
        
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
          <tr>
            <td style="padding: 6px 0; font-weight: bold; width: 80px; color: #718096; vertical-align: top;">Name:</td>
            <td style="padding: 6px 0; color: #2d3748;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 6px 0; font-weight: bold; width: 80px; color: #718096; vertical-align: top;">Email:</td>
            <td style="padding: 6px 0;"><a href="mailto:${email}" style="color: #1abc9c; text-decoration: none;">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 6px 0; font-weight: bold; width: 80px; color: #718096; vertical-align: top;">Subject:</td>
            <td style="padding: 6px 0; color: #2d3748; font-style: italic;">${subject}</td>
          </tr>
        </table>
        
        <div style="background-color: #f7fafc; padding: 20px; border-left: 4px solid #1abc9c; border-radius: 4px; margin-top: 15px; white-space: pre-wrap; color: #2d3748; line-height: 1.6; font-size: 15px;">
          ${message}
        </div>
        
        <p style="font-size: 0.75rem; color: #a0aec0; margin-top: 30px; border-top: 1px solid #edf2f7; padding-top: 15px; text-align: center;">
          This message was sent automatically via secure Google Apps Script API from your Portfolio Website.
        </p>
      </div>
    `;
    
    // Send email using GmailApp
    GmailApp.sendEmail(RECIPIENT_EMAIL, `Portfolio Contact: ${subject}`, "", {
      htmlBody: emailBody,
      replyTo: email
    });
    
    // Respond back to client with CORS/Access approval
    return ContentService.createTextOutput(JSON.stringify({
      success: "true",
      message: "Message delivered successfully."
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      success: "false",
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

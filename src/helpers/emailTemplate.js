export const ResetPasswordTemplate = (token) => {

  
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
    </head>
    <body>
      <div style="padding: 0 40px">
        <h2 style="text-align: center; font-size: 30px">Reset your password</h2>
        <div style="width: 300px; margin: auto">
          <div style="font-size: 18px; font-weight: 500; margin-bottom: 10px">
            Click on Reset button to reset your password
          </div>
          <a style="padding: 5px 10px; color: white; background: red"
            href="${process.env.WEB_URL}/reset-password/security_key=${token}" target="_blank">Reset Password</a
          >
        </div>
      </div>
    </body>
  </html>`;
};
export const WelcomeTemplate = () => {
  return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <div style="padding: 0 40px;">
            <h2 style="text-align: center; font-size: 30px;"> Welcome</h2>
           <div style="width: 300px; margin: auto;">
            <p style="font-size: 18px; font-weight: 500;">Thanks for your interest to shop from US</p>
            <p style="font-size: 18px;">Your account is ready to login</p>
           </div>
        </div>
    </body>
    </html>`;
};

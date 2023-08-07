import sgMail from "@sendgrid/mail";

export const sendEmail = async (email, subject, template) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  try {
    const msg = {
      to: email, 
      from: "ziaul@chillfitrave.com", 
      subject,
      html: template,
    };

    const res = await sgMail.send(msg);
    return res;
  } catch (error) {
    console.log(error);
  }
};

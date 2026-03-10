type EmailPayload = {
  to: string;
  subject: string;
  html: string;
  text: string;
};

function getBaseUrl() {
  return process.env.NEXTAUTH_URL ?? "http://localhost:3000";
}

function getEmailConfig() {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.EMAIL_FROM;

  return { apiKey, from };
}

export function buildVerifyEmailUrl(token: string) {
  return `${getBaseUrl()}/api/auth/verify-email?token=${encodeURIComponent(token)}`;
}

export function buildResetPasswordUrl(token: string) {
  return `${getBaseUrl()}/reset-password?token=${encodeURIComponent(token)}`;
}

export async function sendEmail(payload: EmailPayload) {
  const { apiKey, from } = getEmailConfig();

  if (!apiKey || !from) {
    throw new Error("Email provider is not configured. Set RESEND_API_KEY and EMAIL_FROM.");
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: payload.to,
      subject: payload.subject,
      html: payload.html,
      text: payload.text,
    }),
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`Email send failed (${response.status}): ${body}`);
  }
}

export async function sendVerificationEmail(to: string, token: string) {
  const verificationUrl = buildVerifyEmailUrl(token);
  await sendEmail({
    to,
    subject: "Verify your Skilline account",
    text: `Verify your email by opening this link: ${verificationUrl}`,
    html: `
      <p>Welcome to Skilline.</p>
      <p>Please verify your email to activate your account.</p>
      <p><a href="${verificationUrl}">Verify my email</a></p>
      <p>This link expires in 24 hours.</p>
    `,
  });
}

export async function sendPasswordResetEmail(to: string, token: string) {
  const resetUrl = buildResetPasswordUrl(token);
  await sendEmail({
    to,
    subject: "Reset your Skilline password",
    text: `Reset your password using this link: ${resetUrl}`,
    html: `
      <p>We received a password reset request.</p>
      <p><a href="${resetUrl}">Reset password</a></p>
      <p>This link expires in 1 hour.</p>
      <p>If you did not request this, you can ignore this email.</p>
    `,
  });
}

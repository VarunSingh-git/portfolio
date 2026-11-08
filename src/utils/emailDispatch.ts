import { siteConfig } from "@/data/site";

/**
 * Universal Email Dispatcher:
 * Ensures email links work seamlessly across PC (Windows/Mac/Linux) and Mobile (iOS/Android).
 *
 * 1. On Mobile: Triggers native mailto: to launch default mail app (Apple Mail, Gmail app).
 * 2. On Desktop PC: mailto: usually fails because 95% of users don't have desktop Outlook/Mail configured.
 *    Instead, opens Gmail Web Compose directly in a new tab with recipient pre-filled.
 * 3. Copies email to clipboard as an immediate fail-safe.
 */
export const dispatchEmail = (
  e?: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
  customSubject?: string
) => {
  const email = siteConfig.socialLinks.email;
  const subject = customSubject || "Inquiry for Backend / Full-Stack Engineering Role";
  const body =
    "Hi Varun,\n\nI came across your portfolio and would like to discuss an opportunity regarding...";

  // 1. Copy to clipboard silently
  if (typeof navigator !== "undefined" && navigator.clipboard) {
    navigator.clipboard.writeText(email).catch(() => {});
  }

  // 2. Check if user is on mobile
  const isMobile =
    typeof navigator !== "undefined" &&
    /Android|iPhone|iPad|iPod|webOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

  const encodedSubject = encodeURIComponent(subject);
  const encodedBody = encodeURIComponent(body);
  const mailtoUrl = `mailto:${email}?subject=${encodedSubject}&body=${encodedBody}`;
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    email
  )}&su=${encodedSubject}&body=${encodedBody}`;

  if (isMobile) {
    // On phones, navigate to mailto which launches native mail app
    window.location.href = mailtoUrl;
  } else {
    // On PC, prevent dead mailto failure and open Gmail in web
    if (e) e.preventDefault();
    const win = window.open(gmailUrl, "_blank", "noopener,noreferrer");
    if (!win) {
      window.location.href = mailtoUrl;
    }
  }
};


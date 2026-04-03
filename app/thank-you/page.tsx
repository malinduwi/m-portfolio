import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You",
  description: "Confirmation page after a successful portfolio contact form submission.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouPage() {
  return (
    <main className="thankyou-page-shell">
      <section className="contact-section thankyou-section">
        <div className="thankyou-content">
          <img src="/assets/mawi.png" alt="MAWI logo" className="thankyou-logo" />
          <p className="section-tag">// secure channel</p>
          <h2>Message Sent</h2>
          <p className="contact-subtext">
            Thank you for reaching out. I&apos;ll get back to you soon.
          </p>
          <a href="/" className="btn primary">
            Back to Home
          </a>
        </div>
      </section>
    </main>
  );
}

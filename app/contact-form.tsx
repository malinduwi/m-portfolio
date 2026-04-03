"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

type SubmitState = "idle" | "submitting" | "error";

export default function ContactForm() {
  const router = useRouter();
  const [submitState, setSubmitState] = useState<SubmitState>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitState("submitting");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = new URLSearchParams();

    formData.forEach((value, key) => {
      if (typeof value === "string") {
        payload.append(key, value);
      }
    });

    try {
      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: payload.toString(),
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      form.reset();
      router.push("/thank-you");
    } catch (error) {
      console.error(error);
      setSubmitState("error");
    }
  }

  return (
    <form
      className="cyber-contact-form"
      name="contact"
      method="POST"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="contact" />

      <p hidden>
        <label>
          Don&apos;t fill this out if you&apos;re human:
          <input name="bot-field" />
        </label>
      </p>

      <div className="form-group">
        <label htmlFor="name">[ NAME ]</label>
        <input type="text" id="name" name="name" placeholder="Enter your name" required />
      </div>

      <div className="form-group">
        <label htmlFor="email">[ EMAIL ]</label>
        <input type="email" id="email" name="email" placeholder="Enter your email" required />
      </div>

      <div className="form-group">
        <label htmlFor="subject">[ SUBJECT ]</label>
        <input
          type="text"
          id="subject"
          name="subject"
          placeholder="What would you like to discuss?"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="message">[ MESSAGE ]</label>
        <textarea
          id="message"
          name="message"
          rows={6}
          placeholder="Tell me about your opportunity, idea, or project..."
          required
        />
      </div>

      <button type="submit" className="send-btn" disabled={submitState === "submitting"}>
        <i className="fas fa-paper-plane" />
        {submitState === "submitting" ? "Sending..." : "Send Message"}
      </button>

      {submitState === "error" ? (
        <p className="form-status">Something went wrong. Please try again.</p>
      ) : null}
    </form>
  );
}

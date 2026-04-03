import type { Metadata } from "next";
import "./globals.css";

const siteUrl =
  process.env.URL ??
  process.env.DEPLOY_PRIME_URL ??
  process.env.NEXT_PUBLIC_SITE_URL ??
  "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Malindu Wijayarathna Portfolio",
  description:
    "Personal portfolio of Malindu Wijayarathna featuring projects, certifications, technical skills, and contact details.",
  keywords: [
    "Malindu Wijayarathna",
    "cybersecurity portfolio",
    "security analyst portfolio",
    "Sri Lanka cybersecurity",
    "OWASP",
    "SOC analyst",
    "vulnerability assessment",
    "OSINT",
  ],
  authors: [{ name: "Malindu Wijayarathna" }],
  creator: "Malindu Wijayarathna",
  publisher: "Malindu Wijayarathna",
  category: "technology",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "Malindu Wijayarathna Portfolio",
    description:
      "Personal portfolio of Malindu Wijayarathna featuring projects, certifications, technical skills, and contact details.",
    siteName: "Malindu Wijayarathna Portfolio",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Malindu Wijayarathna cybersecurity portfolio preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Malindu Wijayarathna Portfolio",
    description:
      "Personal portfolio of Malindu Wijayarathna featuring projects, certifications, technical skills, and contact details.",
    images: ["/twitter-image"],
  },
  icons: {
    icon: "/assets/mawi.png",
    shortcut: "/assets/mawi.png",
    apple: "/assets/mawi.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@700;800;900&family=Manrope:wght@400;500;600;700;800&family=Space+Grotesk:wght@500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EmergencyBanner from "@/components/EmergencyBanner";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Apex Dental Care | Premium Family & Cosmetic Dentistry",
  description:
    "Experience gentle, state-of-the-art family and cosmetic dentistry. Book your appointment online 24/7 or call for same-day emergency dental appointments.",
  metadataBase: new URL("https://apexdentalcare.com"),
  openGraph: {
    title: "Apex Dental Care | Premium Family & Cosmetic Dentistry",
    description:
      "Gentle, modern dentistry in a luxury, comfortable setting. Accept new patients & same-day emergencies.",
    url: "https://apexdentalcare.com",
    siteName: "Apex Dental Care",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Apex Dental Care | Premium Family & Cosmetic Dentistry",
    description: "Experience modern dentistry in comfort.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured JSON-LD Schema for Dentist & Local Business
  const clinicSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Dentist",
        "@id": "https://apexdentalcare.com/#dentist",
        "name": "Apex Dental Care",
        "url": "https://apexdentalcare.com",
        "telephone": "+18005550199",
        "priceRange": "$$",
        "image": "https://apexdentalcare.com/images/clinic-building.jpg",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "123 Professional Parkway, Suite A",
          "addressLocality": "San Francisco",
          "addressRegion": "CA",
          "postalCode": "94102",
          "addressCountry": "US"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 37.774929,
          "longitude": -122.419416
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "08:00",
            "closes": "17:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Saturday",
            "opens": "09:00",
            "closes": "14:00"
          }
        ],
        "sameAs": [
          "https://www.facebook.com/apexdentalcare",
          "https://www.instagram.com/apexdentalcare",
          "https://www.google.com/maps"
        ],
        "memberOf": {
          "@type": "Organization",
          "name": "American Dental Association"
        }
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://apexdentalcare.com/#localbusiness",
        "name": "Apex Dental Care Clinic",
        "image": "https://apexdentalcare.com/images/clinic-building.jpg",
        "telephone": "+18005550199",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "123 Professional Parkway, Suite A",
          "addressLocality": "San Francisco",
          "addressRegion": "CA",
          "postalCode": "94102",
          "addressCountry": "US"
        }
      }
    ]
  };

  return (
    <html
      lang="en"
      className={`${poppins.variable} ${inter.variable} h-full scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-white text-dark antialiased">
        <EmergencyBanner />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

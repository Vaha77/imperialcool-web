import type { Metadata } from "next";
import { LocaleProvider } from "@/i18n/LocaleProvider";
import { dictionaries, defaultLocale } from "@/i18n/dictionaries";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingContact } from "@/components/layout/FloatingContact";
import "./globals.css";

const defaultDict = dictionaries[defaultLocale];

export const metadata: Metadata = {
  metadataBase: new URL("https://imperialcool.com"),
  title: defaultDict.meta.title,
  description: defaultDict.meta.description,
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: defaultDict.meta.title,
    description: defaultDict.meta.description,
    url: "https://imperialcool.com",
    siteName: "IMPERIAL COOL",
    locale: "zh_CN",
    alternateLocale: ["uz_UZ", "ru_RU", "en_US"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: defaultDict.meta.title,
    description: defaultDict.meta.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang={defaultDict.htmlLang}>
      <body className="font-sans">
        <LocaleProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <FloatingContact />
        </LocaleProvider>
      </body>
    </html>
  );
}

import { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

// Configure Poppins font with all weights
const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  fallback: ["system-ui", "arial"],
});

// Metadata configuration
export const metadata: Metadata = {
  metadataBase: new URL("https://your-domain.com"),
  title: {
    default: "Rent Companion | Your Perfect Company",
    template: "%s | Rent Companion",
  },
  description: "Find your perfect companion for any occasion. Safe, reliable, and professional companionship services.",
  keywords: [
    "rent companion",
    "professional companion",
    "companion services",
    "social companion",
    "event companion",
    "travel companion",
    "friendship services",
    "platonic companionship",
    "social networking",
    "companion platform",
  ],
  authors: [{ name: "Your Company Name" }],
  creator: "Your Company Name",
  publisher: "Your Company Name",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon-192.png", sizes: "192x192" },
      { url: "/icon-512.png", sizes: "512x512" },
    ],
    apple: [
      { url: "/apple-icon.png" },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
};

// Move viewport configuration to a separate export as required by Next.js
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

// Root layout interface
interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html 
      lang="en" 
      className={`${poppins.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 antialiased">
        {/* Main content wrapper */}
        <div className="flex min-h-screen flex-col">
          {/* Skip to main content link for accessibility */}
          <a 
            href="#main-content" 
            className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-white focus:text-black"
          >
            Skip to main content
          </a>

          {/* Main content area */}
          <main id="main-content" className="flex-grow">
            {children}
          </main>
        </div>

        {/* Theme script to prevent flickering */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.theme;
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (theme === 'dark' || (!theme && prefersDark)) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (_) {}
            `,
          }}
        />
      </body>
    </html>
  );
}
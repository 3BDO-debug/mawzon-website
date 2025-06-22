"use client";
// next
import localFont from "next/font/local";
// @Mui
import { CssBaseline } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
// i18n
import "@/locales/i18n";
// theme
import RecoiledTheme from "@/theme";
//
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Alert from "@/components/Alert";
import SelectPackagePopUp from "@/components/SelectPackagePopUp";

// -------------------------------------------------------------------------------------

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// -------------------------------------------------------------------------------------

// export const metadata = {
//   title: "Mawzoon",
//   description: "Mawzoon | Powered By B.O.T",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta
        name="title"
        content="Mawzon by Dr. Shrouk Ali - Your Partner in Personalized Nutrition & Wellness"
      />
      <meta
        name="description"
        content="Start your journey to optimal health with Mawzon, led by Dr. Shrouk Ali, a renowned clinical nutritionist and health coach. Transform your eating habits, achieve your weight goals, and enjoy unparalleled support with our personalized nutrition plans and tailored wellness programs."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="<URL>" />
      <meta
        property="og:title"
        content="Mawzon by Dr. Shrouk Ali - Your Partner in Personalized Nutrition & Wellness"
      />
      <meta
        property="og:description"
        content="Experience the difference with Mawzon by Dr. Shrouk Ali. We provide personalized nutrition, customized workouts, and expert support to help you transform your lifestyle and achieve your health goals. Start today and see the change in your weight, measurements, and overall well-being."
      />
      <meta property="og:image" content="<URL_TO_IMAGE>" />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="<URL>" />
      <meta
        property="twitter:title"
        content="Mawzon by Dr. Shrouk Ali - Your Partner in Personalized Nutrition & Wellness"
      />
      <meta
        property="twitter:description"
        content="Transform your eating habits and lifestyle with Mawzon, led by Dr. Shrouk Ali, a clinical nutritionist and health coach. Personalized plans, expert guidance, and tailored solutions await you. Start your journey to a healthier you today."
      />
      <meta property="twitter:image" content="<URL_TO_IMAGE>" />
      <link
        href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <AppRouterCacheProvider>
          <RecoiledTheme>
            <CssBaseline />
            <Header />
            {children}
            {/* Select Package Pop Up */}
            <SelectPackagePopUp />
            <Alert />
            <Footer />
          </RecoiledTheme>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}

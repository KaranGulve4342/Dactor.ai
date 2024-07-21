// import type { Metadata } from "next";
// import { GeistSans } from "geist/font/sans";

// import "./globals.css";

// import { ThemeProvider } from "@/providers/theme-provider";

// import {
//   ClerkProvider,
//   SignInButton,
//   SignedIn,
//   SignedOut,
//   UserButton
// } from '@clerk/nextjs'

// export const metadata: Metadata = {
//   metadataBase: new URL(
//     process.env.APP_URL
//       ? `${process.env.APP_URL}`
//       : process.env.VERCEL_URL
//       ? `https://${process.env.VERCEL_URL}`
//       : `http://localhost:${process.env.PORT || 3000}`
//   ),
//   title: "Dactor.ai",
//   description:
//     "A Personal Health Assistant that helps you to manage your health and wellness.",
//   alternates: {
//     canonical: "/"
//   },
//   openGraph: {
//     url: "/",
//     title: "Dactor.ai",
//     description:
//       "A Personal Health Assistant that helps you to manage your health and wellness.",
//     type: "website"
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Dactor.ai",
//     description:
//       "A Personal Health Assistant that helps you to manage your health and wellness."
//   }
// };

// export default function RootLayout({
//   children
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <body className={GeistSans.className}>
//         <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
//           {children}
//         </ThemeProvider>
//       </body>
//     </html>
//   );
// }

// import type { Metadata } from "next";
// import { GeistSans } from "geist/font/sans";

// import "./globals.css";
// import { ThemeProvider } from "@/providers/theme-provider";
// import {
//   ClerkProvider,
//   SignInButton,
//   SignedIn,
//   SignedOut,
//   UserButton
// } from '@clerk/nextjs';

// export const metadata: Metadata = {
//   metadataBase: new URL(
//     process.env.APP_URL
//       ? `${process.env.APP_URL}`
//       : process.env.VERCEL_URL
//       ? `https://${process.env.VERCEL_URL}`
//       : `http://localhost:${process.env.PORT || 3000}`
//   ),
//   title: "Dactor.ai",
//   description:
//     "A Personal Health Assistant that helps you to manage your health and wellness.",
//   alternates: {
//     canonical: "/"
//   },
//   openGraph: {
//     url: "/",
//     title: "Dactor.ai",
//     description:
//       "A Personal Health Assistant that helps you to manage your health and wellness.",
//     type: "website"
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Dactor.ai",
//     description:
//       "A Personal Health Assistant that helps you to manage your health and wellness."
//   }
// };

// export default function RootLayout({
//   children
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <ClerkProvider>
//       <html lang="en" suppressHydrationWarning>
//         <body className={GeistSans.className}>
//           <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
//             <SignedOut>
//               <SignInButton />
//             </SignedOut>
//             <SignedIn>
//               <UserButton />
//               {children}
//             </SignedIn>
//           </ThemeProvider>
//         </body>
//       </html>
//     </ClerkProvider>
//   );
// }

import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import { ClerkProvider, RedirectToSignIn, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.APP_URL
      ? `${process.env.APP_URL}`
      : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : `http://localhost:${process.env.PORT || 3000}`
  ),
  title: "Dactor.ai",
  description:
    "A Personal Health Assistant that helps you to manage your health and wellness.",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    url: "/",
    title: "Dactor.ai",
    description:
      "A Personal Health Assistant that helps you to manage your health and wellness.",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Dactor.ai",
    description:
      "A Personal Health Assistant that helps you to manage your health and wellness."
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={GeistSans.className}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>
            <SignedIn>
              {/* <UserButton /> */}
              {children}
            </SignedIn>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}

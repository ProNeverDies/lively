import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { dark } from "@clerk/themes";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{ baseTheme: dark }}>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <ThemeProvider attribute="class" forcedTheme="dark" storageKey="lively-theme">
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}


// import { ClerkProvider } from "@clerk/nextjs";
// import type { Metadata } from "next";
// import { dark } from "@clerk/themes";
// import { Geist, Geist_Mono } from "next/font/google";
// import { ThemeProvider } from "@/components/theme-provider";
// import "./globals.css";
// import RootLayoutClient from "./rootlayoutclient";


// // Define metadata (this is a server-side feature)
// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

// // Define fonts (these are also server-side)
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <ClerkProvider appearance={{ baseTheme: dark }}>
//       <html lang="en">
//         <body
//           className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//         >
//           {/* Apply the client-side behavior here */}
//           <RootLayoutClient>{children}</RootLayoutClient>
//         </body>
//       </html>
//     </ClerkProvider>
//   );
// }

import { Inter } from "next/font/google";
import "./globals.css";
import { appWithTranslation } from 'next-i18next';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "educAIte",
  description: "Where LLM meets education",
};

function RootLayout({ children }) {
  return (
    <html lang="en ">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

export default appWithTranslation(RootLayout);

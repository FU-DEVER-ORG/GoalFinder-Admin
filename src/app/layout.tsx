import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "./provider";
import { ConfigProvider } from "antd";
import {themes} from '@/styles/themes';
const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning>
        <ConfigProvider
          theme={{
            components: {
              DatePicker: {
                cellHoverWithRangeBg: `${themes?.default?.colors?.primaryLighter}20 !important`,
                cellRangeBorderColor: `${themes?.default?.colors?.primary} !important`,
              },
            },
          }}
        >
          <Providers>
            {children}
          </Providers>
        </ConfigProvider>
      </body>
    </html>
  );
}
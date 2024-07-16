import './ui/globals.css';
import {inter, merienda, nunito_sans} from "./lib/fonts";

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en" className={nunito_sans.className}>
        <body className=''>{children}</body>
      </html>
    )
  }
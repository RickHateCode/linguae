import './ui/globals.css';
import { SpeedInsights } from '@vercel/speed-insights/next';
// import {inter, merienda, nunito_sans} from "./lib/fonts";

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body className=''>{children} <SpeedInsights /></body>
      </html>
    )
  }
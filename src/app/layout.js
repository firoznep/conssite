import { Inter } from "next/font/google";
import "./globals.css";
import NabBar from "@/components/navBar/NabBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mesopotamia For General Contracting",
  description: "Created By MGC IT FIROZ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <div className="navBar">MGC</div> */}
        <NabBar />
        {children}
        <footer style={{ height: "100vh" }}>
          <h2>Footer</h2>
        </footer>
      </body>
    </html>
  );
}

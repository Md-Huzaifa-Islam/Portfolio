import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import { ToastContainer } from "react-toastify";
import ParticleBackground, { App } from "@/client/Background";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Huzaifa Islam Rakib",
  description: "developed and designed by Huzaifa",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" data-theme="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} text-textColor-0`}
      >
        {/* <ParticleBackground /> */}
        <App />
        <div className="relative z-10">
          <div className="text-white">
            <Navbar />
            {children}
            <ToastContainer
              position="top-center"
              autoClose={2000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick={false}
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
              // transition={Bounce}
            />
          </div>
          <footer className="mt-24">
            <Footer />
          </footer>
        </div>
      </body>
    </html>
  );
}

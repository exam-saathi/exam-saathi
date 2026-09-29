import "./globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

export const metadata = {
  title: "ExamSathi | Competitive Exam Preparation",
  description:
    "ExamSathi - Hindi medium competitive exam preparation platform.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="hi">
      <body>
        <Navbar />

        <main className="min-h-screen">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}

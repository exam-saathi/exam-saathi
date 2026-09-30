import "./globals.css";

export const metadata = {
  title: "LOYAL ACADEMY | Learn • Practice • Achieve",
  description:
    "Professional competitive exam preparation platform for UPSC, UPPSC, UP Exams and Bihar Exams.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="hi">
      <body>{children}</body>
    </html>
  );
}

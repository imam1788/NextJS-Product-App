import ClientLayout from "../components/ClientLayout";
import "./globals.css";

export const metadata = {
  title: "MyStore App",
  description: "A simple product app with Next.js 15",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>
          <main className="pt-24">{children}</main>
        </ClientLayout>
      </body>
    </html>
  );
}

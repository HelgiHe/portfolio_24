import "./globals.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="h-screen">
          <a className="absolute lg:top-10 top-6 lg:right-20 right-10" href="mailto:helgihel@gmail.com">Contact</a>
        {children}
      </body>
    </html>
  );
}

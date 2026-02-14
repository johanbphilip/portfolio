export const metadata = {
  title: "Thoughts | Johan Philip",
  description: "Thoughts by Johan Philip",
  openGraph: {
    title: "Thoughts | Johan Philip",
    description: "Thoughts by Johan Philip",
    images: [
      {
        url: "/og/og.png", // Ensure this is in your /public folder
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Thoughts | Johan Philip",
    description: "Thoughts by Johan Philip",
    images: ["/og/og.png"],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}

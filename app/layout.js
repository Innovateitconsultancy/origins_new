// import { Kumbh_Sans } from "next/font/google"

// const kumbh = Kumbh_Sans({
//   weight: ["300","400","500","600","700","800","900"],
//   subsets: ["latin"],
//   display: "swap",
// })

export const metadata = {
  title: "IV BAR || IV Drip Therapy & IV Vitamin Infusions",
  description: "IV BAR IV Drip Therapy & IV Vitamin Infusions",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/img/favicon.png" />

        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/all.min.css" />
        <link rel="stylesheet" href="/assets/css/animate.css" />
        <link rel="stylesheet" href="/assets/css/magnific-popup.css" />
        <link rel="stylesheet" href="/assets/css/meanmenu.css" />
        <link rel="stylesheet" href="/assets/css/swiper-bundle.min.css" />
        <link rel="stylesheet" href="/assets/css/nice-select.css" />
        <link rel="stylesheet" href="/assets/css/main.css" />

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />

      </head>

      <body >
        {children}
      </body>
    </html>
  )
}
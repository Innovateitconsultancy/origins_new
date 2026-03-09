// import 'swiper/css';
// import "swiper/css/navigation";
// import "swiper/css/pagination";
import "/public/assets/css/bootstrap.min.css"
import "/public/assets/css/all.min.css"
import "/public/assets/css/animate.css"
import "/public/assets/css/magnific-popup.css"
import "/public/assets/css/meanmenu.css"
import "/public/assets/css/swiper-bundle.min.css"
import "/public/assets/css/nice-select.css"
import "/public/assets/css/main.css"

import { Kumbh_Sans } from 'next/font/google'
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
/>
const kumbh = Kumbh_Sans({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
})


export const metadata = {
  title: 'IV BAR || IV Drip Therapy & IV Vitamin Infusions',
  description: 'IV BAR IV Drip Therapy & IV Vitamin Infusions',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/assets/img/favicon.png" />
      <body className={`${kumbh.className}`}>{children}</body>
    </html>
  )
}

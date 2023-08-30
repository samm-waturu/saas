import { Heebo, Work_Sans } from "next/font/google";

export const FontFetchHeebo = Heebo({
  subsets: ["latin"],
  variable: "--font-heebo",
  weight: ["400", "600", "800"],
  style: ["normal"]
})

export const FontFetchSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  weight: ["500", "700", "900"],
})


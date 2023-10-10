import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { GlobalStyle } from "./styles/GlobalStyle";
import StyledComponentsRegistry from "./styles/registry";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Mad Digital",
  description:
    "A forma mais eficaz de escalar seu negócio com Marketing Digital. Com o método Mad Digital cresça seus resultados com Tráfego Pago na captação de novos clientes.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <StyledComponentsRegistry>
          <GlobalStyle />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}

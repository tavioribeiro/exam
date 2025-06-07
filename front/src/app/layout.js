import { ThemeProvider } from '@/context/ThemeContext';
import { Provider } from "@/components/ui/provider"

import "@fontsource/inter";
import "@fontsource/inter/100.css";
import "@fontsource/inter/200.css";
import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/800.css";
import '@fontsource/geist-sans';
import "@fontsource/montserrat";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/700.css";
import "@fontsource/quicksand";
import "@fontsource/inter-tight"; 
import "@fontsource/inter-tight/800.css";
import "@fontsource/inter-tight/700.css";
import '@fontsource-variable/merriweather';

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning>
      <body>
        <Provider>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </Provider>
      </body>
    </html>
  );
}

import { ReactNode } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "../lib/i18n/i18n";
// import { AuthProvider } from "../features/auth/context/AuthProvider";
import { ThemeModeProvider } from "../features/theme/context/ThemeModeProvider";
// import { CacheProvider, createCache } from "storybook/internal/theming";

const AppProviders = ({ children }: { children: ReactNode }) => {
  // const cache = createCache({
  //   key: "css",
  //   prepend: true,
  // });

  return (
    <I18nextProvider i18n={i18n}>
      {/* <AuthProvider> */}
      {/* <CacheProvider value={cache}> */}
      <ThemeModeProvider>{children}</ThemeModeProvider>
      {/* </CacheProvider> */}
      {/* </AuthProvider> */}
    </I18nextProvider>
  );
};
export default AppProviders;

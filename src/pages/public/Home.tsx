import { useMeta } from "../../features/SEO/hooks/useMeta";
import React from "react";

import { useTranslation } from "react-i18next";

const HomePage = () => {
  const { t } = useTranslation();

  const tPath = "page.home";

  const title = t(`${tPath}.meta-title`);
  const description = t(`${tPath}.meta-description`);
  const keywords = t(`${tPath}.meta-keyword`);
  useMeta({ title, description, keywords });

  return <React.Fragment>Home</React.Fragment>;
};
export default HomePage;

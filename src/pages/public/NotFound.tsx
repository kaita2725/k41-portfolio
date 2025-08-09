import React, { useEffect } from "react";
import { useMeta } from "../../features/SEO/hooks/useMeta";
import { useTranslation } from "react-i18next";
import { Frown } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const { t } = useTranslation();
  const tPath = "page.notfound";

  const title = t(`${tPath}.meta-title`);
  const description = t(`${tPath}.meta-description`);
  const keywords = t(`${tPath}.meta-keywords`);
  useMeta({ title, description, keywords });

  useEffect(() => {}, []);
  return (
    <React.Fragment>
      <div
        css={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: ".5em",
          textAlign: "center",
        }}
      >
        <div>
          <Frown size={128} />
          <h1>404</h1>
          <h2>{t(`${tPath}.notFound`)}</h2>
          <span>
            {t(`${tPath}.notFoundDetails`)}
            {"\n"}
            <Link to={"/"} css={{ textDecoration: "underline" }}>
              {t(`${tPath}.notFoundLink`)}
            </Link>
          </span>
        </div>
      </div>
    </React.Fragment>
  );
};

export default NotFound;

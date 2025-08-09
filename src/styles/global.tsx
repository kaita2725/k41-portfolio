/** @jsxImportSource @emotion/react */
import { Global, css, useTheme } from "@emotion/react";
import { AppTheme } from "./theme";

export const GlobalStyles = () => {
  const theme = useTheme() as AppTheme;

  return (
    <Global
      styles={css`
        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }
        body {
          margin: 0;
          font-family: "Inter", system-ui, -apple-system, BlinkMacSystemFont,
            "Segoe UI", "Roboto", "Inter", "Helvetica Neue", sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          background-color: ${theme.colors.app.background};
          color: ${theme.colors.app.text};
          transition: background-color 0.3s, color 0.3s;
        }
        #app {
          position: relative;
          overflow: hidden;
          max-width: 100dvw;
          max-height: 100dvh;
          z-index: 0;
        }
        a {
          color: inherit;
          text-decoration: none;
        }

        ::-webkit-scrollbar {
          width: 0.45rem;
          height: 0.45rem;
        }
        ::-webkit-scrollbar-track {
          width: 1rem;
        }
        ::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.6);
          border: 1em solid rgba(0, 0, 0, 0.35);
          border-radius: 2rem;
        }
        svg {
          overflow-clip-margin: content-box; /* Adjust clipping on root */
          overflow: visible; /* Allow content to overflow if needed */
        }
      `}
    />
  );
};

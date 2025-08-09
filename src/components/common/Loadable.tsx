import React, { JSX, Suspense } from "react";

export default function Loadable(
  Component: React.LazyExoticComponent<() => JSX.Element>
) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Component />
    </Suspense>
  );
}

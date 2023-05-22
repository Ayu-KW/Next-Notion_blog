import React from "react";

export const Layout = ({ children }: any) => {
  return (
    <div>
      <h1>共通のコンポーネントです。</h1>
      {children}
    </div>
  );
};

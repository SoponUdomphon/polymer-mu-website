// Layout.tsx (TypeScript example)
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div>
      {/* Your common header */}
      <header>{/* ... header content ... */}</header>

      <main>
        {children}{" "}
        {/* This is where your page-specific content will be rendered */}
      </main>

      {/* Your common footer */}
      <footer>{/* ... footer content ... */}</footer>
    </div>
  );
};

export default Layout;

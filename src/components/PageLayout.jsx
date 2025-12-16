import { Navbar } from "./NavBar";
import { Footer } from "./Footer";

export const PageLayout = ({ pageId = "page-root", children }) => {
  return (
    <div
      id={pageId}
      className="min-h-screen bg-background text-foreground overflow-x-hidden"
    >
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

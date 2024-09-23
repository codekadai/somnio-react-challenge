import Footer from "@/components/Footer";
import Header from "@/components/Header";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header hasSearch={true} />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;

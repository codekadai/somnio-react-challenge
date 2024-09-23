import Header from "@/components/Header";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header hasSearch={false} />
      {children}
    </>
  );
};

export default MainLayout;

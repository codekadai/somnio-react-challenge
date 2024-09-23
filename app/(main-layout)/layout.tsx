import Header from "@/components/Header";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header hasSearch={true} />
      {children}
    </>
  );
};

export default MainLayout;

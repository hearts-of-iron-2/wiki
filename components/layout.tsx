type Props = {
  preview?: boolean;
  children: React.ReactNode;
};

const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <div className="min-h-screen max-h-screen">
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;

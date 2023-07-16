type Props = {
  children?: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return <div className="h-screen w-screen px-4 flex flex-row">{children}</div>;
};

export default Container;

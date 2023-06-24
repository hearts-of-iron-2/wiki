type Props = {
  children?: React.ReactNode
}

const Container = ({ children }: Props) => {
  return <div className="min-h-screen max-h-screen h-screen container mx-auto px-4 flex flex-row">{children}</div>
}

export default Container

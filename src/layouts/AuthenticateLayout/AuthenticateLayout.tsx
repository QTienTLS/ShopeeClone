
interface props{
  children?: React.ReactNode
}

export default function AuthenticateLayout({ children }: props) {
  return (
    <div>
      {children}
      AuthenticateLayout
    </div>
  )
}

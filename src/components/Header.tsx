interface HeaderProps {
  selected: {
    title: string;
  }
}

export function Header(props: HeaderProps) {

  return (
    <header>
      <span className="category">Categoria:<span> {props.selected.title}</span></span>
    </header>
  )
}
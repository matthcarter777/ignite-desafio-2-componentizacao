import { GenreResponseProps } from '../App';

interface SideNavProps {
  genres: GenreResponseProps[];
  children: React.ReactNode;
}

export function SideBar(props: SideNavProps) {
  return (
    <nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
          {props.children}
        </div>

      </nav>
  )
}
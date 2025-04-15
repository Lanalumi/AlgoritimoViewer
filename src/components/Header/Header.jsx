import "./Header.scss";

const Header = () => (
    <header className="header">

        <div className="fake-menu">
            <div className="fake-menu__dot fake-menu__dot--emph"></div>
            <div className="fake-menu__dot"></div>
            <div className="fake-menu__dot"></div>

        </div>

        <h1 className="title">Algorithm Visualizer</h1>
    </header>
)

export default Header;

import Link from 'next/link'

const LinkStyle = { marginRight: 15 };

const Header = () => (
    <div>
        <Link key={'home'} href="/">
        <a style={LinkStyle}>Home</a>
        </Link>
        <Link key={'about'} href="/about">
        <a style={LinkStyle}>About</a>
        </Link>
    </div>
);

export default Header;


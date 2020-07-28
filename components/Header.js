import Link from 'next/link';

const linkStyle = {
    marginRight: 15
};

const Header = props => (
    <div>
        <Link href="/">
            <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/tugas">
            <a style={linkStyle}>Tugas</a>
        </Link>
        <Link href="/erna">
            <a style={linkStyle}>Ernawati</a>
        </Link>
    </div>
);

export default Header;
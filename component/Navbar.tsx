import Link from "next/link";
function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <li>
          <Link href="/"> Home</Link>
        </li>
        <li>
          <Link href="/contact"> Contact </Link>
        </li>
        <li>
          <Link href="/about"> About </Link>
        </li>
        <li>
          <Link href="/users"> User </Link>
        </li>
        <li>
          <Link href="/reactredux/cake"> React Redux </Link>
        </li>
        <li>
          <Link href="/reactreduxtoolkit/cake">React Redux Toolkit</Link>
        </li>
        <li>
          <Link href="/reactreduxtoolkit/post">RTK-Posts</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;

import Link from 'next/link'

const Navbar = () => (
  <div>
    <ul>
      <li>
        <Link href="/">
          <a>NextJs</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>About</a>
        </Link>
      </li>
    </ul>

    <style jsx>{`
      div {
        background-color: #333;
      }

      ul {
        margin: 0 auto;
        width: 80%;
        height: 80px;
        display: flex;
        align-items: center;
        list-style: none;
        color: #fff;
      }

      li {
        margin-left: 20px;
      }

      li:nth-child(1) {
        margin: 0 auto 0 0;
      }

      a {
        text-decoration: none;
        color: #fff;
        font-size: 18px;
        font-weight: 600;
        font-family: 'Roboto', sans-serif;
      }
    `}</style>
  </div>
)

export default Navbar
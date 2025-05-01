import styles from "./styles.module.css";

function Navbar() {
  return (
    <header>
      <nav className={styles}>
        <div className={styles.logo}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="150"
            height="80"
            viewBox="0 0 95 50"
            fill="none"
          >
            <rect
              x="10"
              y="10"
              width="50"
              height="30"
              rx="3"
              fill="#fff"
              stroke="#fff"
              stroke-width="2"
            />
            <rect x="13" y="13" width="4" height="4" fill="#000" />
            <rect x="13" y="23" width="4" height="4" fill="#000" />
            <rect x="13" y="33" width="4" height="4" fill="#000" />
            <rect x="53" y="13" width="4" height="4" fill="#000" />
            <rect x="53" y="23" width="4" height="4" fill="#000" />
            <rect x="53" y="33" width="4" height="4" fill="#000" />
            <circle cx="75" cy="25" r="8" stroke="#fff" stroke-width="2" />
            <line
              x1="80"
              y1="30"
              x2="90"
              y2="40"
              stroke="#fff"
              stroke-width="2"
            />
          </svg>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;

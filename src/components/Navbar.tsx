function Navbar(props: { changePage: (page: string) => void }) {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <a
          className="btn btn-ghost text-xl"
          onClick={() => props.changePage("home")}
        >
          <span className="material-symbols-rounded">headset_mic</span>
          RadioReady
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <details>
              <summary>
                <span className="material-symbols-rounded">
                  contact_support
                </span>
                Help
              </summary>
              <ul className="bg-base-100 rounded-t-none p-2">
                <li>
                  <a>
                    <span className="material-symbols-rounded">
                      developer_guide
                    </span>
                    Guide
                  </a>
                </li>
                <li>
                  <a href="mailto:me@samneale.dev">
                    <span className="material-symbols-rounded">
                      contact_mail
                    </span>
                    Email
                  </a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;

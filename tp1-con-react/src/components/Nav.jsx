export const Nav = () => {
  return (
    <>
      <div className="container-nav">
        <label htmlFor="numero-items">Items por página</label>
        <select name="numero-items" id="number-items">
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
        </select>
        <nav>
          <ul className="nav-bar">
            <li className="nav-item">
              <div id="items" className="div-nav"></div>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

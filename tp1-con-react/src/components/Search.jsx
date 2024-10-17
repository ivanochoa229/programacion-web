export const Search = () => {
  return (
    <>
      <div className="search">
        <input
          type="text"
          name="lastname"
          id="lastname"
          placeholder="Buscar por apellido"
        />
        <button type="submit" className="search-button" id="search">
          Buscar
        </button>
      </div>
    </>
  );
};

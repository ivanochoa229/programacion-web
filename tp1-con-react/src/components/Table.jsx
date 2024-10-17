import { Nav } from "./Nav";

export const Table = () => {
  return (
    <>
      <div className="table">
        <div>
          <table>
            <thead className="table-head">
              <tr>
                <th>Legajo</th>
                <th>Nombre</th>
                <th>Apellido</th>
              </tr>
            </thead>
            <tbody id="student_table" className="table-body"></tbody>
          </table>
          <Nav />
        </div>
      </div>
    </>
  );
};

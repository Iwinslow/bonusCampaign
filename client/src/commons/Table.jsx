function Table({ data }) {
  return (
    <>
      {data ? (
        <table className="succesInv__table">
          <thead>
            <tr className="succesInv__table--header">
              <th>Nombre completo</th>
              <th>Invitaciones</th>
              <th>Total recibido $</th>
            </tr>
          </thead>
          <tbody>
            {data.map((client, i) => (
              <tr key={i}>
                <td key={i}>{client.fullName}</td>
                <td key={i + 1}>{client.invitationsSent}</td>
                <td key={i + 2}>{client.totalReceived}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="succesInv__empty">
          <div className="succesInv__empty--msj">
            No se han encontrado invitaciones{" "}
          </div>
          <div className="succesInv__empty--img">
            <img
              src="https://cdn.dribbble.com/users/3821/screenshots/5673869/attachments/1225509/desert.png"
              alt="No data"
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Table;

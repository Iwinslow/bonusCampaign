import styles from "../styles/Table.module.css";

function Table({ data }) {
  //Convierte los totales alojados en la DB en divisas CLP
  const currencyFormaterCLP = (number) => {
    let clpFormater = new Intl.NumberFormat("es-CL", {
      currency: "CLP",
      style: "currency",
    }).format(number);
    return clpFormater;
  };

  return (
    <>
      {data ? (
        <table className={styles.table}>
          <thead>
            <tr className={styles.head}>
              <th>Nombre completo</th>
              <th>Invitaciones</th>
              <th>Total recibido $</th>
            </tr>
          </thead>
          <tbody>
            {data.map((client, i) => (
              <tr key={i}>
                <td key={i}>{client.fullName}</td>
                <td style={{ textAlign: "center" }} key={i + 1}>
                  {client.invitationsSent}
                </td>
                <td style={{ textAlign: "center" }} key={i + 2}>
                  {currencyFormaterCLP(client.totalReceived)}
                </td>
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

import { getAllSuccessfulInvitationsData } from "../services/invitationServices";
import useFetch from "../hooks/useFetch";
import Table from "../commons/Table";
import styles from "../styles/SuccessInvitations.module.css";

function SuccessInvitations() {
  const { data, loading } = useFetch(getAllSuccessfulInvitationsData);
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Estado de las Invitaciones</h3>
      {loading ? (
        <div className={styles.loading}>
          <h3>Loading...</h3>
        </div>
      ) : (
        <div className={styles.tableContainer}>
          <Table data={data} />
        </div>
      )}
    </div>
  );
}

export default SuccessInvitations;

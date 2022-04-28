import { getAllSuccessfulInvitationsData } from "../services/invitationServices";
import useFetch from "../hooks/useFetch";
import Table from "../commons/Table";

function SuccessInvitations() {
  const { data, loading } = useFetch(getAllSuccessfulInvitationsData);
  return (
    <div className="succesInv__container">
      <h3 className="succesInv__title">Estado de las Invitaciones</h3>
      {loading ? (
        <div className="succesInv__loading">
          <h3>Loading...</h3>
        </div>
      ) : (
        <div className="succesInv__tableContainer">
          <Table data={data} />
        </div>
      )}
    </div>
  );
}

export default SuccessInvitations;

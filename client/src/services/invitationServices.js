import axios from "axios";

export const generateInvitationLink = async ({ email, fullName }) => {
  console.log("en services", email, fullName);
  const link = await axios.post("http://localhost:3001/invite", {
    email,
    fullName,
  });
  console.log("link en services", link);
  return link.data.link;
};

export const getAllSuccessfulInvitationsData = async () => {
  const allSuccessfulInvitations = await axios.get(
    "http://localhost:3001/invite/allsuccessful"
  );
  return allSuccessfulInvitations.data;
};

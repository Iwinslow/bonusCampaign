import axios from "axios";

export const generateInvitationLink = async ({ email, fullName }) => {
  try {
    const link = await axios.post("http://localhost:3001/invite", {
      email,
      fullName,
    });
    return link.data.link;
  } catch (error) {
    if (error.response) {
      const errorMsj = { message: error.response.data.message };
      return errorMsj;
    }
  }
};

export const getAllSuccessfulInvitationsData = async () => {
  const allSuccessfulInvitations = await axios.get(
    "http://localhost:3001/invite/allsuccessful"
  );
  return allSuccessfulInvitations.data;
};

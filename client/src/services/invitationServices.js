import axios from "axios";

export const generateInvitationLink = async ({ email, fullName }) => {
  try {
    let emailFormated = email.toLowerCase();
    let fullNameFormated = fullName.toLowerCase();
    const link = await axios.post("http://localhost:3001/invite", {
      email: emailFormated,
      fullName: fullNameFormated,
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
  try {
    const allSuccessfulInvitations = await axios.get(
      "http://localhost:3001/invite/allsuccessful"
    );
    return allSuccessfulInvitations.data;
  } catch (error) {
    if (error.response) {
      const errorMsj = { message: error.response.data.message };
      return errorMsj;
    }
  }
};

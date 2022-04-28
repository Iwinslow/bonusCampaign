import axios from "axios";

export const createClientByInvitation = async ({
  email,
  fullName,
  address,
  gender,
  link,
}) => {
  try {
    const newClient = await axios.post(
      `http://localhost:3001/register/invite/${link}`,
      {
        email,
        fullName,
        address,
        gender,
      }
    );
    return newClient.data;
  } catch (error) {
    if (error.response) {
      const errorMsj = { message: error.response.data.message };
      return errorMsj;
    }
  }
};

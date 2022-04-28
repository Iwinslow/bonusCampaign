const invitationsDataFixer = async (invitationsArray, Model) => {
  const successfulInvitations = await Promise.all(
    invitationsArray.map(async (invitation) => {
      //Trae el fullName del usuario que envio la invitacion
      let fullName = (await Model.findByPk(invitation.senderId)).dataValues
        .fullName;
      //totaliza las invitaciones existosas enviadas por el usuario
      let invitationsSent = invitationsArray.filter(
        ({ senderId }) => senderId === invitation.senderId
      ).length;
      //calcular la bonificacion obtenida por el cliente gracias a las invitaciones exitosas (total recibido)
      let totalReceived = invitationsSent * 5000;
      return {
        fullName,
        invitationsSent,
        totalReceived,
      };
    })
  );
  //Elimina los objetos repetidos generados en el bucle
  const successfulInvitationsSort = [
    ...successfulInvitations
      .reduce((map, obj) => map.set(obj.fullName, obj), new Map())
      .values(),
  ];
  //Ordena el array de invitaciones exitosas respecto al total recibido
  successfulInvitationsSort.sort((a, b) =>
    a.totalReceived < b.totalReceived
      ? 1
      : b.totalReceived < a.totalReceived
      ? -1
      : 0
  );

  return successfulInvitationsSort;
};

module.exports = invitationsDataFixer;

# currencyBirdCampaign

<h3>Premisas</h3>
<p>Debera contar con PostgreSQL instalado en su ordenador para correr el proyecto.</p>
<p>Si su conección al servicio de PostgreSQL en su ordenador esta configurado con un usuario y contraseña, debera setiar los mismos en el servidor. 
Para esto: 
1) ingrese al directorio del proyecto /currencyBirdCampaign/server/config/db.js;
2) en la linea numero 3 del codigo de dicho archivo, cambie el segundo y tercer parametro de la instancia del constructor Sequelize por su usuario y su password (new Sequelize('database', 'username', 'password, {...opt}))
</p>

<h3>Instrucciones para correr el proyecto</h3>
<ol>
    <li>Generar dos terminales, una posicionado en el directorio del servidor (/currencyBirdCampaign/server) y otra posicionado en el directorio del cliente (/currencyBirdCampaign/client)</li>
    <li>Correr el comando "npm install" en ambas terminales (servidor y cliente). Aguardar que finalicen para avanzar.</li>
    <li>Desde la terminal del server, correr el script "npm run createdb"</li>
    <li>Desde la terminal del server, correr el script "npm run seed"</li>
    <li></li>
    <li></li>
</ol>

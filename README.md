<h1>¡Campaña de Bonificaciones!</h1>

<h3>Premisas</h3>
<p>Debera contar con PostgreSQL instalado en su ordenador para correr el proyecto.</p>
<p>Si su conección al servicio de PostgreSQL en su ordenador esta configurado con un usuario y contraseña, debera setiar sus credenciales en el archivo postgresqlCredentials.js ubicado en la carpeta "config" del directorio server. Por defecto se encuentran setiandos en "null".
</p>
<p>Tener en cuenta que el servidor esta configurado para funcionar de forma local en el puerto Nª3001 podra modificarlo desde el archivo index.js del directorio server.</p>
<p>Usuarios seedeados en DB (email/fullname):
    <ul>
        <li><code>{email:"test1@test.com", fullName:"test one"}</code></li>
        <li><code>{email:"test2@test.com", fullName:"test two"}</code></li>
        <li><code>{email:"test3@test.com", fullName:"test three"}</code></li>
    </ul>
    <p>Podra correr pruebas y crear sus propios usuarios utilizando estos para concretar sus primeras invitaciones</p>
</p>

<h3>Instrucciones para correr el proyecto</h3>
<ol>
    <li>Generar dos terminales, una posicionado en el directorio del servidor (/currencyBirdCampaign/server) y otra posicionado en el directorio del cliente (/currencyBirdCampaign/client)</li>
    <li>Correr el comando "npm install" en ambas terminales (servidor y cliente). Aguardar que finalicen para avanzar.</li>
    <li>Desde la terminal del server, correr los siguientes scripts en orden:
    <ul>
    <li><code>npm run createdb</code></li>
    <li><code>npm run seed</code></li>
    <li><code>npm start</code></li>
    </ul>
    </li>
    <li>Desde la terminal del cliente corres el script "npm start"</li>
    <li>Ingresar mediante el browser a <code>http://localhost:3000</code></li>
</ol>

<h3>Stack de tecnologias utilizado:</h3>
<h2>Front</h2>
 <ul>
    <li>ReactJS</li>
    <li>CSS components</li>
    <li>HTML</li>
    </ul>
<h2>Back</h2>
 <ul>
    <li>NodeJS</li>
    <li>PostgreSQL</li>
    <li>Express</li>
    <li>Sequelize (ORM)</li>
    </ul>

<h1>¡Have Fun!</h1>

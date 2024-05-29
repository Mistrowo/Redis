const redis = require('redis');
const { redisHost, redisPort, redisPassword } = require('./config');

const client = redis.createClient({
  socket: {
    host: redisHost,
    port: redisPort
  },
  password: redisPassword
});

client.on('error', (err) => console.log('Error de Redis Client', err));
client.on('connect', () => console.log('Conexión exitosa con Redis'));

// Función para insertar un valor en Redis
async function setData(key, value) {
  await client.set(key, value);
  console.log(`Valor '${value}' insertado con la clave '${key}'`);
}

// Función para obtener un valor de Redis
async function getData(key) {
  const value = await client.get(key);
  console.log(`Valor obtenido para la clave '${key}': ${value}`);
}

// Abrir la conexión
client.connect();

// Ejemplo de uso
setData('miClave', 'Hola!');
getData('miClave');

// Cerrar la conexión cuando hayas terminado de realizar todas las operaciones
client.quit();

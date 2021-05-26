const fastify = require("fastify");
const fastifyCors = require("fastify-cors");
const { Client } = require("pg");

const client = new Client({
  connectionString:
    "postgres://blcnadud:doaA8NSF1PAehAc-DvjkM6flla9kIqVA@manny.db.elephantsql.com:5432/blcnadud",
});

const server = fastify({ logger: true });

server.register(fastifyCors, {});

server.get("/", async (request, reply) => {
  const sql = "SELECT * FROM results ORDER BY time ASC;";
  const result = await client.query(sql);
  reply.send(result.rows);
});

server.post("/", async (request, reply) => {
  const sql =
    "INSERT INTO results (username, time, course, placement) VALUES ($1, $2, $3, $4);";
  const values = [
    request.body.name,
    request.body.time,
    request.body.course,
    request.body.placement,
  ];
  const result = await client.query(sql, values);
  reply.send(result);
});

server.get("/godot", async (request, reply) => {
  const sql = "SELECT * FROM settings;";
  const result = await client.query(sql);
  reply.send(result.rows);
});

server.put("/godot", async (request, reply) => {
  const sql =
    "UPDATE settings SET difficulty = $1, laps = $2, map = $3, username = $4 WHERE id = '3';";
  const values = [
    request.body.difficulty,
    request.body.laps,
    request.body.map,
    request.body.username,
  ];
  const result = await client.query(sql, values);
  reply.send(result);
});

(async () => {
  try {
    await client.connect();

    await client.query(`
    CREATE TABLE IF NOT EXISTS results (
      raceid serial PRIMARY KEY,
      username TEXT NOT NULL,
      time TIME NOT NULL,
      course VARCHAR(20),
      placement VARCHAR(10)
    );
    `);

    await server.listen(3002);

    console.info("App started correctly");
  } catch (err) {
    console.error(`Boot Error: ${err.message}`);
  }
})();

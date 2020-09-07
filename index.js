const client = require("./database/db");

helloWorld = async () => {
  try {
    const res = await client.query("SELECT $1::text as message", [
      "Hello world!",
    ]);
    console.log("res", res.rows[0]);
  } catch (e) {
    console.log("e", e.stack);
  }
};

dateNow = async () => {
  try {
    const res = await client.query("SELECT NOW() as now");

    const date = new Date(res.rows[0].now);

    const dd = String(date.getDate()).padStart(2, "0");
    const mm = String(date.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = date.getFullYear();

    console.log("Date:", `${dd}/${mm}/${yyyy}`);
  } catch (e) {
    console.log("e", e.stack);
  }
};

main = async () => {
  console.log("Start");
  try {
    client.connect();
    await helloWorld();
    await dateNow();
  } catch (e) {
    console.log("e", e);
    process.exit();
  }
  client.end();
  console.log("End");
};

main();

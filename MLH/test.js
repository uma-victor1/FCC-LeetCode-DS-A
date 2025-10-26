const express = require("express");
const { Pool } = require("pg"); 

const app = express();
app.use(express.json()); 

// Configure your PostgreSQL connection
const pool = new Pool({
  // your user, host, database, password, port
});

async function addToBlacklist(entityType, entityValue, reason) {
  const client = await pool.connect();
  try {
    const query = `
      INSERT INTO blacklist (entity_type, entity_value, reason) 
      VALUES ($1, $2, $3) 
      ON CONFLICT (entity_value) DO NOTHING
    `;
    await client.query(query, [entityType, entityValue, reason]);
    console.log(`Successfully blacklisted ${entityType}: ${entityValue}`);
  } catch (error) {
    console.error(`Error adding to blacklist: ${error}`);
  } finally {
    client.release();
  }
}

app.post("/flw-webhook", async (req, res) => {
  const payload = req.body;
  const eventType = payload.event;

  if (eventType === "chargeback.initiated" && payload.data) {
    const { customer, ip_address: ipToBlacklist } = payload.data;
    const emailToBlacklist = customer?.email;

    if (emailToBlacklist) {
      await addToBlacklist("email", emailToBlacklist, "Chargeback initiated");
    }

    if (ipToBlacklist) {
      await addToBlacklist("ip_address", ipToBlacklist, "Chargeback initiated");
    }
  }

  res.status(200).json({ status: "success" });
});

import app from "./app.js";
import sequelize from "./config/database.js";
import "./models/flows.js";
import "./models/groups.js";

const PORT = process.env.PORT || 5000;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
  });
});
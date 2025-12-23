import express from "express";
import mysql from "mysql2";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// MySQL 연결
const db = mysql.createConnection({
  host: "10.68.0.172:3306",
  user: "officewdm",
  password: "edoc",
  database: "edoc"
});

// CREATE
app.post("/partner_ccd", (req, res) => {
  const { ccdmd, orgccd, newccd } = req.body;
  db.query("INSERT INTO partner_ccd (ccdmd, orgccd, newccd) VALUES (?, ?, ?)", [ccdmd, orgccd, newccd], (err, result) => {
    if (err) return res.json(err);
    res.json({ ccdmd, orgccd, newccd });
  });
});

// READ
app.get("/partner_ccd", (req, res) => {
  db.query("SELECT * FROM partner_ccd", (err, rows) => {
    if (err) return res.json(err);
    res.json(rows);
  });
});

// UPDATE
app.put("/partner_ccd/:orgccd", (req, res) => {
  const { ccdmd, orgccd, newccd } = req.body;
  db.query("UPDATE partner_ccd SET ccdmd=?, orgccd=?, newccd=? WHERE  ccdmd=? AND orgccd=?", [ccdmd, orgccd, newccd, req.params.ccdmd, req.params.orgccd], (err) => {
    if (err) return res.json(err);
    res.json({ id: req.params.id, ccdmd, orgccd, newccd });
  });
});

// DELETE
app.delete("/partner_ccd/:orgccd", (req, res) => {
  db.query("DELETE FROM partner_ccd WHERE ccdmd=? AND orgccd=?", [req.params.ccdmd, req.params.orgccd], (err) => {
    if (err) return res.json(err);
    res.json({ message: "Deleted successfully" });
  });
});
app.listen(5000, () => console.log("Server running on port 5000"));

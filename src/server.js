import express from "express";
import mysql from "mysql2";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// MySQL 연결
const db = mysql.createConnection({
  host: "10.68.0.172",
  port: 3306,
  user: "edoc",
  password: "edoc",
  database: "officewdm"
});

let partners = [
  {ccdmd:"MDL",orgccd:"13099913",newccd:"L409903"},
  {ccdmd:"MDL",orgccd:"13099912",newccd:"L409902"}
];

/* app.get(("/partners"), (req, res) => {
  res.json(partners);
}); */

// READ
app.get("/partners", (req, res) => {
  db.query("SELECT * FROM partner_md", (err, rows) => {
    if (err) return res.json(err);
    res.json(rows);
  });
});

// CREATE
app.post("/partners", (req, res) => {
  const { ccdmd, orgccd, newccd } = req.body;
  db.query("INSERT INTO partner_md (ccdmd, orgccd, newccd) VALUES (?, ?, ?)", [ccdmd, orgccd, newccd], (err, result) => {
    if (err) return res.json(err);
    res.json({ id: orgccd,ccdmd, orgccd, newccd });
  });
});

// UPDATE
app.put("/partners/:ccdmd/:orgccd", (req, res) => {
  const { ccdmd, orgccd, newccd } = req.body;
  db.query("UPDATE partner_md SET ccdmd=?, orgccd=?, newccd=? WHERE  ccdmd=? AND orgccd=?", [ccdmd, orgccd, newccd, req.params.ccdmd, req.params.orgccd], (err) => {
    if (err) return res.json(err);
    res.json({ id: req.params.orgccd, ccdmd, orgccd, newccd });
  });
});

// DELETE
app.delete("/partners/:orgccd", (req, res) => {
  const { orgccd } = req.params;
  console.log("delete 요청 들어옴"); // 정상 로그
  console.log("orgccd:"+req.params.orgccd); // 정상 로그
  db.query("DELETE FROM partner_md WHERE orgccd=?", [req.params.orgccd], (err) => {
    if (err) return res.json(err);
    res.json({ message: "Deleted successfully" });
  });
});

// DELETE 예제: orgccd와 ccdmd 두 개 파라미터로 조건 처리
app.delete("/partners/:orgccd/:ccdmd", (req, res) => {
  const { orgccd, ccdmd } = req.params;
  const sql = "DELETE FROM partner_md WHERE orgccd=? AND ccdmd=?";
  db.query(sql, [orgccd, ccdmd], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Deleted successfully", orgccd, ccdmd });
  });
});


app.listen(5000, () => console.log("Server running on port 5000"));

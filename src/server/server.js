import express from "express";
import { renderToString } from "react-dom/server";
import { indexTemplate } from "./indexTemplate";
import App from "../shared/App";
import React from "react";
import { StaticRouter } from "react-router-dom/server";
import bodyParser from "body-parser";
import nodemailer from "nodemailer";
import { HelmetProvider } from 'react-helmet-async';

const fs = require("fs");
const path = require("path");
const sqlite3 = require("sqlite3").verbose();
const DBSOURCE = "./database.sqlite";
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var https = require("https"); // для организации https
var httpsOptions = {
  key: fs.readFileSync("server.key"), // путь к ключу
  cert: fs.readFileSync("server.crt"), // путь к сертификату
};
// const server = https.createServer(options, app);
app.use("/static", express.static("./dist/client"));
app.use("/images", express.static("images"));
app.use("/favicon.ico", express.static("src/images/favicon.png"));
app.use(express.static("dist"));
const { execSync } = require("child_process");
const folderPath = "./src/images/stairs";
let db = new sqlite3.Database(DBSOURCE, (err) => {
  if (err) {
    console.error(err.message);
    throw err;
  } else {
    console.log("Connected to the SQLite database.");
    db.run(
      "CREATE TABLE IF NOT EXISTS Catalog (id INTEGER PRIMARY KEY, name TEXT, description TEXT)",
      (err) => {
        if (err) {
          console.error(err.message);
          throw err;
        }
        console.log("Catalog table created successfully.");
      }
    );
    db.run(
      "CREATE TABLE IF NOT EXISTS Canopies (id INTEGER PRIMARY KEY, name TEXT, description TEXT)",
      (err) => {
        if (err) {
          console.error(err.message);
          throw err;
        }
        console.log("Canopies table created successfully.");
      }
    );
    db.run(
      "CREATE TABLE IF NOT EXISTS Gates (id INTEGER PRIMARY KEY, name TEXT, description TEXT)",
      (err) => {
        if (err) {
          console.error(err.message);
          throw err;
        }
        console.log("Gates table created successfully.");
      }
    );
    fs.readdir(folderPath, (err, files) => {
      if (err) {
        throw err;
      }
      files.forEach((file) => {
        const filePath = path.join(folderPath, file);
        console.log(filePath);
        const sql1 = "DELETE FROM Gates";
        // db.run(sql1, [], (err) => {
        //   if (err) {
        //     console.error(err.message);
        //     throw err;
        //   }
        //   console.log("DvuskatnieCanopies table cleared.");
        // });
        // Insert the file name into the Gates table
        // const sql = "INSERT INTO Stairs (img) VALUES (?)";
        // db.run(sql, [file], (err) => {
        //   if (err) {
        //     console.error(err.message);
        //     throw err;
        //   }
        //   console.log(`${file} inserted into PolyarboneGates table.`);
        // });
      });
    });
  }
});
app.get("/api/db", (req, res) => {
  const sql = "SELECT * FROM Catalog";
  const db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
      console.error(err.message);
      throw err;
    } else {
      db.all(sql, [], (err, rows) => {
        if (err) {
          throw err;
        }
        res.json(rows);
      });
    }
  });
});
app.get("/api/db/canopies", (req, res) => {
  console.log("canopies");
  const sql = "SELECT * FROM Canopies";
  const db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
      console.error(err.message);
      throw err;
    } else {
      db.all(sql, [], (err, rows) => {
        if (err) {
          throw err;
        }
        res.json(rows);
      });
    }
  });
});
app.get("/api/db/benches", (req, res) => {
  console.log("canopies");
  const sql = "SELECT * FROM Benches";
  const db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
      console.error(err.message);
      throw err;
    } else {
      db.all(sql, [], (err, rows) => {
        if (err) {
          throw err;
        }
        res.json(rows);
      });
    }
  });
});
app.get("/api/db/stairs", (req, res) => {
  console.log("canopies");
  const sql = "SELECT * FROM Stairs";
  const db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
      console.error(err.message);
      throw err;
    } else {
      db.all(sql, [], (err, rows) => {
        if (err) {
          throw err;
        }
        res.json(rows);
      });
    }
  });
});
app.get("/api/db/fence", (req, res) => {
  const sql = "SELECT * FROM Fence";
  const db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
      console.error(err.message);
      throw err;
    } else {
      db.all(sql, [], (err, rows) => {
        if (err) {
          throw err;
        }
        res.json(rows);
      });
    }
  });
});
app.get("/api/db/alcove", (req, res) => {
  const sql = "SELECT * FROM Alcove";
  const db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
      console.error(err.message);
      throw err;
    } else {
      db.all(sql, [], (err, rows) => {
        if (err) {
          throw err;
        }
        res.json(rows);
      });
    }
  });
});
app.get("/api/db/gratings", (req, res) => {
  const sql = "SELECT * FROM Gratings";
  const db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
      console.error(err.message);
      throw err;
    } else {
      db.all(sql, [], (err, rows) => {
        if (err) {
          throw err;
        }
        res.json(rows);
      });
    }
  });
});
app.get("/api/db/gates", (req, res) => {
  const sql = "SELECT * FROM Gates";
  const db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
      console.error(err.message);
      throw err;
    } else {
      db.all(sql, [], (err, rows) => {
        if (err) {
          throw err;
        }
        res.json(rows);
      });
    }
  });
});
app.get("/api/db/railing", (req, res) => {
  const sql = "SELECT * FROM Railing";
  const db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
      console.error(err.message);
      throw err;
    } else {
      db.all(sql, [], (err, rows) => {
        if (err) {
          throw err;
        }
        res.json(rows);
      });
    }
  });
});
app.get("/sitemap.xml", (req, res) => {
  const filePath = path.join(__dirname, "../sitemap.xml");
  res.sendFile(filePath);
});
app.get("/robots.txt", (req, res) => {
  const filePath = path.join(__dirname, "../robots.txt");
  res.sendFile(filePath);
});
app.post("/api/sendDataToEmail", (req, res) => {
  const { name, phoneNumber } = req.body;
  sendMail();
  
  async function sendMail () {
    let transporter = nodemailer.createTransport({
      pool: true,
      host: "smtp.yandex.ru", //"smtp-mail.outlook.com",
      port: 465, //587,
      auth: {
        user: "kovka.naves@yandex.ru",
        pass: "dvcwvhqeuuuqnizt",
      },
    });
    let message = {
      from: "kovka.naves@yandex.ru",
      to: "kovka.naves@yandex.ru",
      subject: "Hello",
      text: `${name} ${phoneNumber}`,
    };
    try {
      let info = await transporter.sendMail(message);
      if (info.response.substr(0, 3) == "250") {
        console.log("Письмо успешно отправлено!");
      } else {
        console.log("Ошибка отправки письма!");
      }
    } catch (err) {
      console.log("Ошибка отправки письма:", err);
    }
  }
  
  res.status(200).send("ok");
});
// app.get('*', (req, res) => {
//   const helmetContext = {};
//   const appHtml = renderToString(
//     <HelmetProvider context={helmetContext}>
//       <App />
//     </HelmetProvider>
//   );
//   const { helmet } = helmetContext;
//   const metaTags = helmet.meta.toString();
//   console.log(metaTags, " ", appHtml);
//   const html = `
//     <html>
//          <head>
//            ${metaTags}
//          </head>
//          <body>
//            <div id="root">${appHtml}</div>
//          </body>
//        </html>
//      `;
//   res.send(html);
// });
app.get("*", async (req, res) => {
  console.log("req.url = ", req.url);
  const helmetContext = {};
  const appHtml = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={req.url}>
        <App />
      </StaticRouter>
    </HelmetProvider>
  );
  const { helmet } = helmetContext;
  const metaTags = helmet.meta.toString();
  console.log("meta = ", metaTags);
  const html = indexTemplate(appHtml, metaTags);
  res.send(html);
});
https.createServer(httpsOptions, app).listen(443);
app.listen(80, () => {
  console.log(`Server started on http://localhost:3000`);
});

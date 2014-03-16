DROP TABLE IF EXISTS ideas;
CREATE TABLE ideas (
  id INTEGER PRIMARY KEY autoincrement,
  title text NOT NULL,
  description text NOT NULL
);

DROP TABLE IF EXISTS images;
CREATE TABLE images (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  image_id INTEGER,
  image TEXT,
  FOREIGN KEY(image_id) REFERENCES ideas(id)
);
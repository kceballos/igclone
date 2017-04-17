--------------------------------------------------------------------------------
-- Up
--------------------------------------------------------------------------------

CREATE TABLE Users (
  id         INTEGER   PRIMARY KEY,
  name       TEXT      NOT NULL,
  follows    TEXT      NOT NULL
);

CREATE TABLE Posts (
  id             INTEGER   PRIMARY KEY AUTOINCREMENT,  /* added autoincrement to post IDs */
  description    TEXT      NOT NULL,
  url            TEXT      NOT NULL
);

--------------------------------------------------------------------------------
-- Down
--------------------------------------------------------------------------------

DROP TABLE Users;
DROP TABLE Posts;

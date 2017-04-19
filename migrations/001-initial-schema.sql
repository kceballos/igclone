--------------------------------------------------------------------------------
-- Up
--------------------------------------------------------------------------------

CREATE TABLE Users (
  id         INTEGER   PRIMARY KEY, -- user's ID, autogenerated
  email      TEXT NOT NULL,  -- user's email
  password   TEXT NOT NULL,  -- password
  f_name     TEXT,  -- user's first name
  l_name     TEXT,  -- user's first name
  bio        TEXT  -- user's bio
);

CREATE TABLE Follows (
  user_id        INTEGER   NOT NULL PRIMARY KEY, -- equal to a user's ID
  followed       INTEGER   NOT NULL, -- followed user id
  FOREIGN KEY (user_id) REFERENCES Users(id) --using a specific key to refence another table 
);


CREATE TABLE Posts (
  id             INTEGER   PRIMARY KEY, -- a given post's id, autogenerated
  user_id        INTEGER   NOT NULL, -- equal to a user's ID
  description    TEXT      NOT NULL, -- text field for post
  url            TEXT      NOT NULL, -- url to image hosted externally
  FOREIGN KEY (user_id) REFERENCES Users(id) --using a specific key to refence another table 
);

--------------------------------------------------------------------------------
-- Down
--------------------------------------------------------------------------------

DROP TABLE Users;
DROP TABLE Follows;
DROP TABLE Posts;

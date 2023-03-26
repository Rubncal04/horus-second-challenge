CREATE DATABASE horus_project;

CREATE TABLE projects(
  id SERIAL PRIMARY KEY,
  code INT NOT NULL UNIQUE,
  status VARCHAR(255),
  type VARCHAR(255)
);

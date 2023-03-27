CREATE TABLE devices(
  id SERIAL PRIMARY KEY,
  project_id INT,
  code INT NOT NULL UNIQUE,
  status VARCHAR(255),
  type VARCHAR(255),
  CONSTRAINT fk_project
    FOREIGN KEY(project_id)
      REFERENCES projects(id)
);
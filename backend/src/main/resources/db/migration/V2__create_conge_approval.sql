-- Migration: create conge_approval table
CREATE TABLE IF NOT EXISTS conge_approval (
  id BIGINT PRIMARY KEY AUTO_INCREMENT,
  conge_id BIGINT NOT NULL,
  approver_id INT NOT NULL,
  level INT,
  decision VARCHAR(50),
  commentaire TEXT,
  decided_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_conge_approval_conge FOREIGN KEY (conge_id) REFERENCES conges(idConge),
  CONSTRAINT fk_conge_approval_approver FOREIGN KEY (approver_id) REFERENCES personnel(id)
);

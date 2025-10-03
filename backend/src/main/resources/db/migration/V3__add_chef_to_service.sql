-- Add chef relation to service and index
ALTER TABLE services ADD COLUMN chef_id BIGINT;
ALTER TABLE services ADD CONSTRAINT fk_service_chef FOREIGN KEY (chef_id) REFERENCES personnel(id);
CREATE INDEX idx_service_chef ON services(chef_id);

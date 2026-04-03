-- Create services table
CREATE TABLE services (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  icon_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create careers table
CREATE TABLE careers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  location TEXT NOT NULL,
  type TEXT NOT NULL, -- Full-time, Part-time, Contract
  description TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create contacts table
CREATE TABLE contacts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'New', -- New, Read, Contacted
  submitted_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create job_applications table
CREATE TABLE job_applications (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  job_id UUID REFERENCES careers(id) ON DELETE SET NULL,
  candidate_name TEXT NOT NULL,
  email TEXT NOT NULL,
  resume_url TEXT NOT NULL,
  submitted_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE services ENABLE ROW LEVEL SECURITY;
ALTER TABLE careers ENABLE ROW LEVEL SECURITY;
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE job_applications ENABLE ROW LEVEL SECURITY;

-- Policies for services (Public Read, Admin Write)
CREATE POLICY "Public services are viewable by everyone" ON services
  FOR SELECT USING (true);

-- Policies for careers (Public Read, Admin Write)
CREATE POLICY "Public careers are viewable by everyone" ON careers
  FOR SELECT USING (true);

-- Policies for contacts (Public Insert, Admin Select)
CREATE POLICY "Anyone can submit contact form" ON contacts
  FOR INSERT WITH CHECK (true);
  
-- Policies for job_applications (Public Insert, Admin Select)
CREATE POLICY "Anyone can apply for jobs" ON job_applications
  FOR INSERT WITH CHECK (true);

-- Insert Dummy Data for Services
INSERT INTO services (title, description) VALUES
('CCTV Surveillance Systems', 'Advanced surveillance solutions for security.'),
('Networking Services', 'Complete networking infrastructure setup and management.'),
('Video Conferencing', 'High-quality video conferencing solutions.'),
('Public Address Systems', 'Clear and reliable public address systems.'),
('Solar System Solutions', 'Sustainable and efficient solar energy solutions.');

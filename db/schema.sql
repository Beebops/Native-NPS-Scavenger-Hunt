CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) NOT NULL UNIQUE,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() 
);

CREATE TABLE parks (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL UNIQUE,
  code VARCHAR(20) NOT NULL UNIQUE,
  state VARCHAR(10) NOT NULL,
  description TEXT,
  image_url TEXT
);

CREATE TABLE hunts (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  user_id INT,
  park_id INT,
  is_complete BOOLEAN NOT NULL,
  date_started DATE NOT NULL,
  date_complete DATE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (park_id) REFERENCES parks(id)
)

CREATE TABLE photos (
  id SERIAL PRIMARY KEY,
  user_id INT,
  hunt_id INT,
  image_url TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (hunt_id) REFERENCES hunts(id) ON DELETE CASCADE
);

CREATE TABLE species (
  id SERIAL PRIMARY KEY,
  common_name TEXT NOT NULL,
  scientific_name TEXT NOT NULL UNIQUE,
  image_url TEXT NOT NULL,
  description TEXT
);

CREATE TABLE hunt_photos (
  hunt_id INT,
  photo_id INT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  PRIMARY KEY (hunt_id, photo_id),
  FOREIGN KEY (hunt_id) REFERENCES hunts(id), 
  FOREIGN KEY (photo_id) REFERENCES photos(id) ON DELETE CASCADE
)

CREATE TABLE hunt_species (
  hunt_id INT,
  species_id INT,
  isFound BOOLEAN NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  PRIMARY KEY (hunt_id, species_id),
  FOREIGN KEY (hunt_id) REFERENCES hunts(id) ON DELETE CASCADE,
  FOREIGN KEY (species_id) REFERENCES species(id) ON DELETE CASCADE
);

CREATE TABLE park_species (
  park_id INT,
  species_id INT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  PRIMARY KEY (park_id, species_id),
  FOREIGN KEY (park_id) REFERENCES parks(id) ON DELETE CASCADE,
  FOREIGN KEY (species_id) REFERENCES species(id) ON DELETE CASCADE
);

CREATE TABLE favorite_species (
  user_id INT,
  species_id INT,
  PRIMARY KEY (user_id, species_id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (species_id) REFERENCES species(id) ON DELETE CASCADE
);

CREATE TABLE favorite_parks (
  user_id INT,
  park_id INT,
  PRIMARY KEY (user_id, park_id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (park_id) REFERENCES parks(id) ON DELETE CASCADE
);
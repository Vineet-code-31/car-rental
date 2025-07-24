CREATE TABLE IF NOT EXISTS cars (
        id SERIAL PRIMARY KEY,
        make VARCHAR(255) NOT NULL,
        model VARCHAR(255) NOT NULL,
        year INT NOT NULL,
        color VARCHAR(255) NOT NULL,
        price INT NOT NULL
        created_at TIMESTAMP DEFAULT NOW()
    )
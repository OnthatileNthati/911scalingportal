CREATE TABLE sales (
    id SERIAL PRIMARY KEY, 
    amount_cents INTEGER NOT NULL CHECK (amount_cents >= 0),
    note TEXT, 
    created_at TIMESTAMP DEFAULT NOW()
);

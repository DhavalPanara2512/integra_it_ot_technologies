from app.database.session import engine
from sqlalchemy import text

with engine.connect() as conn:
    result = conn.execute(text("SELECT id, name, email, phone, company, message, created_at FROM contacts ORDER BY id DESC LIMIT 5;"))
    rows = result.fetchall()
    print("\n--- LATEST CONTACT INQUIRIES IN DATABASE ---")
    for row in rows:
        print(dict(row._mapping))

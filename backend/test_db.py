from app.database.session import engine
from sqlalchemy import text

try:
    with engine.connect() as conn:
        result = conn.execute(text("SELECT DATABASE();"))
        print("Connected DB:", result.fetchone())
except Exception as e:
    print("DB Connection Error:", e)

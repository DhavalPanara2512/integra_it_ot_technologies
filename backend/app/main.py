import logging

from fastapi import FastAPI
from sqlalchemy.exc import SQLAlchemyError
from fastapi.middleware.cors import CORSMiddleware

from app.config.settings import get_settings
from app.database.base import Base
from app.database.session import engine
from app.routes.contact import router as contact_router
from app.routes.health import router as health_router

settings = get_settings()
logger = logging.getLogger(__name__)

app = FastAPI(title=settings.app_name)

@app.get("/")
def root():
    return {"message": "Integra IT-OT Technologies API is running"}

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.allowed_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("startup")
def create_tables():
    try:
        Base.metadata.create_all(bind=engine)
    except SQLAlchemyError:
        logger.exception("Database initialization failed. Health endpoint remains available.")

app.include_router(health_router)
app.include_router(contact_router)


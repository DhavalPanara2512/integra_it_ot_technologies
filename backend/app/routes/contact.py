from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.exc import SQLAlchemyError
from sqlalchemy.orm import Session

from app.database.session import get_db
from app.schemas.contact import ContactCreate, ContactResponse
from app.services.contact_service import create_contact_inquiry

router = APIRouter(prefix="/api", tags=["contact"])


@router.post("/contact", response_model=ContactResponse, status_code=status.HTTP_201_CREATED)
def submit_contact(payload: ContactCreate, db: Session = Depends(get_db)):
    try:
        record = create_contact_inquiry(db, payload)
    except SQLAlchemyError as exc:
        raise HTTPException(status_code=500, detail="Unable to store the contact inquiry.") from exc

    return {"message": "Contact request submitted successfully.", "id": record.id}

from sqlalchemy.orm import Session

from app.models.contact import ContactInquiry
from app.schemas.contact import ContactCreate


def create_contact_inquiry(db: Session, payload: ContactCreate) -> ContactInquiry:
    record = ContactInquiry(
        name=payload.name.strip(),
        email=payload.email.strip(),
        phone=payload.phone.strip(),
        company=payload.company.strip() if payload.company else None,
        message=payload.message.strip(),
    )
    db.add(record)
    db.commit()
    db.refresh(record)
    return record


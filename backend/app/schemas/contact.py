from pydantic import BaseModel, EmailStr, Field


class ContactCreate(BaseModel):
    name: str = Field(..., min_length=2, max_length=150)
    email: EmailStr
    phone: str = Field(..., min_length=7, max_length=50)
    company: str | None = Field(default=None, max_length=150)
    message: str = Field(..., min_length=10, max_length=5000)


class ContactResponse(BaseModel):
    message: str
    id: int


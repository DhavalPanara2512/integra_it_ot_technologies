import json
import urllib.request

url = "http://localhost:8000/api/contact"
data = {
    "name": "Riya Patel",
    "email": "riya20.surat@gmail.com",
    "phone": "+91 1234567890",
    "company": "ABC",
    "message": "This is a test technical requirement message long enough for validation.",
}

req = urllib.request.Request(
    url,
    data=json.dumps(data).encode("utf-8"),
    headers={"Content-Type": "application/json"},
)

try:
    with urllib.request.urlopen(req) as response:
        print("HTTP Status:", response.status)
        print("Response Body:", response.read().decode())
except Exception as e:
    print("Error:", e)

const API_BASE_URL = import.meta.env.VITE_API_URL || import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

export async function submitContactForm(payload) {
  const response = await fetch(`${API_BASE_URL}/api/contact`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    let errorMessage = "Unable to submit the contact request.";
    if (typeof data.detail === "string") {
      errorMessage = data.detail;
    } else if (Array.isArray(data.detail) && data.detail[0]?.msg) {
      errorMessage = data.detail[0].msg;
    } else if (data.message) {
      errorMessage = data.message;
    }
    throw new Error(errorMessage);
  }

  return data;
}

export { API_BASE_URL };


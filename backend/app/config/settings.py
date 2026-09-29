from functools import lru_cache

from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    app_name: str = "Integra IT-OT Technologies API"
    app_env: str = "development"
    database_url: str = "mysql+pymysql://root:integra%4025@127.0.0.1:3306/integra_ot"
    frontend_origin: str = "http://localhost:5173"
    frontend_url: str = ""

    @property
    def allowed_origins(self) -> list[str]:
        target = self.frontend_url or self.frontend_origin
        if not target:
            return ["http://localhost:5173"]
        return [origin.strip() for origin in target.split(",") if origin.strip()]

    model_config = SettingsConfigDict(env_file=".env", env_file_encoding="utf-8", extra="ignore")


@lru_cache
def get_settings() -> Settings:
    return Settings()


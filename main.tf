provider "google-beta" {
  credentials = file("")

  project = "final-project-passport"
  region  = "asia-southeast1"
  zone    = "asia-southeast1-c"
}

resource "google_cloud_run_service" "default" {
  name     = "final-project-passport"
  location = "asia-southeast1"

  metadata {
    namespace = "final-project-passport"
  }

  traffic {
    percent         = 100
    latest_revision = true
  }

  template {
    spec {
      containers {
        image = "gcr.io/final-project-passport/backend"
        env {
          name  = "NODE_ENV"
          value = "production"
        }

        env {
          name  = "SECRET"
          value = "$(SECRET)"
        }

        env {
          name  = "MONGO_URL"
          value = "$(MONGO_URL)"
        }
      }
    }
  }
}

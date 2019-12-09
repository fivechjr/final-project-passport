provider "google" {
  credentials = file("~/Desktop/GCP.json")

  project = "final-project-passport"
  region  = "asia-southeast1"
  zone    = "asia-southeast1-c"
}

resource "google_cloud_run_service" "default" {
  name     = "cloud-run-final"
  location = "asia-southeast1"

  metadata {
    namespace = "final-project"
  }

  template {
    spec {
      containers {
        image = "gcr.io/final-project-passport/backend"
      }
    }
  }

  traffic {
    percent         = 100
    latest_revision = true
  }
}

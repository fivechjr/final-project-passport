provider "google" {
  credentials = file("~/Desktop/GCP.json")

  project = "cu-passport"
  region  = "us-central1"
  zone    = "us-central1-c"
}

resource "google_cloudbuild_trigger" "filename-trigger" {
  trigger_template {
    branch_name = "master"
    repo_name   = "https://github.com/fivechjr/final-project-2019"
  }
}

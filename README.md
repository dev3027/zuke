# Zuke - Music player

This app is a personal music player running on Rails 8. Intended for one to use like the music players of old. Load your music, images, meta data, graphics or animations and enjoy your music with your style and flair.

I wanted a player that fell somewhere between a zune player and AIMP. I wanted a player that I could upload my music file and effect everything about it. From visuals to band frequencies. I want to listen to the Zeppelins immigrant song to Shrek's visuals on a loop. Or Don't fear the reaper to a swinging cow bell. Whatever.

This app was born from the music found project which is a tutorial from Brad Traversy, and the build spotify clone from indigo tech. I used what I have learned over the past few years and DeepSeek to bring it all together. With inspiration from various artist concepts on Dribbble and Spotify, Sound Cloud and Pandora, I have created this.

It uses AWS S3 bucket for file storage of audio and image files. PostgreSQL database. Devise for auth. Wavesurfer for player and eq. It also uses stimulus and turbo streams. To build out the initial I used my tailwind rails 8 template to ensure the gems files were not tracked by git, shedding that weight, fixing the error caused by not having them in the git workflow yml, and creating a basic tailwind config in the config folder as it is not there in newest version of rails and tailwind.

* Ruby version
  - 3.3.7

* Rails version
  - 8.0.1

* System dependencies
  - Devise

* Configuration
  - PostgreSQL
  - Tailwind
  - S3 bucket

* Database creation
  - Includes db config with default host, username, and password for pg
  - db:create to create databases
  - Does use Devise for users. - may review seed.

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

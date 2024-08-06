<p align="center">
  <img src="mathbot.jpg" alt="mathbot logo" />
</p>

# mathbot
Question & Answer Forum

## API endpoint
```
List of available API (browseable) at /api
* /accounts/register/
* /accounts/{username}/edit
* /posts/
* /posts/create/
* /posts/{id}/
* /posts/{id}/delete/
* /comments/
* /comments/create/
* /comments/{id}/
* /comments/{id}/delete/
* /token/
* /token/refresh/
```

## Installation

Make sure you have following software installed in your system:
* Python 3
* Node.js
* NPM
* Git

First, we need to clone the repository
```
git clone https://github.com/hosseincodes/mathbot.git
```

Install all required dependencies in an isolated environment

```
cd mathbot/server
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

Install all required dependencies for frontend in mathbot/src folder by typing
```
cd ../src
npm i
```

## Running Backend on Local Server

Activate virtual environment

```
cd server
source venv/bin/activate
```

replace all https://server.mathbot.ir with http://localhost:8000

Then run the server, api endpoint should be available on http://localhost:8000/api

```
python manage.py runserver
```

## Running Frontend on Local Server

Start development server

```
cd src
npm start
```

Frontend should be available on http://localhost:3000/

## Social Networks

[<img src="https://www.vectorlogo.zone/logos/instagram/instagram-tile.svg" width="32">](https://www.instagram.com/themathbot)
[<img src="https://www.vectorlogo.zone/logos/telegram/telegram-tile.svg" width="32">](http://t.me/math_20_bot)

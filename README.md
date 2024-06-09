# inventive-group-skill-test
### Author: Daniel Marz
### In this project I implemented Django project with JS, Bootstrap, CSS, HTML and Python. 
```markdown
# Flash Cards Learning Project

This project is a Django-based web application for creating and taking quizzes with flashcards.

## Prerequisites

- Python 3.9.6 or higher
- pip
- MySQL

## Setup Instructions

### Step 1: Clone the Repository

```bash
git clone https://github.com/iodaniel/inventive-group-skill-test.git
cd QuizProject
```

### Step 2: Create a Virtual Environment

Create and activate a virtual environment to isolate the project's dependencies.

#### On macOS and Linux:

```bash
python3 -m venv venv
source venv/bin/activate
```

#### On Windows:

```bash
python -m venv venv
venv\Scripts\activate
```

### Step 3: Install Dependencies

Install the required packages using pip.

```bash
pip install -r requirements.txt
```

### Step 4: Configure Environment Variables

Create a `.env` file in the root directory of the project.

```
SECRET_KEY='your-secret-key'
DEBUG=True
DB_NAME='your_db_name'
DB_USER='your_db_user'
DB_PASSWORD='your_db_password'
DB_HOST='your_db_host'
DB_PORT='3306'
```

### Step 5: Set Up the Database

Ensure MySQL is installed and running on your machine. Create a new database in MySQL for the project.

```sql
CREATE DATABASE your_db_name;
```

### Step 6: Apply Migrations

Run the following commands to apply the database migrations and create the necessary tables.

```bash
python manage.py makemigrations
python manage.py migrate
```

### Step 7: Create a Superuser

Create a superuser to access the Django admin interface.

```bash
python manage.py createsuperuser
```

Follow the prompts to set the username, email, and password for the superuser.

### Step 8: Collect Static Files

Collect all static files into the `STATIC_ROOT` directory.

```bash
python manage.py collectstatic
```

### Step 9: Run the Development Server

Start the Django development server.

```bash
python manage.py runserver
```

Open your web browser and go to `http://127.0.0.1:8000` to view the application.

## Deployment

To deploy this project on a production server, make sure to:

1. Set `DEBUG=False` in your `.env` file.
2. Use a production-grade web server (e.g., Gunicorn) and a reverse proxy (e.g., Nginx).
3. Secure your database and server configurations.
4. Configure static and media file handling for production.

## License

This project is licensed under the MIT License.

## Acknowledgments

- Django Documentation
- Bootstrap Documentation

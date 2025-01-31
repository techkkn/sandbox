# My Express MySQL App

This project is a simple Express.js application that performs CRUD operations on a MySQL database. It serves as a basic template for building RESTful APIs with Express and MySQL.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Environment Variables](#environment-variables)
- [License](#license)

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/my-express-mysql-app.git
   ```

2. Navigate to the project directory:
   ```
   cd my-express-mysql-app
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Create a `.env` file in the root directory and add your database credentials:
   ```
   DB_HOST=your_database_host
   DB_USER=your_database_user
   DB_PASSWORD=your_database_password
   DB_NAME=your_database_name
   ```

## Usage

To start the application, run:
```
npm start
```

The application will be running on `http://localhost:3000`.

## API Endpoints

- `POST /records` - Create a new record
- `GET /records` - Retrieve all records
- `GET /records/:id` - Retrieve a record by ID
- `PUT /records/:id` - Update a record by ID
- `DELETE /records/:id` - Delete a record by ID

## Environment Variables

The application uses the following environment variables:

- `DB_HOST`: The host of the MySQL database
- `DB_USER`: The username for the MySQL database
- `DB_PASSWORD`: The password for the MySQL database
- `DB_NAME`: The name of the MySQL database

## License

This project is licensed under the MIT License.
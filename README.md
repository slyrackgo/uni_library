# University online library system

## Overview

This is a software that simulates online library of university designed to efficiently manage library resources and student interactions.
The system is fully functional through API endpoints that can be tested and interacted with via Postman. It provides essential features for managing library operations, making it easy for administrators to update records and ensure smooth library operations.
# Features

* Admin panel: Administrators can  handle book inventories, manage student book loans, and track overdue items.
* User panel: Users can request a book, see the available books in the system.
* Token-Based Authentication: The system likely uses JWT (JSON Web Tokens) and session-based authentication to verify user identities securely.


* **Upload:**
    * Use the `/product/{productId}/upload` endpoint to upload a book file.
    * Send a `POST` request with the file as `multipart/form-data`.
* **Download:**
    * Use the `/product/{productId}/download` endpoint to download a book file.
    * Send a `GET` request.

## Technologies


* Spring Boot
* Java
* React.js
* MySQL


![website](https://github.com/user-attachments/assets/33b837b0-8579-4a05-bdc1-c973b2ada347)

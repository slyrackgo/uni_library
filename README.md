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
![postman](https://github.com/user-attachments/assets/3a8d87c1-7051-4276-966b-ddb3e08bf742)


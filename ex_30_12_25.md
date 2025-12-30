## Project Title: **Product Inventory Management System**

---

## 1. Objective

To design and develop a **full-stack MEAN application** that performs **complete CRUD operations** on product data using:

* **Angular (Standalone)** – Frontend
* **Node.js + Express** – Backend
* **MongoDB** – Database

The goal is to demonstrate:

* REST API design
* Angular–backend integration
* Persistent data storage
* UI-driven CRUD workflows

---

## 2. Business Scenario

A retail organization needs an internal **Product Inventory Management System** to:

* Add new products to inventory
* View available products
* Update product details
* Remove discontinued products

All product data must be stored in MongoDB and managed via REST APIs.

---

## 3. Technology Stack (Mandatory)

| Layer         | Technology                       |
| ------------- | -------------------------------- |
| Frontend      | Angular (Standalone, latest CLI) |
| Backend       | Node.js, Express                 |
| Database      | MongoDB                          |
| API Format    | REST (JSON)                      |
| Communication | HTTP                             |

---

## 4. Data Model

### Product Entity

| Field           | Type     | Description         |
| --------------- | -------- | ------------------- |
| `_id`         | ObjectId | Auto-generated      |
| `productCode` | String   | Unique product code |
| `productName` | String   | Product name        |
| `category`    | String   | Product category    |
| `price`       | Number   | Product price       |

---

## 5. Backend Requirements (Node + Express)

### 5.1 REST API Endpoints (CRUD)

| Operation         | Method | Endpoint              |
| ----------------- | ------ | --------------------- |
| Create Product    | POST   | `/api/products`     |
| Get All Products  | GET    | `/api/products`     |
| Get Product By ID | GET    | `/api/products/:id` |
| Update Product    | PUT    | `/api/products/:id` |
| Delete Product    | DELETE | `/api/products/:id` |

---

### 5.2 Backend Functional Rules

* Use **Express Router**
* Use **Mongoose schema**
* APIs must return **JSON only**
* `GET` must always return an **array** (never null)
* Handle invalid IDs gracefully
* Use proper HTTP status codes

---

## 6. Frontend Requirements (Angular)

### 6.1 UI Screens

### Screen 1: Product Form

Fields:

* Product Code
* Product Name
* Category
* Price

Buttons:

* Add Product
* Update Product (shown during edit)

---

### Screen 2: Product List

Table Columns:

* Product Code
* Product Name
* Category
* Price
* Actions (Edit | Delete)

---

### 6.2 Angular Functional Requirements

* Use **Standalone Component**
* Use **FormsModule (ngModel)**
* Use **HttpClient**
* Load products on app startup
* Refresh list after every CRUD operation
* No page reloads

---

## 7. CRUD Operation Flow (Dry Run)

### CREATE

1. User enters product details
2. Clicks **Add Product**
3. Angular sends `POST /api/products`
4. Backend saves data to MongoDB
5. UI refreshes product list

---

### READ

1. Application loads
2. Angular calls `GET /api/products`
3. Backend returns product array
4. Angular renders table

---

### UPDATE

1. User clicks **Edit**
2. Selected product data populates form
3. User modifies details
4. Angular sends `PUT /api/products/:id`
5. Backend updates MongoDB record
6. UI refreshes list

---

### DELETE

1. User clicks **Delete**
2. Angular sends `DELETE /api/products/:id`
3. Backend removes record
4. UI refreshes list

---

## 8. Validation Rules

* All fields are mandatory
* Price must be numeric
* Product Code must be unique
* Empty submissions are not allowed

---

## 9. Non-Functional Requirements

* Clean folder structure
* Readable variable naming
* Proper separation of frontend and backend
* No hard-coded data in UI

---

## 10. Evaluation Criteria

| Criteria                 | Weight |
| ------------------------ | ------ |
| REST API correctness     | 30%    |
| Angular UI functionality | 30%    |
| CRUD completeness        | 20%    |
| Code quality             | 10%    |
| Error handling           | 10%    |

---

## 11. Expected Outcome

* Fully working MEAN application
* Persistent data storage
* UI-driven CRUD operations
* Clean API responses

---

## 12. Extensions (Optional)

* Search by category
* Sort by price
* Pagination
* Angular service layer
* Confirmation dialog before delete

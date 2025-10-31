# 🍽️ Bài Tập Sequelize - API Nhà Hàng

## 🧩 Tổng quan

Đây là project thực hành **Sequelize ORM trong NodeJS**, với mục tiêu xây dựng hệ thống **API quản lý nhà hàng (db_food)** theo chuẩn RESTful.
Tất cả các chức năng được phát triển tách riêng theo mô hình **Controller - Service - Model**, đảm bảo dễ mở rộng và bảo trì.

---

## ⚙️ Cài đặt & khởi chạy

### 1️⃣ Cài đặt dependencies

```bash
npm install
```

### 2️⃣ Tạo file môi trường `.env`

```bash
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASS=your_password
DB_NAME=db_food
PORT=8080
```

> ⚠️ File `.env` đã được thêm vào `.gitignore` để tránh lộ thông tin cơ sở dữ liệu.

### 3️⃣ Chạy server

```bash
npm run dev
```

---

## 📁 Cấu trúc thư mục

```
src/
 ┣ 📂 common/
 ┃ ┣ 📜 app-error/         # Xử lý lỗi toàn cục
 ┃ ┣ 📜 helpers/           # Hàm tiện ích chung (responseSuccess, responseError)
 ┃ ┗ 📜 sequelize/         # Kết nối DB (connect.sequelize.js)
 ┣ 📂 models/              # Các model Sequelize (user, food, food_type, sub_food, restaurant, like_res, rate_res, order) và index.js để định nghĩa relation 
 ┣ 📂 services/            # Xử lý logic nghiệp vụ
 ┣ 📂 controllers/         # Controller nhận request từ router
 ┣ 📂 routers/             # Router điều hướng API
 ┗ 📜 server.js            # File khởi động server
```

---

## 🧠 Danh sách **8 Tác Vụ Theo Đề Bài**

| #     | Nhóm Chức Năng    | Tác Vụ                            | Mô tả ngắn                                     |
| ----- | ----------------- | --------------------------------- | ---------------------------------------------- |
| **1** | Like Nhà Hàng     | `POST /api/res/like`              | User like 1 nhà hàng (mỗi user chỉ like 1 lần) |
| **2** | Like Nhà Hàng     | `DELETE /api/res/unlike`          | User bỏ like nhà hàng                          |
| **3** | Like Nhà Hàng     | `GET /api/res/likes/res/:res_id`  | Lấy danh sách user like theo **nhà hàng**      |
| **4** | Like Nhà Hàng     | `GET /api/res/likes/user/:user_id`| Lấy danh sách nhà hàng user đã like            |
| **5** | Đánh Giá Nhà Hàng | `POST /api/res/rate`              | Thêm đánh giá (0–5 điểm) cho nhà hàng          |
| **6** | Đánh Giá Nhà Hàng | `GET /api/res/rates/res/:res_id`  | Lấy danh sách đánh giá theo **nhà hàng**       |
| **7** | Đánh Giá Nhà Hàng | `GET /api/res/rates/user/:user_id`| Lấy danh sách đánh giá theo **user**           |
| **8** | Đặt Món (Order)   | `POST /api/order`                 | User đặt món ăn (thêm order mới)               |

---

## 📡 Hướng dẫn test Postman

### 🟢 1. Like Nhà Hàng

#### ➕ Like

**POST** `/api/res/like`

```json
{
  "user_id": 1,
  "res_id": 2
}
```

#### ➖ Unlike

**DELETE** `/api/res/unlike`

```json
{
  "user_id": 1,
  "res_id": 2
}
```

#### 📋 Danh sách like theo nhà hàng

**GET** `/api/res/likes/res/2`

#### 📋 Danh sách like theo user

**GET** `/api/res/likes/user/1`

---

### 🟡 2. Đánh Giá Nhà Hàng

#### ➕ Thêm đánh giá

**POST** `/api/res/rate`

```json
{
  "user_id": 1,
  "res_id": 2,
  "amount": 5
}
```

#### 📋 Lấy danh sách đánh giá theo nhà hàng

**GET** `/api/res/rates/res/2`

#### 📋 Lấy danh sách đánh giá theo user

**GET** `/api/res/rates/user/1`

---

### 🔵 3. Đặt Món (Order)

#### ➕ Tạo đơn hàng mới

**POST** `/api/order`

```json
{
  "user_id": 1,
  "food_id": 3,
  "amount": 2,
  "code": "ORD001",
  "arr_sub_id": "1,2"
}
```

> ⚠️ Nếu `user_id` hoặc `food_id` không tồn tại → server trả lỗi `400`.

---

## ✅ Chuẩn dữ liệu trả về

### Khi thành công

```json
{
  "status": "success",
  "statusCode": 200,
  "message": "Thành công!",
  "content": { "data": ... }
}
```

### Khi lỗi

```json
{
  "status": "error",
  "statusCode": 400,
  "message": "User đã like nhà hàng này rồi!"
}
```

> Stack trace sẽ **ẩn trong môi trường production** để bảo mật.

---

## 🧱 Công nghệ sử dụng

* **NodeJS + ExpressJS**
* **Sequelize ORM**
* **MySQL Database**
* **dotenv** để quản lý biến môi trường
* **nodemon** để auto reload khi phát triển

---

## 🧾 Ghi chú

* Project tuân thủ **chuẩn RESTful API**.
* Có đầy đủ 8 tác vụ theo yêu cầu đề bài.
* Cấu trúc mô-đun rõ ràng, có thể mở rộng dễ dàng (thêm CRUD khác, phân quyền...).
* Tất cả API đã được test bằng **Postman** và hoạt động đúng logic.

---

## 👨‍💻 Tác giả

**Nguyễn Mạnh Cường**
📚 Bài tập Sequelize - CyberSoft Academy (NodeJS Backend)
🗓️ Tháng 10 / 2025
# Node52_Nguyen-Manh-Cuong_Sequelize

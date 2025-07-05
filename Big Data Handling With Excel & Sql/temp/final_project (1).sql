
-- ===========================
-- LIBRARY MANAGEMENT SYSTEM
-- ===========================

-- Drop existing tables if re-running
DROP TABLE IF EXISTS BorrowedBooks;
DROP TABLE IF EXISTS Books;
DROP TABLE IF EXISTS Authors;
DROP TABLE IF EXISTS Borrowers;
DROP TABLE IF EXISTS Salesman;
DROP TABLE IF EXISTS Customer;
DROP TABLE IF EXISTS Orders;

-- Authors Table
CREATE TABLE Authors (
    AuthorID INT PRIMARY KEY,
    Name TEXT NOT NULL,
    Country TEXT
);

-- Books Table
CREATE TABLE Books (
    BookID INT PRIMARY KEY,
    Title TEXT NOT NULL,
    AuthorID INT,
    PublishedYear INT,
    Genre TEXT,
    FOREIGN KEY (AuthorID) REFERENCES Authors(AuthorID)
);

-- Borrowers Table
CREATE TABLE Borrowers (
    BorrowerID INT PRIMARY KEY,
    Name TEXT NOT NULL,
    Contact TEXT
);

-- BorrowedBooks Table
CREATE TABLE BorrowedBooks (
    BorrowID INT PRIMARY KEY,
    BorrowerID INT,
    BookID INT,
    BorrowDate DATE,
    ReturnDate DATE,
    FOREIGN KEY (BorrowerID) REFERENCES Borrowers(BorrowerID),
    FOREIGN KEY (BookID) REFERENCES Books(BookID)
);

-- Salesman Table
CREATE TABLE Salesman (
    salesman_id INT,
    name TEXT,
    city TEXT,
    commission REAL
);

-- Customer Table
CREATE TABLE Customer (
    customer_id INT,
    cust_name TEXT,
    city TEXT,
    grade INT,
    salesman_id INT
);

-- Orders Table
CREATE TABLE Orders (
    ord_no INT,
    purch_amt REAL,
    ord_date DATE,
    customer_id INT,
    salesman_id INT
);

-- Insert Authors
INSERT INTO Authors VALUES
(1, 'George Orwell', 'UK'),
(2, 'J.K. Rowling', 'UK'),
(3, 'Haruki Murakami', 'Japan'),
(4, 'Jane Austen', 'UK'),
(5, 'Dan Brown', 'USA');

-- Insert Books
INSERT INTO Books VALUES
(101, '1984', 1, 1949, 'Dystopian'),
(102, 'Animal Farm', 1, 1945, 'Satire'),
(103, 'Harry Potter', 2, 2001, 'Fantasy'),
(104, 'Norwegian Wood', 3, 1987, 'Romance'),
(105, 'Pride and Prejudice', 4, 1813, 'Classic'),
(106, 'Inferno', 5, 2013, 'Thriller'),
(107, 'Angels and Demons', 5, 2000, 'Thriller'),
(108, 'Kafka on the Shore', 3, 2002, 'Fantasy'),
(109, 'Emma', 4, 1815, 'Classic'),
(110, 'The Casual Vacancy', 2, 2012, 'Fiction');

-- Insert Borrowers
INSERT INTO Borrowers VALUES
(201, 'Alice', '1111111111'),
(202, 'Bob', '2222222222'),
(203, 'Charlie', '3333333333'),
(204, 'David', '4444444444'),
(205, 'Eva', '5555555555');

-- Insert BorrowedBooks
INSERT INTO BorrowedBooks VALUES
(301, 201, 103, '2025-07-01', NULL),
(302, 202, 106, '2025-06-25', '2025-07-02'),
(303, 203, 110, '2025-07-03', NULL),
(304, 201, 108, '2025-06-20', '2025-06-30');

-- Insert Salesman
INSERT INTO Salesman VALUES
(5001, 'James Hoog', 'New York', 0.15),
(5002, 'Nail Knite', 'Paris', 0.13),
(5005, 'Pit Alex', 'London', 0.11),
(5006, 'Mc Lyon', 'Paris', 0.14),
(5003, 'Lauson Hen', 'San Jose', 0.12),
(5007, 'Paul Adam', 'Rome', 0.13);

-- Insert Customer
INSERT INTO Customer VALUES
(3002, 'Nick Rimando', 'New York', 100, 5001),
(3005, 'Graham Zusi', 'California', 200, 5002),
(3001, 'Brad Guzan', 'London', 100, 5005),
(3004, 'Fabian Johns', 'Paris', 300, 5006),
(3007, 'Brad Davis', 'New York', 200, 5001),
(3009, 'Geoff Camero', 'Berlin', 100, 5003),
(3008, 'Julian Green', 'London', 300, 5002),
(3003, 'Jozy Altidor', 'Moscow', 200, 5007);

-- Insert Orders
INSERT INTO Orders VALUES
(70001, 150.50, '2012-10-05', 3005, 5002),
(70009, 270.65, '2012-09-10', 3001, 5005),
(70002, 65.26, '2012-10-05', 3002, 5001),
(70004, 110.50, '2012-08-17', 3009, 5003),
(70007, 948.50, '2012-09-10', 3005, 5002),
(70005, 2400.60, '2012-07-27', 3007, 5001),
(70008, 5760.00, '2012-09-10', 3002, 5001),
(70010, 1983.43, '2012-10-10', 3004, 5006);

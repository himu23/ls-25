SQLite version 3.45.1 2024-01-30 16:01:20
Enter ".help" for usage hints.
sqlite> CREATE TABLE Authors (
    AuthorID INT PRIMARY KEY,
    Name TEXT NOT NULL,
    Country TEXT
);

CREATE TABLE Books (
    BookID INT PRIMARY KEY,
    Title TEXT NOT NULL,
    AuthorID INT,
    PublishedYear INT,
    Genre TEXT,
    FOREIGN KEY (AuthorID) REFERENCES Authors(AuthorID)
);  FOREIGN KEY (BookID) REFERENCES Books(BookID)(BorrowerID),
Parse error: table Authors already exists
  CREATE TABLE Authors (     AuthorID INT PRIMARY KEY,     Name TEXT NOT NULL,  
               ^--- error here
sqlite> -- Authors
INSERT INTO Authors VALUES
(1, 'George Orwell', 'UK'),
(2, 'J.K. Rowling', 'UK'),
(3, 'Haruki Murakami', 'Japan'),
(4, 'Jane Austen', 'UK'),
(5, 'Dan Brown', 'USA');

-- Books
INSERT INTO Books VALUES
(101, '1984', 1, 1949, 'Dystopian'),
(102, 'Animal Farm', 1, 1945, 'Satire'),
(103, 'Harry Potter', 2, 2001, 'Fantasy'),
(304, 201, 108, '2025-06-20', '2025-06-30');n');,
Runtime error: UNIQUE constraint failed: Authors.AuthorID (19)
sqlite> -- 1. Books published after 2015
SELECT * FROM Books WHERE PublishedYear > 2015;

-- 2. Borrowers who borrowed Fiction books
SELECT DISTINCT b.Name
FROM Borrowers b
JOIN BorrowedBooks bb ON b.BorrowerID = bb.BorrowerID
JOIN Books bk ON bb.BookID = bk.BookID
WHERE bk.Genre = 'Fiction';

-- 3. Most borrowed book
SELECT bk.Title, COUNT(*) AS BorrowCount
FROM BorrowedBooks bb
GROUP BY Genre;OUNT(*) AS TotalBooks bb.BookIDed (ReturnDate is NULL)
Charlie
The Casual Vacancy|1
J.K. Rowling
Classic|2
Dystopian|1
Fantasy|2
Fiction|1
Romance|1
Satire|1
Thriller|2
sqlite> -- Create tables
CREATE TABLE Salesman (
    salesman_id INT,
    name TEXT,
    city TEXT,
    commission REAL
);

CREATE TABLE Customer (
    customer_id INT,
    cust_name TEXT,
    city TEXT,
    grade INT,
);  SELECT salesman_id FROM Salesman WHERE name = 'Mc Lyon'
sqlite> SELECT c.cust_name, c.city AS customer_city,
       s.name AS salesman_name, s.city AS salesman_city, s.commission
FROM Customer c
JOIN Salesman s ON c.salesman_id = s.salesman_id
WHERE c.city <> s.city
AND s.commission > 0.12;
Graham Zusi|California|Nail Knite|Paris|0.13
Julian Green|London|Nail Knite|Paris|0.13
Jozy Altidor|Moscow|Paul Adam|Rome|0.13
sqlite> -- Create Orders table
CREATE TABLE Orders (
    ord_no INT,
    purch_amt REAL,
    ord_date DATE,
    customer_id INT,
    salesman_id INT
);

-- Insert orders
INSERT INTO Orders VALUES
(70001, 150.50, '2012-10-05', 3005, 5002),
(70009, 270.65, '2012-09-10', 3001, 5005),
LEFT JOIN Customer c ON o.customer_id = c.customer_id;
Graham Zusi|California|70001|2012-10-05|150.5
Brad Guzan|London|70009|2012-09-10|270.65
Nick Rimando|New York|70002|2012-10-05|65.26
Geoff Camero|Berlin|70004|2012-08-17|110.5
Graham Zusi|California|70007|2012-09-10|948.5
Brad Davis|New York|70005|2012-07-27|2400.6
Nick Rimando|New York|70008|2012-09-10|5760.0
Fabian Johns|Paris|70010|2012-10-10|1983.43
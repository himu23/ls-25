deapad3:~/Desktop/projects/ls25/Big Data Handling With Excel & Sql/final$ sqlite3 library.db
SQLite version 3.45.1 2024-01-30 16:01:20
Enter ".help" for usage hints.
sqlite> .read final_project.sql
Parse error near line 5: table Authors already exists
  CREATE TABLE Authors (     AuthorID INT PRIMARY KEY,     Name VARCHAR(100) NOT
               ^--- error here
Parse error near line 11: table Books already exists
  CREATE TABLE Books (     BookID INT PRIMARY KEY,     Title VARCHAR(100) NOT NU
               ^--- error here
Parse error near line 20: table Borrowers already exists
  CREATE TABLE Borrowers (     BorrowerID INT PRIMARY KEY,     Name VARCHAR(100)
               ^--- error here
Parse error near line 26: table BorrowedBooks already exists
  CREATE TABLE BorrowedBooks (     BorrowID INT PRIMARY KEY,     BorrowerID INT,
               ^--- error here
Runtime error near line 36: UNIQUE constraint failed: Authors.AuthorID (19)
Runtime error near line 37: UNIQUE constraint failed: Authors.AuthorID (19)
Runtime error near line 38: UNIQUE constraint failed: Authors.AuthorID (19)
Runtime error near line 39: UNIQUE constraint failed: Authors.AuthorID (19)
Runtime error near line 40: UNIQUE constraint failed: Authors.AuthorID (19)
Runtime error near line 42: UNIQUE constraint failed: Books.BookID (19)
Runtime error near line 43: UNIQUE constraint failed: Books.BookID (19)
Runtime error near line 44: UNIQUE constraint failed: Books.BookID (19)
Runtime error near line 45: UNIQUE constraint failed: Books.BookID (19)
Runtime error near line 46: UNIQUE constraint failed: Books.BookID (19)
Runtime error near line 47: UNIQUE constraint failed: Books.BookID (19)
Runtime error near line 48: UNIQUE constraint failed: Books.BookID (19)
Runtime error near line 49: UNIQUE constraint failed: Books.BookID (19)
Runtime error near line 50: UNIQUE constraint failed: Books.BookID (19)
Runtime error near line 51: UNIQUE constraint failed: Books.BookID (19)
Runtime error near line 53: UNIQUE constraint failed: Borrowers.BorrowerID (19)
Runtime error near line 54: UNIQUE constraint failed: Borrowers.BorrowerID (19)
Runtime error near line 55: UNIQUE constraint failed: Borrowers.BorrowerID (19)
Runtime error near line 56: UNIQUE constraint failed: Borrowers.BorrowerID (19)
Runtime error near line 57: UNIQUE constraint failed: Borrowers.BorrowerID (19)
Runtime error near line 59: UNIQUE constraint failed: BorrowedBooks.BorrowID (19)
Runtime error near line 60: UNIQUE constraint failed: BorrowedBooks.BorrowID (19)
Runtime error near line 61: UNIQUE constraint failed: BorrowedBooks.BorrowID (19)
Runtime error near line 62: UNIQUE constraint failed: BorrowedBooks.BorrowID (19)
Charlie
Alice
Kafka on the Shore|1
J.K. Rowling
Haruki Murakami
Dystopian|1
Fantasy|1
Fiction|3
Romance|2
Satire|1
Thriller|2
Parse error near line 95: table Salesman already exists
  CREATE TABLE Salesman (     salesman_id INT PRIMARY KEY,     name TEXT,     ci
               ^--- error here
Parse error near line 102: table Customer already exists
  CREATE TABLE Customer (     customer_id INT PRIMARY KEY,     cust_name TEXT,  
               ^--- error here
Parse error near line 111: table Orders already exists
  CREATE TABLE Orders (     ord_no INT PRIMARY KEY,     purch_amt REAL,     ord_
               ^--- error here
Runtime error near line 121: UNIQUE constraint failed: Salesman.salesman_id (19)
Runtime error near line 122: UNIQUE constraint failed: Salesman.salesman_id (19)
Runtime error near line 123: UNIQUE constraint failed: Salesman.salesman_id (19)
Runtime error near line 124: UNIQUE constraint failed: Salesman.salesman_id (19)
Runtime error near line 125: UNIQUE constraint failed: Salesman.salesman_id (19)
Runtime error near line 126: UNIQUE constraint failed: Salesman.salesman_id (19)
Runtime error near line 128: UNIQUE constraint failed: Customer.customer_id (19)
Runtime error near line 129: UNIQUE constraint failed: Customer.customer_id (19)
Runtime error near line 130: UNIQUE constraint failed: Customer.customer_id (19)
Runtime error near line 131: UNIQUE constraint failed: Customer.customer_id (19)
Runtime error near line 132: UNIQUE constraint failed: Customer.customer_id (19)
Runtime error near line 133: UNIQUE constraint failed: Customer.customer_id (19)
Runtime error near line 134: UNIQUE constraint failed: Customer.customer_id (19)
Runtime error near line 135: UNIQUE constraint failed: Customer.customer_id (19)
Runtime error near line 137: UNIQUE constraint failed: Orders.ord_no (19)
Runtime error near line 138: UNIQUE constraint failed: Orders.ord_no (19)
Runtime error near line 139: UNIQUE constraint failed: Orders.ord_no (19)
Runtime error near line 140: UNIQUE constraint failed: Orders.ord_no (19)
Runtime error near line 141: UNIQUE constraint failed: Orders.ord_no (19)
Runtime error near line 142: UNIQUE constraint failed: Orders.ord_no (19)
Runtime error near line 143: UNIQUE constraint failed: Orders.ord_no (19)
Runtime error near line 144: UNIQUE constraint failed: Orders.ord_no (19)
Graham Zusi|California|Nail Knite|Paris|0.13
Julian Green|London|Nail Knite|Paris|0.13
Jozy Altidor|Moscow|Paul Adam|Rome|0.13
Graham Zusi|California|70001|2012-10-05|150.5
Brad Guzan|London|70009|2012-09-10|270.65
Nick Rimando|New York|70002|2012-10-05|65.26
Geoff Cameron|Berlin|70004|2012-08-17|110.5
Graham Zusi|California|70007|2012-09-10|948.5
Brad Davis|New York|70005|2012-07-27|2400.6
Nick Rimando|New York|70008|2012-09-10|5760.0
Fabian Johnson|Paris|70010|2012-10-10|1983.43
sqlite> 
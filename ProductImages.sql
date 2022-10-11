CREATE TABLE IF NOT EXISTS `productImage` (
    ImageID INTEGER NOT NULL,
    ProductID INTEGER NOT NULL,
    ImageUrl VARCHAR(156) NOT NULL,
    PRIMARY KEY (ImageID),
    FOREIGN KEY (ProductID) REFERENCES product(ProductID)
);

INSERT INTO productimage VALUES (1, 1, "https://dummyjson.com/image/i/products/1/1.jpg");
INSERT INTO productimage VALUES (2, 1, "https://dummyjson.com/image/i/products/1/2.jpg");
INSERT INTO productimage VALUES (3, 1, "https://dummyjson.com/image/i/products/1/3.jpg");
INSERT INTO productimage VALUES (4, 1, "https://dummyjson.com/image/i/products/1/4.jpg");
INSERT INTO productimage VALUES (5, 2, "https://dummyjson.com/image/i/products/2/1.jpg");
INSERT INTO productimage VALUES (6, 2, "https://dummyjson.com/image/i/products/2/2.jpg");
INSERT INTO productimage VALUES (7, 2, "https://dummyjson.com/image/i/products/2/3.jpg");
INSERT INTO productimage VALUES (8, 3, "https://dummyjson.com/image/i/products/3/1.jpg");
INSERT INTO productimage VALUES (9, 4, "https://dummyjson.com/image/i/products/4/1.jpg");
INSERT INTO productimage VALUES (10, 4, "https://dummyjson.com/image/i/products/4/2.jpg");
INSERT INTO productimage VALUES (11, 4, "https://dummyjson.com/image/i/products/4/3.jpg");
INSERT INTO productimage VALUES (12, 4, "https://dummyjson.com/image/i/products/4/4.jpg");
INSERT INTO productimage VALUES (13, 5, "https://dummyjson.com/image/i/products/5/1.jpg");
INSERT INTO productimage VALUES (14, 5, "https://dummyjson.com/image/i/products/5/2.jpg");
INSERT INTO productimage VALUES (15, 5, "https://dummyjson.com/image/i/products/5/3.jpg");
INSERT INTO productimage VALUES (16, 6, "https://dummyjson.com/image/i/products/6/1.jpg");
INSERT INTO productimage VALUES (17, 6, "https://dummyjson.com/image/i/products/6/2.jpg");
INSERT INTO productimage VALUES (18, 6, "https://dummyjson.com/image/i/products/6/3.jpg");
INSERT INTO productimage VALUES (19, 6, "https://dummyjson.com/image/i/products/6/4.jpg");

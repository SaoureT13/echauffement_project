INSERT INTO categories (title, created_at, updated_at)
VALUES ('monitor', NOW(), NOW()),
       ('headphones', NOW(), NOW()),
       ('smartphone', NOW(), NOW()),
       ('camera', NOW(), NOW()),
       ('laptop', NOW(), NOW()),
       ('watch', NOW(), NOW());

ALTER TABLE public.products
    ALTER COLUMN created_at TYPE TIMESTAMP,
    ALTER COLUMN created_at SET DEFAULT NOW();

ALTER TABLE public.products
    ALTER COLUMN updated_at TYPE TIMESTAMP,
    ALTER COLUMN updated_at SET DEFAULT NOW();

ALTER TABLE public.products
    ALTER COLUMN category_id SET NOT NULL;


INSERT INTO products (name, price, stock, category_id)
VALUES ('Fujifilm X100VI', 1599.00, 6, 11),
       ('Canon EOS R5 Mark II', 4299.00, 8, 11),
       ('Sony A7 IV', 1999.00, 12, 11),
       ('Nikon Z6 III', 2499.00, 10, 11),
       ('Canon EOS R10', 979.00, 20, 11),
       ('Fujifilm X-T5', 1699.00, 15, 11),
       ('Sony ZV-E10 II', 998.00, 18, 11),
       ('Nikon Z8', 3999.00, 7, 11),
       ('Canon EOS R50', 799.00, 22, 11),
       ('Panasonic Lumix S5 II', 1899.00, 14, 11),
       ('GoPro Hero 13 Black', 399.00, 25, 11),
       ('Sony RX100 VII', 1299.00, 13, 11),
       ('Olympus OM-D E-M10 Mark IV', 699.00, 24, 11),
       ('Canon PowerShot V1', 958.50, 16, 11),
       ('Fujifilm X-S20', 1299.00, 17, 11);


ALTER TABLE order_details
    ALTER COLUMN created_at SET DEFAULT NOW(),
    ALTER COLUMN updated_at SET DEFAULT NOW();


ALTER TABLE orders
    DROP COLUMN registration_date;

SELECT *
FROM orders
    WHERE (null IS NULL OR status = null);




DROP TRIGGER updated_customer_updated_at ON customers;


SELECT ARRAY_AGG(o_d.product_id::text)
FROM order_details o_d
INNER JOIN orders o ON o.id = o_d.order_id
WHERE o.customer_id = '98'


--customers updated_at
CREATE OR REPLACE FUNCTION update_updated_at_function()
    RETURNS TRIGGER AS
$$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER updated_customers_updated_at
    BEFORE UPDATE
    ON customers
    FOR EACH ROW
EXECUTE FUNCTION update_updated_at_function();

CREATE TRIGGER updated_products_updated_at
    BEFORE UPDATE
    ON products
    FOR EACH ROW
EXECUTE FUNCTION update_updated_at_function();

CREATE TRIGGER updated_categories_updated_at
    BEFORE UPDATE
    ON categories
    FOR EACH ROW
EXECUTE FUNCTION update_updated_at_function();

CREATE TRIGGER updated_order_details_updated_at
    BEFORE UPDATE
    ON order_details
    FOR EACH ROW
EXECUTE FUNCTION update_updated_at_function();


CREATE OR REPLACE FUNCTION update_updated_at_order_if_order_details_is_updated_function()
    RETURNS TRIGGER AS
$$
BEGIN
    IF (TG_OP = 'INSERT' OR TG_OP = 'UPDATE') THEN
        UPDATE orders
        SET updated_at = now()
        WHERE id = NEW.order_id;
    ELSEIF (TG_OP = 'DELETE') THEN
        UPDATE orders
        SET updated_at = now()
        WHERE id = OLD.order_id;
    END IF;

    RETURN NULL;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_updated_at_order_if_order_details_is_updated
    AFTER UPDATE OR DELETE OR INSERT
    ON order_details
    FOR EACH ROW
EXECUTE FUNCTION update_updated_at_order_if_order_details_is_updated_function();


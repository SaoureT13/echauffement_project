<?php
$pdo = new PDO("pgsql:host=localhost;dbname=order_management_system_db;user=teddy_admin;password=password");

header('Content-Type: application/xml');
$xml = new SimpleXMLElement('<customers/>');

$customers = $pdo->query("SELECT * FROM customers")->fetchAll(PDO::FETCH_ASSOC);

foreach ($customers as $customer) {
    $customerXML = $xml->addChild("customer");
    $customerXML->addChild("id", htmlspecialchars($customer['id']));
    $customerXML->addChild('name', htmlspecialchars($customer['name']));
    $customerXML->addChild('email', htmlspecialchars($customer['email']));
    $customerXML->addChild('address', htmlspecialchars($customer['address']));
    $customerXML->addChild('registration_date', htmlspecialchars($customer['registration_date']));
    $customerXML->addChild('created_at', htmlspecialchars($customer['created_at']));
    $customerXML->addChild('updated_at', htmlspecialchars($customer['updated_at']));


    $ordersStmt = $pdo->prepare("SELECT * FROM orders WHERE customer_id = ?");
    $ordersStmt->execute([$customer['id']]);
    $orders = $ordersStmt->fetchAll(PDO::FETCH_ASSOC);

    if (count($orders) > 0) {
        $ordersXML = $customerXML->addChild("orders");

        foreach ($orders as $order) {
            $orderXML = $ordersXML->addChild('order');
            $orderXML->addChild("id", $order['id']);
            $orderXML->addChild("registration_date", $order['registration_date']);
            $orderXML->addChild("status", $order['status']);
            $orderXML->addChild("created_at", $order['created_at']);
            $orderXML->addChild("updated_at", $order['updated_at']);
            $orderXML->addChild("customer_id", $order['customer_id']);

            $orderDetailsStmt = $pdo->prepare("SELECT * FROM order_details WHERE order_id = ?");
            $orderDetailsStmt->execute([$order['id']]);
            $orderDetails = $orderDetailsStmt->fetchAll(PDO::FETCH_ASSOC);


            if (count($orderDetails) > 0) {
                $orderDetailsXML = $orderXML->addChild("details");
                foreach ($orderDetails as $details) {
                    // $details = $orderDetailsXML->addChild("details")



                    $productStmt = $pdo->prepare("SELECT * FROM products WHERE id = ?");
                    $productStmt->execute([$details['product_id']]);
                    $product = $productStmt->fetchAll(PDO::FETCH_ASSOC);

                    $productXML = $orderDetailsXML->addChild("product");
                    $productXML->addChild("orderDetailsId", $details["id"]);
                    $productXML->addChild("quantity", $details["quantity"]);
                    $productXML->addChild("id", $product[0]["id"]);
                    $productXML->addChild("name", $product[0]["name"]);
                    $productXML->addChild("price", $product[0]["price"]);
                }
            }
        }
    }
}

echo $xml->asXML();

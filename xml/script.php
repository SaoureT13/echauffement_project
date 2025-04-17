<?php
$pdo = new PDO("pgsql:host=localhost;database=order_management_system_db", "teddy_admin", "password");

header('Content-Type: application/xml');
$xml = new SimpleXMLElement('<customers/>');

$customers = $pdo->query("SELECT * FROM customers")->fetchAll(PDO::FETCH_ASSOC);

foreach ($customers as $customer) {
    $customerXML = $xml->addChild("customer");
    $customerXML->addChild("id", $customer['id']);
    $customerXML->addChild('name', $customer['name']);
    $customerXML->addChild('email', $customer['email']);
    $customerXML->addChild('address', $customer['address']);
    $customerXML->addChild('registration_date', $customer['registration_date']);
    $customerXML->addChild('created_at', $customer['created_at']);
    $customerXML->addChild('updated_at', $customer['updated_at']);

    $ordersStmt = $pdo->prepare("SELECT * FROM orders WHERE id = ?");
    $ordersStmt->execute($customer['id']);
    $orders = $ordersStmt->fetchAll(PDO::FETCH_ASSOC);

    $ordersXML =$customerXML->addChild("orders");
    
    foreach($orders as $order){
        $ordersXML->addChild("id", $order['id']);
        $ordersXML->addChild("registration_date", $order['registration_date']);
        $ordersXML->addChild("status", $order['status']);
        $ordersXML->addChild("created_at", $order['created_at']);
        $ordersXML->addChild("updated_at", $order['updated_at']);
        $ordersXML->addChild("customer_id", $order['customer_id']);

        $orderDetailsStmt = $pdo->prepare("SELECT * FROM order_details WHERE ?");
        $orderDetailsStmt->execute($order['id']);
        $orderDetails = $orderDetailsStmt->fetchAll(PDO::FETCH_ASSOC);

        $orderDetailsXML = $ordersXML->addChild("products");
        foreach($orderDetails as $details){
            $orderDetailsXML->addChild("id", )
        }
    }
    
}

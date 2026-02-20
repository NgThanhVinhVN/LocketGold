// Locket Gold - By NgThanhVinhVN - Fix RevenueCat 2026
let body = $response.body;
if (body) {
  try {
    let obj = JSON.parse(body);
    if (obj && obj.subscriber) {
      obj.subscriber.subscriptions = obj.subscriber.subscriptions || {};
      obj.subscriber.subscriptions["locket.premium"] = {
        "auto_renewal_product": "locket.premium.yearly",
        "expires_date": "2099-12-31T23:59:59Z",
        "grace_period_expires_date": null,
        "is_in_billing_retry_period": false,
        "original_purchase_date": "2025-01-01T00:00:00Z",
        "ownership_type": "PURCHASED",
        "period_type": "normal",
        "product_identifier": "locket.premium",
        "purchase_date": "2025-01-01T00:00:00Z",
        "store": "app_store",
        "unsubscribe_detected_at": null
      };

      obj.subscriber.entitlements = obj.subscriber.entitlements || {};
      obj.subscriber.entitlements["premium"] = {
        "expires_date": "2099-12-31T23:59:59Z",
        "grace_period_expires_date": null,
        "product_identifier": "locket.premium",
        "purchase_date": "2025-01-01T00:00:00Z"
      };

      obj.Attention = "Locket Gold by NgThanhVinhVN !";
    }
    body = JSON.stringify(obj);
  } catch (e) {
    console.log("NgThanhVinhVN Locket error: " + e);
  }
}
$done({body});

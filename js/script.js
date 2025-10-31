const stripe = Stripe("pk_live_51SJAnAKVduKVtNGGCbusK3dLHSsW1oCFSihMsvE6p2hrMehVH2uzHAQQNViRdsDwc20UFUY9mD2oVAsvX0yR8Inz00OgHGVCpp"); 

document.getElementById("checkout-button").addEventListener("click", async () => {
  const res = await fetch("https://stripe-api-tawny.vercel.app/api/create-checkout-session", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      items: [{ id: "price_123456", quantity: 1 }]
    })
  });

  const data = await res.json();
  window.location.href = data.url;
});




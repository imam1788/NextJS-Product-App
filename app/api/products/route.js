// app/api/products/route.js
let products = []; // in-memory store

export async function GET() {
  return new Response(JSON.stringify(products), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

export async function POST(req) {
  try {
    const data = await req.json();
    data.id = Date.now().toString(); // unique id
    products.push(data); // add to array
    return new Response(JSON.stringify({ message: "Product added!" }), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to add product" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

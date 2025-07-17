import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { SUPPLIER_ID, API_KEY, API_SECRET } = process.env;

  try {
    const response = await fetch(`https://api.trendyol.com/sapigw/suppliers/${SUPPLIER_ID}/orders`, {
      headers: {
        "Authorization": `Basic ${Buffer.from(`${API_KEY}:${API_SECRET}`).toString("base64")}`,
        "Content-Type": "application/json"
      }
    });

    const data = await response.json();
    res.status(200).json({ orders: data.content || [] });

  } catch (error) {
    console.error("Trendyol API Error:", error);
    res.status(500).json({ orders: [], error: "API'den veri alınamadı." });
  }
}
// api/fmp.js — Vercel Serverless Function
// פותר את בעיית ה-CORS לחלוטין — הקריאה לFMP מגיעה מהשרת, לא מהדפדפן

export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const { path } = req.query;
  if (!path) {
    return res.status(400).json({ error: 'Missing path parameter' });
  }

  const apiKey = process.env.FMP_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'FMP_API_KEY not configured in Vercel environment variables' });
  }

  try {
    const decodedPath = decodeURIComponent(path);
    const separator = decodedPath.includes('?') ? '&' : '?';
    const url = `https://financialmodelingprep.com/api/v3${decodedPath}${separator}apikey=${apiKey}`;

    const response = await fetch(url, {
      headers: { 'User-Agent': 'MarketScanner/1.0' }
    });

    const data = await response.json();

    // Cache for 60 seconds
    res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate=30');
    return res.status(200).json(data);

  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

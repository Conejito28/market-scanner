export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();

  const { path } = req.query;
  if (!path) return res.status(400).json({ error: 'Missing path' });

  const apiKey = process.env.FMP_API_KEY;
  if (!apiKey) return res.status(500).json({ error: 'FMP_API_KEY not set' });

  try {
    const decodedPath = decodeURIComponent(path);
    const sep = decodedPath.includes('?') ? '&' : '?';
    const url = `https://financialmodelingprep.com/stable${decodedPath}${sep}apikey=${apiKey}`;
    const response = await fetch(url, { headers: { 'User-Agent': 'MarketScanner/1.0' } });
    const data = await response.json();
    res.setHeader('Cache-Control', 's-maxage=60');
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

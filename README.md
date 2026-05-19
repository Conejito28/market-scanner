# Market Intelligence Scanner 🔭

מערכת סריקה אקטיבית לזיהוי סקטורים מתעוררים וקטליסטים לפני הפיצוץ.

## מבנה הפרויקט

```
scanner/
├── api/
│   └── fmp.js          ← Vercel Serverless Function (פותר CORS)
├── public/
│   └── index.html      ← הממשק המלא
├── vercel.json          ← הגדרות Vercel
└── README.md
```

## פריסה ב-Vercel — 4 צעדים

### צעד 1 — העלה ל-GitHub
1. כנס ל-github.com → New Repository
2. שם: `market-scanner`
3. העלה את כל הקבצים (גרור לתוך הדף)

### צעד 2 — חבר ל-Vercel
1. כנס ל-vercel.com
2. לחץ "Add New Project"
3. בחר את ה-repository מ-GitHub
4. לחץ Deploy

### צעד 3 — הוסף API Key (חשוב מאוד!)
1. ב-Vercel → Settings → Environment Variables
2. הוסף:
   - Name: `FMP_API_KEY`
   - Value: [ה-API Key שלך מ-FMP]
3. לחץ Save
4. לחץ Redeploy

### צעד 4 — כנס לאתר
Vercel יתן לך לינק כמו:
`https://market-scanner-xxx.vercel.app`

זהו! האתר עובד 24/7.

## שכבות המערכת

- **Layer 1** — Sector Heat Map: איפה כסף זורם עכשיו
- **Layer 2** — Stock Scanner: Volume Anomaly + Breakout Pattern
- **Layer 3** — Catalyst Detector: חדשות + מילות מפתח
- **Layer 4** — Explosion Score 0-100: הניקוד המשולב

import { useState, useEffect } from "react";

const WEEK = "March 8, 2026";

const holdings = [
  {
    ticker: "GOOGL", name: "Alphabet", icon: "G",
    gradient: ["#4285F4", "#34A853"],
    totalValue: 114207.70, totalShares: 202.25,
    currentPrice: 297.39, avgCost: 214.35,
    gainPct: 38.74, pe: 18.5, forwardPe: 16.2,
    analystTarget: 351.82, upside: 18.3,
    weeklyScore: 92, conviction: 95,
    thesis: "The most complete AI company on the planet. Search, Cloud, custom TPU chips, YouTube — all compounding. Revenue hit $402B in 2025 (+15%), earnings grew 32%. At 18x PE, it's the cheapest Magnificent 7 stock by a wide margin. Waymo is optionality the market isn't pricing.",
    risks: "Antitrust pressure on search. AI search disruption long-term. Heavy capex cycle.",
    catalysts: ["Google Cloud growing 28%+ YoY", "Gemini integrated across all products", "Waymo commercialization", "YouTube Shorts monetization"],
    outlook: "Core position. One of the best businesses ever built at a discount. Keep accumulating on any weakness.",
    outookType: "strong",
    accounts: [
      { name: "Taxable", shares: 76.25, value: 22676, gainPct: 38.74 },
      { name: "Desig. Ben.", shares: 56, value: 65082, gainPct: 36.0 },
      { name: "Rollover IRA", shares: 70, value: 26449, gainPct: 26.1 },
    ],
  },
  {
    ticker: "AMZN", name: "Amazon", icon: "a",
    gradient: ["#FF9900", "#FF6B00"],
    totalValue: 95267.02, totalShares: 245.27,
    currentPrice: 212.52, avgCost: 203.45,
    gainPct: 4.46, pe: 27.73, forwardPe: 28.57,
    analystTarget: 270, upside: 27.1,
    weeklyScore: 85, conviction: 88,
    thesis: "AWS alone is one of the most powerful cash machines in history. Q4 2025 EPS grew 30%. Amazon is not a retailer — it's cloud + advertising + logistics. Ad revenue is a $50B+ business growing 20% YoY. Margins expanding rapidly every quarter.",
    risks: "Cloud competition from Azure and Google. Regulatory pressure. Heavy AI capex.",
    catalysts: ["AWS margin expansion", "Ad revenue 20%+ growth", "AI services on AWS", "Healthcare buildout"],
    outlook: "Core hold. AWS alone could justify the full market cap in a decade. Add on any weakness.",
    outookType: "strong",
    accounts: [
      { name: "Taxable", shares: 56.27, value: 11959, gainPct: 4.46 },
      { name: "Roth IRA", shares: 9, value: 1912, gainPct: -2.75 },
      { name: "Desig. Ben.", shares: 94, value: 63968, gainPct: 1.7 },
      { name: "Rollover IRA", shares: 86, value: 17426, gainPct: 13.0 },
    ],
  },
  {
    ticker: "META", name: "Meta Platforms", icon: "∞",
    gradient: ["#0082FB", "#00B2FF"],
    totalValue: 34439.21, totalShares: 92.69,
    currentPrice: 641.40, avgCost: 706.93,
    gainPct: -9.27, pe: 21.54, forwardPe: 22,
    analystTarget: 780, upside: 21.6,
    weeklyScore: 88, conviction: 82,
    thesis: "Meta runs 5 of the 10 most-used apps on Earth. Best mobile ad business in existence. AI is already driving ROI through improved ad targeting. At 21x PE you're buying a world-class business at a market-average valuation. This dip is a buying opportunity.",
    risks: "Reality Labs burning ~$5B/year. EU regulatory exposure. TikTok attention competition.",
    catalysts: ["AI-driven ad efficiency", "WhatsApp monetization early innings", "Threads growth", "Ray-Ban AI glasses scaling"],
    outlook: "Currently underwater but fundamentals intact — valuation is cheap for this quality. Priority buy this week.",
    outookType: "buy",
    accounts: [
      { name: "Taxable", shares: 16, value: 10262, gainPct: -9.27 },
      { name: "Roth IRA", shares: 1.70, value: 1088, gainPct: -10.66 },
      { name: "Desig. Ben.", shares: 36, value: 8978, gainPct: -9.4 },
      { name: "Rollover IRA", shares: 39, value: 14109, gainPct: -6.6 },
    ],
  },
  {
    ticker: "GE", name: "GE Aerospace", icon: "✦",
    gradient: ["#00A3E0", "#005B99"],
    totalValue: 38048.48, totalShares: 184.94,
    currentPrice: 322.59, avgCost: 314.68,
    gainPct: 2.51, pe: 46, forwardPe: 43,
    analystTarget: 352.44, upside: 9.3,
    weeklyScore: 62, conviction: 78,
    thesis: "$190B backlog, 80,000+ installed engines generating decades of high-margin aftermarket revenue. Orders up 74% YoY. 2026 EPS guided $7.10-7.40 (+15%). Defense spending tailwinds are real. The LEAP engine is becoming the global standard for commercial aviation.",
    risks: "Near all-time highs — premium valuation. Historically volatile in downturns (dropped 58% in 2020). Expensive right now.",
    catalysts: ["$190B backlog converting to revenue", "LEAP engine profitability improving", "Defense contract expansion", "Saudi Arabia MRO partnerships"],
    outlook: "Great business but rich price. Hold and let it compound. Don't add aggressively at all-time highs.",
    outookType: "hold",
    accounts: [
      { name: "Taxable", shares: 10.15, value: 3276, gainPct: 2.51 },
      { name: "Roth IRA", shares: 6.78, value: 2190, gainPct: 6.73 },
      { name: "Desig. Ben.", shares: 101, value: 20968, gainPct: 5.1 },
      { name: "Rollover IRA", shares: 67, value: 11613, gainPct: -1.8 },
    ],
  },
  {
    ticker: "NFLX", name: "Netflix", icon: "N",
    gradient: ["#E50914", "#B20710"],
    totalValue: 53536.96, totalShares: 101,
    currentPrice: 98.41, avgCost: 83.08,
    gainPct: 18.46, pe: 38.24, forwardPe: 35,
    analystTarget: 1100, upside: 12,
    weeklyScore: 72, conviction: 80,
    thesis: "Global streaming monopoly. 300M+ subscribers. Ad tier still early innings — could double ARPU over 5 years. Live sports (NFL, boxing) are a massive new moat. Margins expanding rapidly. The business is transforming from pure streaming to the world's largest entertainment platform.",
    risks: "Content costs are structural. Password sharing benefits mostly priced in. Disney+, Apple TV+ competition.",
    catalysts: ["Ad-supported tier scaling", "NFL Thursday Night games", "International expansion", "Password sharing global rollout"],
    outlook: "Current price near cost basis is attractive. Long-term platform transformation story — 10-year hold.",
    outookType: "strong",
    accounts: [
      { name: "Taxable", shares: 30, value: 2952, gainPct: 18.46 },
      { name: "Roth IRA", shares: 22, value: 2165, gainPct: 17.17 },
      { name: "Desig. Ben.", shares: 27, value: 41924, gainPct: 16.8 },
      { name: "Rollover IRA", shares: 22, value: 6495, gainPct: 25.8 },
    ],
  },
];

const accounts = [
  { name: "Individual Cash", value: 51168.87, gain: 6334.08, gainPct: 14.14 },
  { name: "Roth IRA", value: 7406.76, gain: 271.32, gainPct: 3.83 },
  { name: "Desig. Beneficiary", value: 186827.61, gain: 25086.28, gainPct: 14.21 },
  { name: "Rollover IRA", value: 76421.88, gain: 7857.95, gainPct: 11.47 },
];

const totalAUM = accounts.reduce((s, a) => s + a.value, 0);
const totalGain = accounts.reduce((s, a) => s + a.gain, 0);
const fmt = (n) => "$" + Math.abs(n).toLocaleString("en-US", { maximumFractionDigits: 0 });

export default function App() {
  const [tab, setTab] = useState("overview");
  const [selected, setSelected] = useState(null);

  useEffect(() => { document.title = "My Portfolio"; }, []);

  const holding = selected ? holdings.find(h => h.ticker === selected) : null;
  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "weekly", label: "Weekly Buy" },
    { id: "positions", label: "Positions" },
    { id: "outlook", label: "Outlook" },
  ];

  return (
    <div style={{
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif",
      background: "#000", minHeight: "100vh", color: "#fff",
    }}>
      <style>{`
        @keyframes fadeSlideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .fade-in { opacity: 0; animation: fadeSlideUp 0.45s cubic-bezier(0.25,0.46,0.45,0.94) forwards; }
        .glass { background: rgba(28,28,30,0.75); backdrop-filter: blur(24px); border: 1px solid rgba(255,255,255,0.08); border-radius: 20px; }
        .glass-light { background: rgba(44,44,46,0.6); backdrop-filter: blur(16px); border: 1px solid rgba(255,255,255,0.07); border-radius: 14px; }
        .row-item { padding: 13px 0; border-bottom: 1px solid rgba(255,255,255,0.055); display: flex; justify-content: space-between; align-items: center; }
        .row-item:last-child { border-bottom: none; }
        .pressable { cursor: pointer; transition: opacity 0.15s, transform 0.15s; }
        .pressable:hover { opacity: 0.85; }
        .pressable:active { transform: scale(0.985); }
        ::-webkit-scrollbar { display: none; }
      `}</style>

      <div style={{ position: "sticky", top: 0, zIndex: 100, background: "rgba(0,0,0,0.8)", backdropFilter: "blur(40px)", borderBottom: "1px solid rgba(255,255,255,0.07)", padding: "14px 20px 0" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14 }}>
            <div>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", fontWeight: 500, letterSpacing: "0.04em", textTransform: "uppercase", marginBottom: 3 }}>Joseph Carlson Strategy</div>
              <div style={{ fontSize: 20, fontWeight: 700, letterSpacing: "-0.03em" }}>My Portfolio</div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontSize: 24, fontWeight: 700 }}>{fmt(totalAUM)}</div>
              <div style={{ fontSize: 12, color: "#30D158", fontWeight: 600, marginTop: 1 }}>+{fmt(totalGain)} open P&L</div>
            </div>
          </div>
          <div style={{ display: "flex", gap: 2, background: "rgba(255,255,255,0.07)", borderRadius: 100, padding: 3, width: "fit-content" }}>
            {tabs.map(t => (
              <button key={t.id} onClick={() => { setTab(t.id); setSelected(null); }}
                style={{ padding: "6px 14px", borderRadius: 100, border: "none", fontSize: 13, fontWeight: 500, cursor: "pointer", fontFamily: "inherit",
                  background: tab === t.id ? "rgba(255,255,255,0.18)" : "transparent",
                  color: tab === t.id ? "#fff" : "rgba(255,255,255,0.4)" }}>
                {t.label}
              </button>
            ))}
          </div>
          <div style={{ height: 14 }} />
        </div>
      </div>

      <div style={{ maxWidth: 720, margin: "0 auto", padding: "20px 20px 80px" }}>
        {tab === "overview" && (
          <div>
            <div className="glass fade-in" style={{ padding: "26px 24px", marginBottom: 12 }}>
              <div style={{ fontSize: 44, fontWeight: 700, letterSpacing: "-0.045em", lineHeight: 1, marginBottom: 10 }}>{fmt(totalAUM)}</div>
              <div style={{ display: "flex", height: 5, borderRadius: 100, overflow: "hidden", gap: 2, marginBottom: 12 }}>
                {holdings.map(h => (<div key={h.ticker} style={{ flex: h.totalValue, background: `linear-gradient(90deg, ${h.gradient[0]}, ${h.gradient[1]})`, borderRadius: 100 }} />))}
              </div>
              <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                {holdings.map(h => (<div key={h.ticker} style={{ display: "flex", alignItems: "center", gap: 5 }}><div style={{ width: 7, height: 7, borderRadius: 2, background: h.gradient[0] }} /><span style={{ fontSize: 12, color: "rgba(255,255,255,0.4)" }}>{h.ticker} {((h.totalValue / totalAUM) * 100).toFixed(0)}%</span></div>))}
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 12 }}>
              {accounts.map((acc, i) => (
                <div key={acc.name} className="glass fade-in" style={{ padding: "18px 16px", animationDelay: `${60 + i * 50}ms` }}>
                  <div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", fontWeight: 500, marginBottom: 6, textTransform: "uppercase" }}>{acc.name}</div>
                  <div style={{ fontSize: 20, fontWeight: 700 }}>{fmt(acc.value)}</div>
                  <div style={{ fontSize: 12, color: "#30D158", fontWeight: 500, marginTop: 3 }}>+{fmt(acc.gain)} · +{acc.gainPct}%</div>
                </div>
              ))}
            </div>
            <div className="glass fade-in" style={{ padding: "0 18px" }}>
              {[...holdings].sort((a, b) => b.totalValue - a.totalValue).map((h) => (
                <div key={h.ticker} className="pressable row-item" onClick={() => { setSelected(h.ticker); setTab("positions"); }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 13 }}>
                    <div style={{ width: 42, height: 42, borderRadius: 12, background: `linear-gradient(135deg, ${h.gradient[0]}, ${h.gradient[1]})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 17, fontWeight: 800, color: "#fff" }}>{h.icon}</div>
                    <div><div style={{ fontSize: 15, fontWeight: 600 }}>{h.ticker}</div><div style={{ fontSize: 12, color: "rgba(255,255,255,0.3)" }}>{h.name}</div></div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontSize: 15, fontWeight: 600 }}>{fmt(h.totalValue)}</div>
                    <div style={{ fontSize: 12, color: h.gainPct >= 0 ? "#30D158" : "#FF453A", fontWeight: 500 }}>{h.gainPct >= 0 ? "+" : ""}{h.gainPct}%</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "positions" && !holding && (
          <div className="glass fade-in" style={{ padding: "0 18px" }}>
            {holdings.map((h) => (
              <div key={h.ticker} className="pressable row-item" onClick={() => setSelected(h.ticker)}>
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <div style={{ width: 48, height: 48, borderRadius: 14, background: `linear-gradient(135deg, ${h.gradient[0]}, ${h.gradient[1]})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, fontWeight: 800, color: "#fff" }}>{h.icon}</div>
                  <div><div style={{ fontSize: 16, fontWeight: 600 }}>{h.ticker}</div><div style={{ fontSize: 12, color: "rgba(255,255,255,0.3)" }}>{h.name}</div></div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontSize: 16, fontWeight: 600 }}>{fmt(h.totalValue)}</div>
                  <div style={{ fontSize: 12, color: h.gainPct >= 0 ? "#30D158" : "#FF453A", fontWeight: 500 }}>{h.gainPct >= 0 ? "+" : ""}{h.gainPct}%</div>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "positions" && holding && (
          <div>
            <button onClick={() => setSelected(null)} style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.6)", padding: "6px 14px", borderRadius: 100, cursor: "pointer", fontSize: 13, fontFamily: "inherit", marginBottom: 18 }}>Back</button>
            <div className="glass fade-in" style={{ padding: "24px", marginBottom: 12, background: `linear-gradient(145deg, ${holding.gradient[0]}14 0%, rgba(28,28,30,0.85) 60%)`, border: `1px solid ${holding.gradient[0]}25` }}>
              <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 20 }}>
                <div style={{ width: 58, height: 58, borderRadius: 16, background: `linear-gradient(135deg, ${holding.gradient[0]}, ${holding.gradient[1]})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, fontWeight: 800, color: "#fff" }}>{holding.icon}</div>
                <div style={{ flex: 1 }}><div style={{ fontSize: 28, fontWeight: 700 }}>{holding.ticker}</div><div style={{ fontSize: 13, color: "rgba(255,255,255,0.4)" }}>{holding.name}</div></div>
                <div style={{ textAlign: "right" }}><div style={{ fontSize: 26, fontWeight: 700 }}>${holding.currentPrice}</div><div style={{ fontSize: 13, color: holding.gainPct >= 0 ? "#30D158" : "#FF453A", fontWeight: 600 }}>{holding.gainPct >= 0 ? "+" : ""}{holding.gainPct}%</div></div>
              </div>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {[["Total", fmt(holding.totalValue)], ["PE", `${holding.pe}x`], ["Target", `$${holding.analystTarget}`], ["Upside", `+${holding.upside}%`]].map(([label, value]) => (
                  <div key={label} className="glass-light" style={{ padding: "10px 13px", flex: "1 1 70px" }}>
                    <div style={{ fontSize: 9, color: "rgba(255,255,255,0.3)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 4 }}>{label}</div>
                    <div style={{ fontSize: 14, fontWeight: 700 }}>{value}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="glass fade-in" style={{ padding: "0 18px", marginBottom: 12 }}>
              {holding.accounts.map((acc) => (
                <div key={acc.name} className="row-item">
                  <div><div style={{ fontSize: 15, fontWeight: 500 }}>{acc.name}</div><div style={{ fontSize: 12, color: "rgba(255,255,255,0.3)" }}>{acc.shares.toFixed(2)} shares</div></div>
                  <div style={{ textAlign: "right" }}><div style={{ fontSize: 15, fontWeight: 600 }}>{fmt(acc.value)}</div><div style={{ fontSize: 12, color: acc.gainPct >= 0 ? "#30D158" : "#FF453A", fontWeight: 500 }}>{acc.gainPct >= 0 ? "+" : ""}{acc.gainPct.toFixed(1)}%</div></div>
                </div>
              ))}
            </div>
            <div className="glass fade-in" style={{ padding: "18px 20px", marginBottom: 12 }}><div style={{ fontSize: 14, color: "rgba(255,255,255,0.7)", lineHeight: 1.7 }}>{holding.thesis}</div></div>
            <div className="glass fade-in" style={{ padding: "18px 20px", background: "rgba(255,69,58,0.04)", border: "1px solid rgba(255,69,58,0.12)" }}><div style={{ fontSize: 14, color: "rgba(255,255,255,0.55)", lineHeight: 1.7 }}>{holding.risks}</div></div>
          </div>
        )}

        {tab === "outlook" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {[...holdings].sort((a, b) => b.conviction - a.conviction).map((h, i) => {
              const c = h.conviction;
              const cColor = c >= 90 ? "#30D158" : c >= 80 ? "#64D2FF" : "#FFD60A";
              const r = 18; const circ = 2 * Math.PI * r; const offset = circ * (1 - c / 100);
              return (
                <div key={h.ticker} className="glass fade-in pressable" style={{ padding: "20px", animationDelay: `${i * 65}ms` }} onClick={() => { setSelected(h.ticker); setTab("positions"); }}>
                  <div style={{ display: "flex", gap: 14 }}>
                    <div style={{ width: 48, height: 48, borderRadius: 13, background: `linear-gradient(135deg, ${h.gradient[0]}, ${h.gradient[1]})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, fontWeight: 800, color: "#fff" }}>{h.icon}</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                        <div><div style={{ fontSize: 17, fontWeight: 700 }}>{h.ticker}</div><div style={{ fontSize: 12, color: "rgba(255,255,255,0.3)" }}>{h.name}</div></div>
                        <div style={{ position: "relative", width: 44, height: 44 }}>
                          <svg width="44" height="44" style={{ transform: "rotate(-90deg)" }}>
                            <circle cx="22" cy="22" r={r} fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="3" />
                            <circle cx="22" cy="22" r={r} fill="none" stroke={cColor} strokeWidth="3" strokeDasharray={circ} strokeDashoffset={offset} strokeLinecap="round" />
                          </svg>
                          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, color: cColor }}>{c}</div>
                        </div>
                      </div>
                      <div style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", lineHeight: 1.6, marginBottom: 10 }}>{h.thesis.slice(0, 155)}...</div>
                      <div style={{ background: "rgba(255,255,255,0.05)", borderRadius: 10, padding: "9px 14px", fontSize: 13, color: "rgba(255,255,255,0.65)" }}>{h.outlook}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {tab === "weekly" && (
          <div>
            <div className="glass fade-in" style={{ padding: "28px 24px", marginBottom: 12, background: "linear-gradient(145deg, rgba(0,130,251,0.12) 0%, rgba(28,28,30,0.85) 60%)", border: "1px solid rgba(0,130,251,0.2)" }}>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 4 }}>Week of {WEEK}</div>
              <div style={{ fontSize: 38, fontWeight: 700, letterSpacing: "-0.045em", lineHeight: 1.1, marginBottom: 14 }}>META <span style={{ color: "rgba(255,255,255,0.25)", fontSize: 26, fontWeight: 600 }}>+ AMZN</span></div>
              <div style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", lineHeight: 1.65, marginBottom: 22 }}>META is down 9-10% across your accounts. At 21x earnings with AI-driven ad growth accelerating, this is the entry. Layer AMZN into your Roth for tax-free compounding.</div>
            </div>
            <div className="glass fade-in" style={{ padding: "0 18px" }}>
              {[...holdings].sort((a, b) => b.weeklyScore - a.weeklyScore).map((h) => {
                const sc = h.weeklyScore;
                const scColor = sc >= 85 ? "#30D158" : sc >= 70 ? "#FFD60A" : "#636366";
                return (
                  <div key={h.ticker} className="pressable row-item" onClick={() => { setSelected(h.ticker); setTab("positions"); }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <div style={{ width: 36, height: 36, borderRadius: 10, background: `linear-gradient(135deg, ${h.gradient[0]}, ${h.gradient[1]})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 15, fontWeight: 800, color: "#fff" }}>{h.icon}</div>
                      <div style={{ fontSize: 15, fontWeight: 600 }}>{h.ticker}</div>
                    </div>
                    <div style={{ fontSize: 13, fontWeight: 600, color: scColor }}>{sc}</div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

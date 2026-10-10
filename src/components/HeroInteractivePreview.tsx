import React, { useState } from 'react';
import {
  Smartphone,
  Layers,
  Terminal,
  TrendingUp,
  Package,
  Fingerprint,
  Zap,
  Play,
  RotateCcw,
  Check,
  Globe,
  Server,
  Database
} from 'lucide-react';

export const HeroInteractivePreview: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'mobile' | 'web' | 'standards'>('mobile');

  // Mobile App screen states
  const [mobileScreen, setMobileScreen] = useState<'analytics' | 'pipeline' | 'security'>('analytics');
  const [biometricsEnabled, setBiometricsEnabled] = useState(true);
  const [activeBarIndex, setActiveBarIndex] = useState(4); // Friday

  // Architecture selected tier
  const [selectedTier, setSelectedTier] = useState<number>(1);

  // Standards test runner state
  const [testRunning, setTestRunning] = useState(false);
  const [testsPassed, setTestsPassed] = useState(true);
  const [activeCodeFile, setActiveCodeFile] = useState<'security' | 'engine' | 'schema'>('security');

  const runVerificationSuite = () => {
    setTestRunning(true);
    setTestsPassed(false);
    setTimeout(() => {
      setTestRunning(false);
      setTestsPassed(true);
    }, 700);
  };

  const weeklyData = [
    { day: 'Mon', val: 65, amount: '$3,200' },
    { day: 'Tue', val: 80, amount: '$4,100' },
    { day: 'Wed', val: 55, amount: '$2,850' },
    { day: 'Thu', val: 90, amount: '$4,900' },
    { day: 'Fri', val: 100, amount: '$5,820' },
    { day: 'Sat', val: 75, amount: '$3,800' },
    { day: 'Sun', val: 85, amount: '$4,400' }
  ];

  return (
    <div className="w-full max-w-lg lg:max-w-xl mx-auto rounded-3xl bg-stone-900/95 dark:bg-[#0f1118]/95 text-stone-100 p-3 sm:p-4 border border-stone-700/60 dark:border-slate-800 shadow-2xl shadow-blue-900/20 transition-all duration-300 backdrop-blur-xl">
      {/* Studio Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 px-2 border-b border-stone-800/80 gap-2.5">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/90 shadow-xs shadow-rose-500/50"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/90 shadow-xs shadow-amber-500/50"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/90 shadow-xs shadow-emerald-500/50"></span>
          </div>
          <span className="text-xs font-mono text-stone-400 font-medium pl-1">
            techbyadil.xyz/preview
          </span>
        </div>

        {/* Studio Primary Tab Selector */}
        <div className="flex items-center gap-1 bg-stone-950/80 p-1 rounded-xl text-xs font-medium border border-stone-800/80">
          <button
            type="button"
            onClick={() => setActiveTab('mobile')}
            className={`px-2.5 py-1 rounded-lg flex items-center gap-1.5 transition-all cursor-pointer ${
              activeTab === 'mobile'
                ? 'bg-blue-600 text-white font-semibold shadow-xs'
                : 'text-stone-400 hover:text-stone-200'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>Mobile UI</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('web')}
            className={`px-2.5 py-1 rounded-lg flex items-center gap-1.5 transition-all cursor-pointer ${
              activeTab === 'web'
                ? 'bg-blue-600 text-white font-semibold shadow-xs'
                : 'text-stone-400 hover:text-stone-200'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Architecture</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('standards')}
            className={`px-2.5 py-1 rounded-lg flex items-center gap-1.5 transition-all cursor-pointer ${
              activeTab === 'standards'
                ? 'bg-blue-600 text-white font-semibold shadow-xs'
                : 'text-stone-400 hover:text-stone-200'
            }`}
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>Code & Tests</span>
          </button>
        </div>
      </div>

      {/* Main Interactive Stage Container */}
      <div className="p-2 sm:p-3 min-h-[390px] flex flex-col justify-center">
        {/* ========================================================================= */}
        {/* 1. MOBILE EXPERIENCE TAB */}
        {/* ========================================================================= */}
        {activeTab === 'mobile' && (
          <div className="w-full max-w-[340px] mx-auto bg-stone-950 rounded-3xl border border-stone-800 p-3.5 shadow-2xl ring-1 ring-white/5">
            {/* Phone Top Speaker & Notch Bar */}
            <div className="flex items-center justify-between pb-2 mb-2.5 border-b border-stone-800/80 text-[10px] font-mono text-stone-400">
              <span className="font-semibold text-white">09:41</span>
              {/* Dynamic Island Pill */}
              <div className="w-20 h-4 bg-stone-900 rounded-full flex items-center justify-center gap-1.5 px-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
                <span className="text-[9px] text-stone-400">TechByAdil</span>
              </div>
              <div className="flex items-center gap-1">
                <span>5G</span>
                <span className="text-emerald-400 font-bold">100%</span>
              </div>
            </div>

            {/* Screen Content 1: Live Analytics & Dashboard */}
            {mobileScreen === 'analytics' && (
              <div className="space-y-3 animate-in fade-in duration-200 text-left">
                {/* Revenue Card */}
                <div className="p-3 rounded-2xl bg-gradient-to-br from-stone-900 to-stone-900/90 border border-stone-800">
                  <div className="flex items-center justify-between text-[11px] text-stone-400">
                    <span>Store Performance</span>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-400 text-[10px] font-mono border border-emerald-800/40">
                      Live Sync
                    </span>
                  </div>
                  <div className="mt-1 flex items-baseline gap-2">
                    <span className="text-xl font-extrabold text-white tracking-tight">$28,450.00</span>
                    <span className="text-xs font-semibold text-emerald-400 flex items-center gap-0.5">
                      <TrendingUp className="w-3 h-3" />
                      +18.6%
                    </span>
                  </div>

                  {/* Interactive Micro Weekly Activity Chart */}
                  <div className="mt-2.5 pt-2 border-t border-stone-800/80">
                    <div className="flex items-center justify-between text-[10px] text-stone-400 mb-1 font-mono">
                      <span>Weekly Volume</span>
                      <span className="text-blue-400 font-semibold">{weeklyData[activeBarIndex].day}: {weeklyData[activeBarIndex].amount}</span>
                    </div>
                    <div className="flex items-end gap-1.5 h-11 pt-1">
                      {weeklyData.map((item, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setActiveBarIndex(idx)}
                          className={`flex-1 rounded-t transition-all cursor-pointer ${
                            activeBarIndex === idx
                              ? 'bg-gradient-to-t from-blue-600 to-indigo-500 scale-y-105'
                              : 'bg-stone-800 hover:bg-stone-700'
                          }`}
                          style={{ height: `${item.val}%` }}
                          title={`${item.day}: ${item.amount}`}
                        />
                      ))}
                    </div>
                    <div className="flex justify-between text-[9px] text-stone-500 font-mono mt-1">
                      {weeklyData.map((item, idx) => (
                        <span key={idx} className={activeBarIndex === idx ? 'text-blue-400 font-bold' : ''}>
                          {item.day[0]}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Quick KPI Stat Chips */}
                <div className="grid grid-cols-2 gap-2 text-left">
                  <div className="p-2.5 rounded-xl bg-stone-900 border border-stone-800">
                    <div className="text-[10px] text-stone-400">Pending Orders</div>
                    <div className="text-sm font-bold text-white mt-0.5">42 items</div>
                    <div className="text-[10px] text-amber-400 font-medium">Needs dispatch</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-stone-900 border border-stone-800">
                    <div className="text-[10px] text-stone-400">Stock Velocity</div>
                    <div className="text-sm font-bold text-white mt-0.5">98.4%</div>
                    <div className="text-[10px] text-emerald-400 font-medium">Optimal turnover</div>
                  </div>
                </div>
              </div>
            )}

            {/* Screen Content 2: Order Pipeline */}
            {mobileScreen === 'pipeline' && (
              <div className="space-y-2 animate-in fade-in duration-200 text-left py-1">
                <div className="flex items-center justify-between text-xs font-semibold text-white mb-1">
                  <span>Active Shipments</span>
                  <span className="text-[10px] font-mono text-stone-400">3 in progress</span>
                </div>

                {[
                  { id: '#ORD-9021', dest: 'Chicago, US', status: 'Delivered', time: '12m ago', color: 'emerald' },
                  { id: '#ORD-9022', dest: 'London, UK', status: 'In Transit', time: '45m ago', color: 'blue' },
                  { id: '#ORD-9023', dest: 'Toronto, CA', status: 'Packing', time: '1h ago', color: 'amber' }
                ].map((order, idx) => (
                  <div key={idx} className="p-2.5 rounded-xl bg-stone-900 border border-stone-800 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-white flex items-center gap-1.5">
                        <Package className="w-3.5 h-3.5 text-stone-400" />
                        <span>{order.id}</span>
                      </div>
                      <div className="text-[10px] text-stone-400 mt-0.5">{order.dest} • {order.time}</div>
                    </div>
                    <span className={`text-[10px] font-mono font-medium px-2 py-0.5 rounded-full ${
                      order.color === 'emerald'
                        ? 'bg-emerald-950 text-emerald-400 border border-emerald-800/40'
                        : order.color === 'blue'
                        ? 'bg-blue-950 text-blue-400 border border-blue-800/40'
                        : 'bg-amber-950 text-amber-400 border border-amber-800/40'
                    }`}>
                      {order.status}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* Screen Content 3: Security & Session Protection */}
            {mobileScreen === 'security' && (
              <div className="space-y-3 animate-in fade-in duration-200 text-left py-1">
                <div className="text-xs font-semibold text-white">App Protection & Sessions</div>

                <div className="p-3 rounded-2xl bg-stone-900 border border-stone-800 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Fingerprint className="w-4 h-4 text-emerald-400" />
                      <span className="text-xs font-medium text-white">Biometric Login</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setBiometricsEnabled(!biometricsEnabled)}
                      className={`w-9 h-5 rounded-full p-0.5 transition-colors cursor-pointer ${
                        biometricsEnabled ? 'bg-emerald-600' : 'bg-stone-700'
                      }`}
                    >
                      <div className={`w-4 h-4 rounded-full bg-white transition-transform ${
                        biometricsEnabled ? 'translate-x-4' : 'translate-x-0'
                      }`} />
                    </button>
                  </div>
                  <div className="text-[10px] text-stone-400 leading-snug">
                    Encrypted hardware keychain storage. FaceID & TouchID active.
                  </div>
                </div>

                <div className="p-3 rounded-2xl bg-stone-900 border border-stone-800 text-xs space-y-1">
                  <div className="flex items-center justify-between text-stone-300">
                    <span className="text-[11px] font-semibold">Active Session:</span>
                    <span className="text-emerald-400 font-mono text-[10px]">Zero Leak Verified</span>
                  </div>
                  <div className="text-[10px] text-stone-400 font-mono">Token: SHA-256 AuthCookie (HTTPOnly)</div>
                </div>
              </div>
            )}

            {/* Bottom App Navigation (Interactive Tabs) */}
            <div className="mt-3 pt-2.5 border-t border-stone-800 flex items-center justify-around text-[10px]">
              <button
                type="button"
                onClick={() => setMobileScreen('analytics')}
                className={`py-1 px-2.5 rounded-lg transition-all cursor-pointer ${
                  mobileScreen === 'analytics'
                    ? 'text-blue-400 bg-blue-950/60 font-bold'
                    : 'text-stone-400 hover:text-stone-200'
                }`}
              >
                Overview
              </button>
              <button
                type="button"
                onClick={() => setMobileScreen('pipeline')}
                className={`py-1 px-2.5 rounded-lg transition-all cursor-pointer ${
                  mobileScreen === 'pipeline'
                    ? 'text-blue-400 bg-blue-950/60 font-bold'
                    : 'text-stone-400 hover:text-stone-200'
                }`}
              >
                Orders
              </button>
              <button
                type="button"
                onClick={() => setMobileScreen('security')}
                className={`py-1 px-2.5 rounded-lg transition-all cursor-pointer ${
                  mobileScreen === 'security'
                    ? 'text-blue-400 bg-blue-950/60 font-bold'
                    : 'text-stone-400 hover:text-stone-200'
                }`}
              >
                Security
              </button>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* 2. END-TO-END ARCHITECTURE TAB */}
        {/* ========================================================================= */}
        {activeTab === 'web' && (
          <div className="space-y-3 text-left animate-in fade-in duration-200">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-blue-400 uppercase tracking-wider font-semibold">
                Interactive Systems Topology
              </span>
              <span className="text-[10px] text-stone-400 font-mono">
                Click any layer to inspect
              </span>
            </div>

            {/* Interactive Architecture Layers */}
            <div className="space-y-2">
              {[
                {
                  id: 1,
                  title: '1. Frontend & Client Edge',
                  stack: 'React 19 • TypeScript • Tailwind v4 • iOS/Android Apps',
                  badge: 'Edge CDN',
                  details: 'Global sub-30ms static distribution with zero-layout-shift (CLS < 0.05) and WCAG 2.2 AA accessibility.',
                  icon: Globe
                },
                {
                  id: 2,
                  title: '2. API & Security Gateway',
                  stack: 'RESTful Endpoints • Zero-Trust JWT • ReDoS-Safe Sanity',
                  badge: 'Rate Limited',
                  details: 'Strict Content Security Policy headers, anti-bot honeypots, session rotation, and parameterized request validation.',
                  icon: Server
                },
                {
                  id: 3,
                  title: '3. Data & Storage Engine',
                  stack: 'PostgreSQL / MongoDB • ACID Transactions • Immutable Logs',
                  badge: 'ACID Safe',
                  details: 'Row-level locking for multi-operator stock movements, foreign-key consistency, and automated daily backups.',
                  icon: Database
                }
              ].map((tier) => {
                const isSelected = selectedTier === tier.id;
                const Icon = tier.icon;
                return (
                  <div
                    key={tier.id}
                    onClick={() => setSelectedTier(tier.id)}
                    className={`p-3 rounded-2xl border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-stone-900 border-blue-500 shadow-md ring-1 ring-blue-500/30'
                        : 'bg-stone-950/80 border-stone-800 hover:border-stone-700'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${
                          isSelected ? 'bg-blue-600 text-white' : 'bg-stone-800 text-stone-400'
                        }`}>
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white">{tier.title}</div>
                          <div className="text-[11px] text-stone-400">{tier.stack}</div>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-blue-950 text-blue-300 border border-blue-800/40">
                        {tier.badge}
                      </span>
                    </div>

                    {isSelected && (
                      <div className="mt-2.5 pt-2 border-t border-stone-800 text-[11px] text-stone-300 leading-relaxed animate-in fade-in duration-150">
                        {tier.details}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="p-2.5 rounded-xl bg-blue-950/30 border border-blue-900/40 text-[11px] text-blue-200 flex items-center gap-2">
              <Zap className="w-4 h-4 text-blue-400 shrink-0" />
              <span>Architected to scale seamlessly from MVP to enterprise loads with zero technical debt.</span>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* 3. CODE RIGOR & TEST SUITE TAB */}
        {/* ========================================================================= */}
        {activeTab === 'standards' && (
          <div className="space-y-3 text-left animate-in fade-in duration-200">
            {/* File Switcher & Run Tests Action */}
            <div className="flex items-center justify-between pb-1 border-b border-stone-800">
              <div className="flex items-center gap-1 text-[11px] font-mono">
                <button
                  type="button"
                  onClick={() => setActiveCodeFile('security')}
                  className={`px-2.5 py-1 rounded-lg transition-colors cursor-pointer ${
                    activeCodeFile === 'security'
                      ? 'bg-blue-600 text-white font-bold'
                      : 'text-stone-400 hover:text-white'
                  }`}
                >
                  Security.ts
                </button>
                <button
                  type="button"
                  onClick={() => setActiveCodeFile('engine')}
                  className={`px-2.5 py-1 rounded-lg transition-colors cursor-pointer ${
                    activeCodeFile === 'engine'
                      ? 'bg-blue-600 text-white font-bold'
                      : 'text-stone-400 hover:text-white'
                  }`}
                >
                  StockEngine.ts
                </button>
              </div>

              <button
                type="button"
                onClick={runVerificationSuite}
                disabled={testRunning}
                className="px-2.5 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-[10px] font-mono font-bold flex items-center gap-1 transition-all cursor-pointer shadow-xs disabled:opacity-50"
              >
                {testRunning ? (
                  <>
                    <RotateCcw className="w-3 h-3 animate-spin" />
                    <span>Running QA...</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3 h-3 fill-current" />
                    <span>Run QA Suite</span>
                  </>
                )}
              </button>
            </div>

            {/* Code Snippet Box */}
            <div className="p-3 rounded-2xl bg-stone-950 border border-stone-800 font-mono text-[11px] text-stone-300 overflow-x-auto space-y-1">
              {activeCodeFile === 'security' ? (
                <>
                  <div className="text-stone-500">// Zero-Trust Content Security & Honeypot Guard</div>
                  <div>
                    <span className="text-purple-400">export function</span>{' '}
                    <span className="text-blue-400">validatePayload</span>(input: <span className="text-amber-300">InquiryData</span>): <span className="text-emerald-400">Result</span> &#123;
                  </div>
                  <div className="pl-4 text-stone-400">
                    <span className="text-purple-400">if</span> (input.botcheck !== <span className="text-emerald-300">""</span>) <span className="text-rose-400">return</span> RejectBot();
                  </div>
                  <div className="pl-4 text-stone-400">
                    <span className="text-purple-400">const</span> clean = sanitize(input.body, &#123; stripHtml: <span className="text-blue-300">true</span> &#125;);
                  </div>
                  <div className="pl-4 text-emerald-400">return &#123; ok: true, data: clean &#125;;</div>
                  <div>&#125;</div>
                </>
              ) : (
                <>
                  <div className="text-stone-500">// ACID Stock Reconciliation Engine</div>
                  <div>
                    <span className="text-purple-400">await</span> db.transaction(<span className="text-purple-400">async</span> (tx) =&gt; &#123;
                  </div>
                  <div className="pl-4 text-stone-400">
                    <span className="text-purple-400">const</span> item = <span className="text-purple-400">await</span> tx.lockRow(sku);
                  </div>
                  <div className="pl-4 text-stone-400">
                    <span className="text-purple-400">await</span> tx.updateInventory(fromWarehouse, -qty);
                  </div>
                  <div className="pl-4 text-stone-400">
                    <span className="text-purple-400">await</span> tx.updateInventory(toWarehouse, +qty);
                  </div>
                  <div className="pl-4 text-emerald-400">await tx.recordAuditLog(userId, sku, qty);</div>
                  <div>&#125;);</div>
                </>
              )}
            </div>

            {/* Test Runner Feedback Status */}
            <div className="p-2.5 rounded-xl bg-stone-950 border border-stone-800 text-[11px] font-mono space-y-1">
              <div className="text-stone-400 flex items-center justify-between">
                <span>Verification Checklist:</span>
                <span className={`font-bold ${testsPassed ? 'text-emerald-400' : 'text-amber-400'}`}>
                  {testsPassed ? '100% Passed (14/14)' : 'Running Tests...'}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-1 text-[10px] text-stone-300">
                <div className="flex items-center gap-1 text-emerald-400">
                  <Check className="w-3 h-3 stroke-[3]" />
                  <span>TypeScript Strict: 0 Errors</span>
                </div>
                <div className="flex items-center gap-1 text-emerald-400">
                  <Check className="w-3 h-3 stroke-[3]" />
                  <span>WCAG 2.2 AA: Compliant</span>
                </div>
                <div className="flex items-center gap-1 text-emerald-400">
                  <Check className="w-3 h-3 stroke-[3]" />
                  <span>CSP & Anti-Clickjack: OK</span>
                </div>
                <div className="flex items-center gap-1 text-emerald-400">
                  <Check className="w-3 h-3 stroke-[3]" />
                  <span>CWV LCP: &lt;1.2s Fast</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Interactive Micro-Hint Footer */}
      <div className="text-[10px] font-mono text-stone-400 border-t border-stone-800/80 pt-2 pb-0.5 text-center flex items-center justify-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-ping"></span>
        <span>Click tabs above to test mobile UI flows, system architecture, or live code tests.</span>
      </div>
    </div>
  );
};

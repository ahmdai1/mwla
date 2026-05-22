import { Button } from '@mwlai/ui'
import { formatCurrency } from '@mwlai/utils'

const features = [
  'AI tools directory',
  'Deals and coupons',
  'Affiliate platform for the Arab world',
  'RTL/Arabic-first layout support'
]

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-8 sm:px-10">
        <div className="flex items-center justify-between py-4">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-amber-300">MWLAI</p>
            <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">AI tools, deals, and affiliate growth.</h1>
          </div>
          <nav className="flex items-center gap-4 text-sm text-slate-300">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#contact" className="hover:text-white">Contact</a>
            <Button variant="ghost">عربي</Button>
          </nav>
        </div>

        <section className="grid gap-8 py-12 md:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <span className="inline-flex rounded-full bg-amber-500/15 px-4 py-2 text-sm text-amber-200">Launch-ready UI for Arab market</span>
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              منصة MWLAI لأدوات الذكاء الاصطناعي والعروض التجارية.
            </h2>
            <p className="max-w-xl text-slate-300 sm:text-lg">
              منصة ثنائية اللغة تجمع الأدوات الذكية، كوبونات التخفيض، والتسويق بالعمولة بواجهة حديثة قابلة للتوسع.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button>ابدأ الآن</Button>
              <Button variant="secondary">تعرف أكثر</Button>
            </div>
          </div>
          <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-xl shadow-slate-950/40">
            <p className="text-sm uppercase tracking-[0.32em] text-slate-400">Trending savings</p>
            <div className="mt-6 space-y-4">
              <div className="rounded-3xl bg-slate-950/90 p-5">
                <p className="text-sm text-slate-400">Best deal of the week</p>
                <p className="mt-2 text-2xl font-semibold text-white">Save {formatCurrency(199)}</p>
              </div>
              <div className="grid gap-3 text-slate-300 sm:grid-cols-2">
                <div className="rounded-3xl bg-slate-900 p-4">Premium AI subscriptions</div>
                <div className="rounded-3xl bg-slate-900 p-4">Partner coupons and cashbacks</div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="grid gap-4 rounded-3xl bg-slate-900/90 p-8">
          <h3 className="text-xl font-semibold text-white">Why MWLAI?</h3>
          <div className="grid gap-3 sm:grid-cols-2">
            {features.map((feature) => (
              <div key={feature} className="rounded-3xl border border-slate-800 bg-slate-950/80 p-5">
                <p>{feature}</p>
              </div>
            ))}
          </div>
        </section>
      </header>
      <footer id="contact" className="mx-auto max-w-6xl px-6 py-10 text-slate-500 sm:px-10">
        <p>MWLAI — منصة أدوات الذكاء الاصطناعي والأسواق الرقمية.</p>
      </footer>
    </div>
  )
}

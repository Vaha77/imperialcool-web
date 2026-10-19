"use client";
/* eslint-disable @next/next/no-img-element -- external catalog images, no next/image domain config */

import { useEffect, useRef, useState, useTransition } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { useLocale } from "@/i18n/LocaleProvider";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { TelegramIcon, WeChatButton, WeChatIcon, WhatsAppIcon } from "@/components/layout/FloatingContact";
import { CONTACT } from "@/lib/contact";
import type { CatalogPage, Product } from "@/lib/catalog";
import clsx from "@/lib/clsx";
import { IconEvaporator } from "@/components/visuals/ProductIcons";

type Props = { initial: CatalogPage; categories: [string, string][]; category: string; q: string };

const href = (category: string, q: string) =>
  `/products?${new URLSearchParams({ ...(category !== "all" && { category }), ...(q && { q }) })}`;

const chip = "rounded-full border px-4 py-1.5 text-[12px] font-semibold transition-colors";

export function ProductCatalog({ initial, categories, category, q }: Props) {
  const { dict } = useLocale();
  const t = dict.catalog;
  const [products, setProducts] = useState(initial.products);
  const [cursor, setCursor] = useState(initial.nextCursor);
  const [error, setError] = useState(initial.error);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState<Product | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const router = useRouter();
  const [text, setText] = useState(q);
  const [pending, startTransition] = useTransition();
  const [shown, setShown] = useState(initial);
  if (shown !== initial) {
    setShown(initial);
    setProducts(initial.products);
    setCursor(initial.nextCursor);
    setError(initial.error);
  }

  useEffect(() => {
    if (text.trim() === q) return;
    const id = setTimeout(() => startTransition(() => router.replace(href(category, text.trim()), { scroll: false })), 300);
    return () => clearTimeout(id);
  }, [text, q, category, router]);

  const price = (p: Product) => (p.priceUsd ? `$${Number(p.priceUsd).toLocaleString("en-US")}` : t.askPrice);

  async function loadMore() {
    setLoading(true);
    const params = new URLSearchParams({ category, q, cursor: cursor!, seed: initial.seed });
    const page: CatalogPage = await fetch(`/api/catalog?${params}`).then((r) => r.json()).catch(() => ({ error: true }));
    if (page.error) setError(true);
    else {
      setProducts((prev) => [...prev, ...page.products]);
      setCursor(page.nextCursor);
    }
    setLoading(false);
  }

  function open(p: Product) {
    setSelected(p);
    dialog.current?.showModal();
  }

  return (
    <section className="min-h-[92svh] bg-ink pb-24 pt-28">
      <Container>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            (document.activeElement as HTMLElement | null)?.blur();
          }}
          className="relative"
        >
          <input
            type="search"
            enterKeyHint="search"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder={t.search}
            aria-label={t.search}
            className="w-full min-w-0 rounded-full border border-silver-400/20 bg-navy-900 py-3 pl-5 pr-20 text-[14px] text-paper placeholder:text-silver-500 focus:border-ice-400 focus:outline-none [&::-webkit-search-cancel-button]:appearance-none"
          />
          <div className="absolute inset-y-0 right-4 flex items-center gap-2 text-silver-500">
            {text && (
              <button type="button" onClick={() => setText("")} aria-label="Clear" className="px-1 text-xl leading-none hover:text-paper">
                ×
              </button>
            )}
            <Search aria-hidden className="h-4 w-4" />
          </div>
        </form>

        <nav className="mt-6 flex flex-wrap gap-2">
          {[["all", t.all], ...categories].map(([slug, name]) => (
            <Link
              key={slug}
              href={href(slug, q)}
              className={clsx(chip, slug === category ? "border-ice-400 bg-ice-400/10 text-ice-400" : "border-silver-400/20 text-silver-400 hover:text-paper")}
            >
              {t.categories[slug] ?? name}
            </Link>
          ))}
        </nav>

        {products.length === 0 && <p className="mt-16 text-center text-silver-400">{error ? t.error : t.empty}</p>}

        <div className={clsx("mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-silver-400/15 bg-silver-400/15 transition-opacity sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4", pending && "opacity-40")}>
          {products.map((p) => (
            <button key={p.id} type="button" onClick={() => open(p)} className="group relative flex flex-col bg-navy-900 p-6 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-ice-400">
              <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ice-400/[0.06] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className={clsx("relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-xl", p.image ? "bg-paper" : "bg-ink")}>
                {p.image ? <img src={p.image} alt={p.name} loading="lazy" className="h-full w-full object-contain" /> : <IconEvaporator className="h-16 w-16 text-ice-400/40" />}
              </div>
              <span className="relative mt-5 text-[11px] font-semibold uppercase tracking-wider2 text-ice-400">{p.brand} · {t.categories[p.category] ?? p.categoryName}</span>
              <h3 className="relative mt-2 text-[15px] font-semibold leading-snug text-paper">{p.name}</h3>
              <ul className="relative mt-3 space-y-1 text-[13px] text-silver-500">
                {p.specs.slice(0, 3).map((s) => (
                  <li key={s}>· {s}</li>
                ))}
              </ul>
              <span className="relative mt-auto pt-5 text-lg font-bold text-paper">{price(p)}</span>
            </button>
          ))}
        </div>

        {cursor && (
          <div className="mt-10 text-center">
            <Button onClick={loadMore} disabled={loading}>
              {t.loadMore}
            </Button>
          </div>
        )}
      </Container>

      <dialog
        ref={dialog}
        onClose={() => setSelected(null)}
        onClick={(e) => e.target === e.currentTarget && dialog.current?.close()}
        className="w-[calc(100%-2rem)] max-w-2xl rounded-2xl border border-silver-400/20 bg-navy-900 p-0 text-paper backdrop:bg-ink/80"
      >
        {selected && (
          <div className="relative p-6 sm:p-8">
            <button type="button" onClick={() => dialog.current?.close()} aria-label="Close" className="absolute right-4 top-3 text-2xl text-silver-400 hover:text-paper">
              ×
            </button>
            <div className={clsx("aspect-[4/3] overflow-hidden rounded-xl", selected.image ? "bg-paper" : "hidden")}>
              {selected.image && <img src={selected.image} alt={selected.name} className="h-full w-full object-contain" />}
            </div>
            <span className="mt-6 block text-[11px] font-semibold uppercase tracking-wider2 text-ice-400">
              {selected.brand} · {selected.availability === "available" ? t.available : t.expected}
            </span>
            <h2 className="mt-2 font-display text-2xl font-bold">{selected.name}</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {selected.specs.map((s) => (
                <li key={s} className="rounded-full border border-silver-400/20 px-3 py-1 text-[12px] text-silver-400">
                  {s}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-2xl font-bold">{price(selected)}</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <a
                href={`${CONTACT.whatsapp}?text=${encodeURIComponent(`${selected.name} haqida ma'lumot olmoqchiman`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 font-semibold text-ink"
              >
                <WhatsAppIcon className="h-5 w-5" /> WhatsApp
              </a>
              <a href={CONTACT.telegram} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 rounded-full bg-[#229ED9] px-5 py-3 font-semibold text-paper">
                <TelegramIcon className="h-5 w-5" /> Telegram
              </a>
              <WeChatButton className="flex items-center justify-center gap-2 rounded-full bg-[#07C160] px-5 py-3 font-semibold text-ink">
                <WeChatIcon className="h-5 w-5" /> WeChat
              </WeChatButton>
            </div>
          </div>
        )}
      </dialog>
    </section>
  );
}

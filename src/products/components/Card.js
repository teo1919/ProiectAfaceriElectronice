import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <article className="product-card">
      <Link href={`/products/${product.slug}`}>
        <img src={`/assets/${product.slug}.png`} alt={product.name} />
      </Link>
      <header>
        <p>{product.name}</p>
      </header>
      <footer>
        <Link href={`/products/${product.slug}`} className="more">
          See More
        </Link>
      </footer>
      <div>
        <span className="pill">{product.category}</span>
      </div>
    </article>
  );
}

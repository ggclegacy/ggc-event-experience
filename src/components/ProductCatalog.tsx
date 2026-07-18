import { formatProductPrice, products as defaultProducts, type Product } from "@/data/products";

export function ProductCatalog({ products = defaultProducts }: { products?: Product[] }) {
  const ordered = [...products].sort((a, b) => a.displayOrder - b.displayOrder);
  return (
    <section className="catalog" aria-labelledby="catalog-heading">
      <div className="catalog__intro">
        <p className="eyebrow">The current collection</p>
        <h1 id="catalog-heading">Groom with intention.</h1>
        <p>Meet the event selection, then scan when you’re ready to continue online.</p>
      </div>
      {ordered.length ? (
        <ul className="product-grid" aria-label="Products">
          {ordered.map((product) => (
            <li className="product-card" key={product.id}>
              <div>
                {product.badge && <p className="product-card__badge">{product.badge}</p>}
                <h2>{product.name}</h2>
                <p>{product.description}</p>
              </div>
              <p className="product-card__price">{formatProductPrice(product)}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="catalog__empty">Ask us about today’s Groomed Gent Co. selection and pricing.</p>
      )}
    </section>
  );
}

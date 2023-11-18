import { supabase } from "supabase";
import ProductCard from "src/products/components/Card";


export default function ProductsPage( {products} ) {
console.log(products);
    return (
    <>
    <div className="section bg-blue">
        <div className="container">
            <div>
                <h1>Our Products</h1>
            </div>
        </div>
    </div>

    <div className="section small">
        <div className="container">
            <ul className="product-card-grid">
            {products.map((product) => (
                <ProductCard key={product.id} product={product}/>
            ))}

            </ul>
        </div>
    </div>
    </>
);
 }

export async function getStaticProps() {
    let { data: products} = await supabase.from("product").select("*");

    return {
        props: {
            products,
        },
    };
}


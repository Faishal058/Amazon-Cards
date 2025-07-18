import Product from './Product.jsx';


function ProductTab() {
    return (
        <>
            <Product title="phone" price={30000} features={[<li>"hi-tech"</li>, <li>"durable"</li>, "fast"]}/> 
            <Product title="laptop" price={60000} features={["hi-tech", 'durable', "fast"]}/>
            <Product title="pen" price={10} features={["durable"]}/>
        </>
    );
}

export default ProductTab;
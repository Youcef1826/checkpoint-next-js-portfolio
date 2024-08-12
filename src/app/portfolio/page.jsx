import Image from "next/image";
import prestashop from "../../../public/prestashop.png";
import shopify from "../../../public/shopify.jpg";
import WordPress from "../../../public/wordpress.jpg";
import seo from "../../../public/seo.jpeg";


function Portfolio() {
    return (
        <>
        <section className="space-y-8">
            <h2 className="font-bold text-4xl">My realisation</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div className="grid grid-cols-4 gap-4">
                <article className="hover:shadow-lg duration-300 rounded-md border-[1px] border-slate-100">
                    <Image className="object-cover h-48" src={shopify} alt="" srcset="" />
                    <div className="p-6 space-y-4">
                        <h3 className="font-bold text-lg">E-commerce with Shopify</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <span>Shopify</span>
                    </div>
                </article>
                <article className="hover:shadow-lg duration-300 rounded-md border-[1px] border-slate-100">
                    <Image className="object-cover h-48" src={prestashop} alt="" srcset="" />
                    <div className="p-6 space-y-4">
                        <h3 className="font-bold text-lg">E-commerce with Prestashop</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <span>Prestashop</span>
                    </div>
                </article>
                <article className="hover:shadow-lg duration-300 rounded-md border-[1px] border-slate-100">
                    <Image className="object-cover h-48" src={WordPress} alt="" srcset="" />
                    <div className="p-6 space-y-4">
                        <h3 className="font-bold text-lg"> Landing page with WordPress</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <span>WordPress</span>
                    </div>
                </article>
                <article className="hover:shadow-lg duration-300 rounded-md border-[1px] border-slate-100">
                    <Image className="object-cover h-48" src={seo} alt="" srcset="" />
                    <div className="p-6 space-y-4">
                        <h3 className="font-bold text-lg">Search Engine Optimization</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <span>SEO</span>
                    </div>
                </article>
            </div>
        </section>
        </>
    )
}

export default Portfolio;
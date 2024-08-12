import ContactForm from "@/components/ContactForm";

function ContactPage() {

    return (
        <>
        <section className="space-y-8 my-12">
            <h2 className="font-bold text-4xl text-center">Get in touch</h2>
            <div>
                <ContactForm />
            </div>
        </section>
        </>
    )
}

export default ContactPage;
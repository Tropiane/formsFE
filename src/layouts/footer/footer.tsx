import Form from "./form";


function Footer() {
    return <footer id="footer" className="flex flex-col items-center justify-center gap-8 py-16 px-4 bg-primary bg-blue-900 text-white rounded-t-3xl">
        <h4 className="thirdTitleFont">¿Tenes dudas? <span>Contactanos</span></h4>
        <Form/>
    </footer>
}

export default Footer
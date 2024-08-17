const Contact = ()=> {
    return (<div>
        <h1 className="font-bold m-4 p-4">Contact Us</h1>
        <h2 className="font-semibold m-4 p-4">We are here to help you with your queries.Available 24/7 please feel free to call us on 987654310</h2>
        <form className="flex-row">
            <input placeholder="name" className="m-2 p-2  bg-white border border-black " type="text"/>
            <input placeholder="message" className="m-2 p-2  bg-white border border-black " type="text"/>
            <button className="m-2 p-2 bg-white border border-black rounded-md ">Submit</button>

        </form>
    </div>)
}
export default Contact;
import NavBar from "../header/navBar";

function Home() {
    return (
        <div className="flex flex-col gap-10 my-10">
        <NavBar isFooter={false} />;
        <div className="flex flex-col items-center gap-4">
            <h1 className="firstTitleFont text-4xl">Bienvenido a Ticket Manager</h1>
            <p className="textFont">Gestiona tus tickets de manera sencilla</p>
        </div>
        </div>
    );
}

export default Home
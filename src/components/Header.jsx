export default function Header(){
    return (
        <header className="Header">
            <div>
                <h1>Ticketmanager</h1>
            </div>
            <div className="userInfo">
                 <img src="/" alt="profilepicture" />
                <p>username</p>
            </div>
           <div className="controls">
            <img src="src/assets/settings.svg" alt="" />
           </div>
            
        </header>
    )
}
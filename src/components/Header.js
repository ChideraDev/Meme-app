import React from 'react';


export default function Header(){
    return(
        <div className="header">
        <img src="./header.png" alt="laughing head" className="header-img"/>
        <h1 className="header-title">Meme Generator</h1>
        <h4 className="header-project">React course-Project3</h4>

        </div>
    )
}

/*export default function Header(props){
    return(
        <header className="header">
            <p>Current user:{props.user}</p>
        </header>
    )
}*/
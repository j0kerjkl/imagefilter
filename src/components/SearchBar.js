import { useState } from "react";
import "./Searchbar.css"
import "./ImageComponent.css"
function SearchBar({ onSubmit }) {

    const [term, setTerm] = useState("")

    const handleFormSubmit = (event) => {
        event.preventDefault();
        onSubmit(term)
    }

    const handleChange = (event) => {
        setTerm(event.target.value)
    }


    return (
        <div>

            <h1>Flickr Photo Gallery</h1>
            <div className="search-box">
                <form onSubmit={handleFormSubmit}>
                    <input className="input-search" placeholder="Press Enter to Search" value={term} onChange={handleChange} />
                </form>
            </div>
            <div className="center">
                <button className="btn1 ui teal button" onClick={() => onSubmit("tech")}>Tech</button>
                <button className="btn2 ui teal button" onClick={() => onSubmit("fitness")}>Fitness</button>
                <button className="btn3 ui teal button" onClick={() => onSubmit("music")}>Music</button>
                <button className="btn4 ui teal button" onClick={() => onSubmit("mobile")}>Mobile</button>

            </div>
        </div>
    )
}
export default SearchBar;
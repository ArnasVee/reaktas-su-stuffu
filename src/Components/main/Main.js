import articles from "../../Data/articles";
import {useState} from "react";
import Search from "../search/Search";
import Content from "../content/Content";
const Main =()=>{
    const [searchTerm, setSearchTerm] = useState("")

    const handleInput = (event)=>{
        // console.log(event.target.value)
        setSearchTerm(event.target.value)
    }
    // console.log(searchTerm)
    const filteredArticles = articles.filter((article)=>{
        return article.title.includes(searchTerm)
    })
    console.log(filteredArticles)
    return(
        <div className="container px-lg-5">
            <form className="d-flex">
                <Search name="search" onSearch={handleInput}/>
            </form>
            <Content articles={filteredArticles}/>
        </div>
    )
}
export default Main
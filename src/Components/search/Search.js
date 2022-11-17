const Search = ({val, onSearch,...props})=>{
    return(
        <input
            value={val}
            className="form-control"
            onChange={onSearch}
            placeholder="Search posts"
            {...props}
        />
    )
}

export default Search
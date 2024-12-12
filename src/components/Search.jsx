import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";

const Search = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const navigate = useNavigate()
    const handleSearch= (e) =>{
        e.preventDefault();
        if(searchQuery.trim()){
            navigate(`/search?query=${encodeURIComponent(searchQuery)}`)
        }
    }

    return (
        <form className="d-flex search-box h-100" onSubmit={handleSearch}>
            <input className="form-control me-2"
                type="text"
                placeholder="Enter Search Keywords"
                value={searchQuery}
                onChange={(e)=>{setSearchQuery(e.target.value)}}
            />
            <button className="btn" type="submit"><CiSearch className='text-light' /></button>
        </form>
    )
}

export default Search

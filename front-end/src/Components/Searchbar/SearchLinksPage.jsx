import { useParams } from "react-router";
import {Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios';

const SearchLinksPage = () => {

    let { query } = useParams();
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8080/movies/find/${query}`)
            .then((res) => {
                const DATA = res.data;
                setData(DATA);
            }).catch((err) => {
                console.log(err.message);
                setData([]);
            })
    }, [query]);

    const siteTerms = ["Opening Times", "Getting There", "Classifications", "Places To Go", "About", "Contact Page", "Screens", "Listings", "New Releases", "Discussion", "Ticket Booking"];
    let siteLinksCounter = 0;

    const siteLinks = siteTerms.map(siteTerm => {
        if (siteTerm.toLowerCase().includes(query.toLowerCase())) {
            siteLinksCounter++;
            return(
                <>
                    <Link to={`../${siteTerm.replace(/\s/g, '')}`}><h1>{siteTerm}</h1></Link>
                </>
            );
        }
        })

    const movieLinks = data.map(movie => {
        let relevantSearchTerms = []
         
        if (movie.title.toLowerCase().includes(query.toLowerCase())) {
           relevantSearchTerms.push(movie.title + " | ");
        } 
        
        for (let director of movie.director) {
            if (director.toLowerCase().includes(query.toLowerCase())) {
                relevantSearchTerms.push(movie.director + " | ");
            }
        }

        for (let actor of movie.actors) {
            if (actor.toLowerCase().includes(query.toLowerCase())) {
                relevantSearchTerms.push(actor + " | ");
            }
        }
        
        return(
            <>
                <Link to={`../movies/${movie.title}`}><h1>{movie.title}</h1></Link>
                <p>Relevant search terms: {relevantSearchTerms}</p>
                
            </>
        )
        });
    
    if (data.length || siteLinksCounter>0) {  
        return(
            <>
            <h2>Search Results:</h2>
            {siteLinks}
            <br/>
            <br/>
            {movieLinks}
            </>
        ) 
    } else {
        return (
            <h2>No search results</h2>
        );
    }
}

export default SearchLinksPage;
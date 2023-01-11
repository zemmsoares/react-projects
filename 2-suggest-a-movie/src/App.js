import {useEffect} from 'react'
import Movie from './components/Movie.jsx';
import movieData from './movies.json';

function App() {

    function suggest_movie(){
        const data = movieData.movies;
        let movie_size = data.length;
        let random_between = Math.floor(Math.random() * movie_size);
        return(
            <Movie 
                name={data[random_between].name}
                pt_name={data[random_between].pt_name}
                cover={data[random_between].cover}
                yt_link={data[random_between].yt_link}
                imdb_classification={data[random_between].imdb_classification}
                description={data[random_between].description}
                year={data[random_between].year}
                tags={data[random_between].tags}
            />
        )
    }

    useEffect(() => {
        suggest_movie();
        console.log('atualizou');
    },[])

    return (
        <div className="">
            {suggest_movie()}
         </div>
    );
}

export default App;

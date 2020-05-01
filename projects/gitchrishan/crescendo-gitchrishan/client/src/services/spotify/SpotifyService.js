import axios from 'axios'
import Cookies from 'universal-cookie';

const cookies = new Cookies();

class SpotifyService {
    static login(onSuccess, onError) {
        axios.get("https://accounts.spotify.com/authorize")
            .then(onSuccess)
            .catch(onError)
    }

    // static spotifyAuth(token, onSuccess, onError) {
    //     axios.get(`https://accounts.spotify.com/api/${token}/grant_type=client_credentials`)
    //         .then(onSuccess)
    //         .catch(onError)
    // }

    static spotifyCurrent(onSuccess, onError) {
        axios.get(`https://api.spotify.com/v1/me`,
            {
                headers: { 'Authorization': 'Bearer ' + cookies.get('spotifyToken') }
            }
        )
            .then(onSuccess)
            .catch(onError)
    }

    static spotifyCurrentLogin(token, onSuccess, onError) {
        axios.get(`https://api.spotify.com/v1/me`,
            {
                headers: { 'Authorization': 'Bearer ' + token }
            }
        )
            .then(onSuccess)
            .catch(onError)
    }

    static spotifySearch(token, onSuccess, onError) {
        axios.get(`https://api.spotify.com/v1/search`,
            {
                headers: { 'Authorization': 'Bearer ' + cookies.get('spotifyToken') }
            }
        )
            .then(onSuccess)
            .catch(onError)
    }

    static searchArtist(searchQuery, onSuccess, onError) {
        axios.get(`https://api.spotify.com/v1/search?q=${searchQuery}&type=artist&limit=3`,
            {
                headers: { 'Authorization': 'Bearer ' + cookies.get('spotifyToken') }
            }
        )
            .then(onSuccess)
            .catch(onError)
    }

    static searchTrack(searchQuery, onSuccess, onError) {
        axios.get(`https://api.spotify.com/v1/search?q=${searchQuery}&type=track&limit=3`,
            {
                headers: { 'Authorization': 'Bearer ' + cookies.get('spotifyToken') }
            }
        )
            .then(onSuccess)
            .catch(onError)
    }

    static searchAlbum(searchQuery, onSuccess, onError) {
        axios.get(`https://api.spotify.com/v1/search?q=${searchQuery}&type=album&limit=3`,
            {
                headers: { 'Authorization': 'Bearer ' + cookies.get('spotifyToken') }
            }
        )
            .then(onSuccess)
            .catch(onError)
    }

    //CATEGORIES

    static getAllCategories(token, onSuccess, onError) {
        axios.get(`https://api.spotify.com/v1/browse/categories`,
            {
                headers: { 'Authorization': 'Bearer ' + cookies.get('spotifyToken') }
            }
        )
            .then(onSuccess)
            .catch(onError)
    }


}

export default SpotifyService;
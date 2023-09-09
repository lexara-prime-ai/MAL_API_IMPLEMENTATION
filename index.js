/**
 * @param {string} URL - Base url
 * @param {string} SEARCH_QUERY - Search query
 * @param {string} API_KEY - API key
 * @param {HttpClient} http - Http methods | GET
 * @param {Promise<void>} req_GET_SHOW - GET method
 * @param {HTMLElement} posterWrapper - Selector for poster wrapper
 */

// Selectors
const posterWrapper = document.querySelector(".poster-wrapper");

const SEARCH_QUERY = "Attack on titan";

const API_KEY = "XXXX-XXXX-XXXX-XXXX-XXXX";
let URL = `https://myanimelist.p.rapidapi.com/anime/search/${SEARCH_QUERY}`;

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': `${API_KEY}`,
        'X-RapidAPI-Host': 'myanimelist.p.rapidapi.com'
    }
};

class HttpClient {
    async req_GET_SHOW() {
        try {
            const response = await fetch(URL, options);
            const result = await response.json();
            console.log(result);

            for (let show of result) {
                posterWrapper.innerHTML += `
                    <img class="poster" src=${show.picture_url} alt="poster">
                `;
            }


        } catch (error) {
            console.error(`An error occurred: ${error}`);
        }
    }
}

const http = new HttpClient();
http.req_GET_SHOW();

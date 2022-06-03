//this js file is to simplify writing a fetch function for every page

let data = null;

async function getData(path) {
    try {
        const fetched = await fetch('http://127.0.0.1:8000/' + path);
        const response = await fetched.json();
        data = response;
        console.log(data, 1);
    } catch (err) {
        data = "An Error Occured";
    }
}

export function fetching(path) {
    getData(path);
    console.log(data, 2);
    return data;
}

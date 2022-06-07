//this js file is to simplify writing a fetch function for every page

export async function getFetch(path) {
    try {
        const fetched = await fetch('http://127.0.0.1:8000/' + path);
        const response = await fetched.json();
        return response;
    } catch (err) {
        return "An Error Occured";
    }
}

export async function postFetch(path, req) {

    const postObject = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(req)
    }

    console.log(postObject)

    try {
        const fetched = await fetch("http://127.0.0.1:8000/" + path, postObject);
        const response = await fetched.json();
        return response;
    } catch (err) {
        return "An Error Occured";
    }
}


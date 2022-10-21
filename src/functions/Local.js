
const localStorage = () => {

    let pass = window.localStorage.getItem('token');
    console.log(pass)
    return pass

}

export { localStorage }
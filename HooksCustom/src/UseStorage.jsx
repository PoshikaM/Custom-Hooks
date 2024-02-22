function UseStorage(value){

    window.localStorage.setItem("key",value)
    window.sessionStorage.setItem("key",value)

    return null
}

export default UseStorage;
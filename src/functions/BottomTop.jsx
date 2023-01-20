import { ProfileStore } from "../store";


export function BottomTop() {
    return (

        window.scroll({
            top: 0,
            left: 0,
            behavior: "instant"
        })
    )
}

export const CheckParam = (Param) => {
    console.log('runn')
    const send = "/".includes(Param?.pathname) || "/shop".includes(Param?.pathname) 
    ProfileStore.setState({ SearchShow: send })
    // console.log('/'.includes(Param?.pathname), 'huhu1')
    return '/'.includes(Param?.pathname);
}


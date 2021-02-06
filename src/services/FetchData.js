import axios from "axios";


const FetchData = async () =>{
    let url = "https://wdi-nyc-planets-api.herokuapp.com/planets";
    const data = await axios.get(url).then((res)=>{
        console.log(res);
        return res;
    }).catch ((error) => {
        console.log(error);
    })

    return data;
}


export default FetchData;
import axios  from "axios";
var serverURL= 'https://vaibhavgupta5941.pythonanywhere.com'//'http://127.0.0.1:8000 (local host)'
const postData=async(url,body)=>
{ try
    {
        var response=await axios.post(`${serverURL}/api/${url}`,body)
        var result=response.data
        return result
    }
    catch(e)
    {
        return null
    }

}


const getData=async(url)=>
{ try
    {
        var response=await axios.get(`${serverURL}/api/${url}`)
        var result=response.data
        return result
    }
    catch(e)
    {
        return null
    }

}


export {serverURL,postData,getData}
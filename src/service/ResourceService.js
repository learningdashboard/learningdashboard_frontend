import axios from 'axios';

const ResourceService = {
    async getResourcesTop(){
        console.log("called")
        let res = await axios.get("https://jjjnujv7j6.execute-api.eu-west-2.amazonaws.com/dev/resources/top");
        return res.data;
    },

    async getResources(){
        let res = await axios.get("https://jjjnujv7j6.execute-api.eu-west-2.amazonaws.com/dev/resources");
        return res.data;
    },

    async getTags(){
        let res = await axios.get("https://jjjnujv7j6.execute-api.eu-west-2.amazonaws.com/dev/tags");
        return res.data;
    }, 

    async search(arrayOfTags){
        let url = "https://jjjnujv7j6.execute-api.eu-west-2.amazonaws.com/dev/resources/search?";
        for(let i=0;i<arrayOfTags.length;i++){
            console.log(url)
            url=url+"tags="+arrayOfTags[i]+"&"
        }
        console.log(url)
        let res = await axios.get(url)
        console.log("results are:" + JSON.stringify(res.data))
        return res.data
    },
    
    async addResource(resource){
        let res = await axios.post("https://jjjnujv7j6.execute-api.eu-west-2.amazonaws.com/dev/resources", resource);
        return res.data;
    }  
    
};


export default ResourceService;
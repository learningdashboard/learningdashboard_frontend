import axios from 'axios'

const ResourceService = {
    async getResourcesTop(){
        let res = await axios.get("https://jjjnujv7j6.execute-api.eu-west-2.amazonaws.com/dev/resources/top");
        console.log(res.data)
        return res.data;
    },

    async getResources(){
        let res = await axios.get("https://jjjnujv7j6.execute-api.eu-west-2.amazonaws.com/dev/resources");
        return res.data;
    },

    async getTags(){
        let res = await axios.get("https://jjjnujv7j6.execute-api.eu-west-2.amazonaws.com/dev/tags");
        return res.data;
    }  
};

export default ResourceService;
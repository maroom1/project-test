import { Data } from "./data";

export class DataService {
 public dataset:Data[]=[
    {id:"1",
    title:"title1",
    subtitle:"subtitle1",
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi saepe, repudiandae quod dolorum ea ipsam esse quidem dolore odio, cum distinctio recusandae autem, repellendus fugiat sapiente nam illo voluptatum cupiditate?",
    imgUrl:"../../../assets/sample.png",
    showImageText:"Show Image",
    toggleImage:false
},
    {id:'2',
    title:"title2",
    subtitle:"subtitle2",
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi saepe, repudiandae quod dolorum ea ipsam esse quidem dolore odio, cum distinctio recusandae autem, repellendus fugiat sapiente nam illo voluptatum cupiditate?",
    imgUrl:"../../../assets/sample.png",
    showImageText:"Show Image",
    toggleImage:false
},
    {id:'3',
    title:"title3",
    subtitle:"subtitle3",
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi saepe, repudiandae quod dolorum ea ipsam esse quidem dolore odio, cum distinctio recusandae autem, repellendus fugiat sapiente nam illo voluptatum cupiditate? Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi saepe, repudiandae quod dolorum ea ipsam esse quidem dolore odio, cum distinctio recusandae autem, repellendus fugiat sapiente nam illo voluptatum cupiditate",
    imgUrl:"../../../assets/sample.png",
    showImageText:"Show Image",
    toggleImage:false
}
]

getDataset(){
    return this.dataset;
}

}
import axios from "axios";

const getData = async (number)=>{

    /*const user1 = await (await fetch("https://jsonplaceholder.typicode.com/users/1")).json();
    const post1 = await (await fetch("https://jsonplaceholder.typicode.com/posts/1")).json();
    const post2 = await (await fetch("https://jsonplaceholder.typicode.com/posts/2")).json();*/

    const {data: user1 } = await axios("https://jsonplaceholder.typicode.com/users/" + number);
    const {data: post1 } = await axios("https://jsonplaceholder.typicode.com/posts?userId=" + number)
    

    console.log("User1 Yüklendi", user1);
    console.log("Post1 Yüklendi", post1);
    

}

export{
    getData
}
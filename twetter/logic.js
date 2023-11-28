
const postsMange = function(){
    
    const posts = [ {
        text: "First post!",
        id: "p1",
        comments: [
            { id: "c1", text: "First comment on first post!" },
            { id: "c2", text: "Second comment on first post!!" },
            { id: "c3", text: "Third comment on first post!!!" }
        ]
    },
    {
        text: "Aw man, I wanted to be first",
        id: "p2",
        comments: [
            { id: "c4", text: "Don't wory second poster, you'll be first one day." },
            { id: "c5", text: "Yeah, believe in yourself!" },
            { id: "c6", text: "Haha second place what a joke." }
        ]
    }]
    
    let postIdCounter = 3
    let commentIdCounter = 7
   
    const  getPosts   = function(text){
        return posts
    }
   
    const   addPost  = function(text){

        const newPost = {
            id :"p"+ postIdCounter,
            text :text ,
            comments :[]
        }
        posts.push(newPost)
        postIdCounter++
        
    }
   
    const  removePost   = function(postID){
        for (let i in posts){
            if(posts[i].id===postID){
                posts.splice(i,1)
            }

        }
        
        
    }

    const addComment =function(text,postID){
        const newCommment = {  id:"c"+commentIdCounter, text:text }
        
        for (let i in posts){
            if(posts[i].id===postID){
                posts[i].comments.push(newCommment)
                
            }
        }
        commentIdCounter++
        
    }
   
    const removeComment  =function(postId,commentid){
        for (let i in posts){
            if(posts[i].id === postId){
                for(let j in posts[i].comments){
                    if(posts[i].comments[j].id === commentid){
                        posts[i].comments.splice(j,1)
                    }
                }
            }
        }
    }

    return {
        getPosts,
        addPost,
        removePost,
        removeComment ,
        addComment
    }
}



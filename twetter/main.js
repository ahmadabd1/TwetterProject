const tweeter = postsMange()
const res = tweeter.getPosts()

render = renderPosts(res)

const post = function () {
    const np = $("#input").val()
    if(!np){
        alert("Plaese Enter a post!!")
    }else{
    tweeter.addPost(np)
    const ren = tweeter.getPosts()
    renderPosts(ren)
    }
}

$("#posts").on("click", "button", function () {

    const path = $(this).attr('id')
    const dataDeletBtn = $(this).data("btn")
    if (dataDeletBtn === "delete") {
        tweeter.removePost(path.slice(1))
        const ren = tweeter.getPosts()
        renderPosts(ren)
        return
    } else {
        const nc = $("#t" + path).val()
        if(!nc){
            alert("Plaese Enter a comment!!")
        }else{
        tweeter.addComment(nc, path)
        const ren = tweeter.getPosts()
        renderPosts(ren)
        }
    }
})

$("#posts").on("click", "span", function () {

    tweeter.removeComment($(this).data("span"), $(this).parent().attr('id'))
    const ren = tweeter.getPosts()
    renderPosts(ren)

})

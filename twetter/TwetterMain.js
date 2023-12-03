const tweeter = postsMange()
const res = tweeter.getPosts()
const render = renderPosts(res)

const input = $("#input")


const mrnder = function(){
    renderPosts(tweeter.getPosts())
}
const post = function () {
    const postVal = input.val()
    input.val("")
    if(!postVal){
        alert("Plaese Enter a post!!")
    }else{
    tweeter.addPost(postVal)
    mrnder()
    
    }
}

$("#posts").on("click", "button", function () {

    const buttonId = $(this).attr('id')
    const dataDeletBtn = $(this).data("btn")

    if (dataDeletBtn === "delete") {
        tweeter.removePost(buttonId.slice(1))
        mrnder()
        return
    } else {
        const buttonIdVal = $("#t" + buttonId).val()
        if(!buttonIdVal){
            alert("Plaese Enter a comment!!")
        }else{
        tweeter.addComment(buttonIdVal, buttonId)
        mrnder()
        }
    }
})

$("#posts").on("click", "span", function () {

    tweeter.removeComment($(this).data("span"), $(this).parent().attr('id'))
    mrnder()

})


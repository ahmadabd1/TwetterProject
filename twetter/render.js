
const renderPosts = function (posts) {

   $("#posts").empty()
   $("#posts").addClass("posts")
   for (let p in posts) {

      const newElemntPost = "<div  class= post id=" + posts[p].id + ">" + posts[p].text + "</div>"
      $("#" + posts[p].id).css("font-weight", "bold")
      $("#posts").append(newElemntPost)

      for (let pc in posts[p].comments) {
         const deletX = "<span class=delete-comment data-span= " + posts[p].id + " >x</span>"
         const newElemntComment = "<div class= ></div><div class = comments id=" + posts[p].comments[pc].id + ">" + deletX + " " + posts[p].comments[pc].text + "</div>"
         $("#" + posts[p].id).append(newElemntComment)
      }
      const newtext = "<input id =t" + posts[p].id + " type=text placeholder= comment? >"
      const newbtn = "<button class = commentbtn id =" + posts[p].id + ">comment</button>"
      $("#" + posts[p].id).append("<div></div>")
      $("#" + posts[p].id).append(newtext)
      $("#" + posts[p].id).append(newbtn)
      const delBtn = "<br><br><button class= delete id = delete" + posts[p].id + " data-btn=delete> Delete Post </button>"
      $("#" + posts[p].id).append(delBtn)

   }


}

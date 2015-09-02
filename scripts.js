function addComment()
{
    var user_name = document.getElementById("name");
    var comment = document.getElementById("comment");
    var comments = document.getElementById("comments");
    var div_comment = document.createElement('div');
    div_comment.className = "comment";
    div_comment.innerHTML = "<h3>" + user_name.value + "</h3><p>" + comment.value + "</p>";
    comments.appendChild(div_comment);
}
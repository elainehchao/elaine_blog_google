const MIN_POSTS = 1;
const NUM_POSTS = 2;

var currentPost = NUM_POSTS;

function getPostName(num) {
    return "posts/post" + num + ".html .content_preview";
}

function loadPost(num) {
    console.log(getPostName(num));
    $("#blog_content").load(getPostName(num));
    currentPost = num;
    $(".read_more").show();
    validatePrevNextButtons();
};

function loadMain() {
    loadPost(NUM_POSTS);
}

function loadCurrent() {
    loadPost(currentPost);
}

function loadPrevious() {
    if (currentPost > 1) {
        currentPost = currentPost - 1;
        loadPost(currentPost);
    }
}

function loadNext() {
    if (currentPost < NUM_POSTS) {
        currentPost = currentPost + 1;
        loadPost(currentPost);
    }
}

function validatePrevNextButtons() {
    if (currentPost < NUM_POSTS) {
        $("#next_post_button").show();
    } else {
        $("#next_post_button").hide();
    }

    if (currentPost > MIN_POSTS) {
        $("#previous_post_button").show();
    } else {
        $("#previous_post_button").hide();
    }
}

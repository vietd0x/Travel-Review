function printBlog() {
    document.getElementById('blog-post').innerHTML = "";
    let data_aos = ['fade-right', 'fade-in', 'fade-left'];
    let j = 0;
    for (let i = 0; i < post.length; i++) {
        if (j == 3)
            j = 0;
        document.getElementById('blog-post').insertAdjacentHTML('beforeend', `<div class="blog-content" data-aos=${data_aos[j++]} data-aos-delay="200">
        <img src= ${post[i].img}>
        <div class="blog-title">
            <h3>${post[i].name}</h3>
            <button class="btn btn-blog" onclick="displayContentByIndex(${i})">Learn more</button>
        </div>
        </div>`);
    }
}
printBlog();


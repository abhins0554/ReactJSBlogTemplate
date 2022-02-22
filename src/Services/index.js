const _save_data_navigate = async (data) => {

    localStorage.setItem('author',data.author);
    localStorage.setItem('content',data.content);
    localStorage.setItem('date',data.date);
    localStorage.setItem('imageUrl',data.imageUrl);
    localStorage.setItem('readMoreUrl',data.readMoreUrl);
    localStorage.setItem('time',data.time);
    localStorage.setItem('title',data.title);
    window.location.href=`/blogs/${data.title}`;
}

export default {_save_data_navigate};
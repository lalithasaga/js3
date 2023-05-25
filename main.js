const posts = [
    { title: 'Post One', body: 'This is post one' },
    { title: 'Post Two', body: 'This is post two' }
  ];
  
  function getPosts() {
    setTimeout(() => {
      let output = '';
      posts.forEach((post, index) => {
        output += `<li>${post.title}</li>`;
      });
      document.body.innerHTML = output;
    }, 1000);
  }
  
  function createPost(post) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        posts.push(post);
        const error = false; // Set error to false for successful post creation
        if (!error) {
          resolve();
        } else {
          reject('Error: Something went wrong');
        }
      }, 2000);
    });
  }
  
  function deleteLastPost() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (posts.length > 0) {
          posts.pop();
          resolve();
        } else {
          reject('Error: No posts to delete');
        }
      }, 1000);
    });
  }
  
  function updateLastUserActivityTime() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const lastActivityTime = new Date().toLocaleTimeString();
        if (lastActivityTime) {
          resolve(lastActivityTime);
        } else {
          reject('Error: Failed to update last activity time');
        }
      }, 1000);
    });
  }
  
  createPost({ title: 'Post Three', body: 'This is post three' })
    .then(() => updateLastUserActivityTime())
    .then((lastActivityTime) => {
      console.log('Posts created:');
      getPosts();
      console.log('Last activity time:', lastActivityTime);
      return deleteLastPost();
    })
    .then(() => {
      console.log('Posts after deletion:');
      getPosts();
    })
    .catch((err) => console.log(err));
  
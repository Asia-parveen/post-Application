document.getElementById('addPostButton').addEventListener('click', function() {
    let title = document.getElementById('postTitle').value;
    let content = document.getElementById('postContent').value;
    let color = document.getElementById('postColor').value;

    if (title === '' || content === '') {
        alert('Please fill in both the title and content fields');
        return;
    }

    // Create a new post element
    const post = document.createElement('div');
    post.className = 'post';
    post.style.backgroundColor = color;  // Apply the selected background color

    const postTitle = document.createElement('h2');
    postTitle.innerText = title;

    const postContent = document.createElement('p');
    postContent.innerText = content;

    const editButton = document.createElement('button');
    editButton.innerText = 'Edit';
    editButton.addEventListener('click', function() {
        // Load the existing post's title, content, and color into the input fields for editing
        document.getElementById('postTitle').value = postTitle.innerText;
        document.getElementById('postContent').value = postContent.innerText;
        document.getElementById('postColor').value = post.style.backgroundColor;

        // Remove the post from the display so it can be replaced by the edited version
        post.remove();
    });

    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.addEventListener('click', function() {
        // Remove the post from the display
        post.remove();
    });

    // Append the title, content, edit button, and delete button to the post element
    post.appendChild(postTitle);
    post.appendChild(postContent);
    post.appendChild(editButton);
    post.appendChild(deleteButton);

    // Append the post element to the posts container
    document.getElementById('postsContainer').appendChild(post);

    // Clear the input fields after adding the post
    document.getElementById('postTitle').value = '';
    document.getElementById('postContent').value = '';
    document.getElementById('postColor').value = '#ffffff';
});



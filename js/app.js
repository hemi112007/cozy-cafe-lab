//The cafe’s title is a bit too long. Select the #main-title id element and change the text to “Welcome to the Cozy Cafe”. Let’s also improve our page’s appearance by changing the text-align to center on the title as well.


const titleElement = document.querySelector('#main-title');

titleElement.textContent = 'Welcome to the Cozy Cafe';

titleElement.style.textAlign = 'center';

//Select the body element and change the background color to a soothing pastel shade of your choice. (If you can’t think of a color, bisque, lightsteelblue, and pink are good choices.)

const bodyElement = document.querySelector('body')

bodyElement.style.backgroundColor = 'lightsteelblue'

//Select the <p> element which is meant to hold the quote of the day. Update it’s content so that it displays a quote of your choice (or use this classic: “Life happens, coffee helps.”).

const quoteElement = document.querySelector('p')

quoteElement.textContent = 'Life happens, coffee helps.'

//Select all elements with the class highlight-title and change their font-style to italic. Remember, you might need to iterate through a collection of elements.
const titlesElements = document.querySelectorAll('.highlight-title');

titlesElements.forEach((element) => {
    element.style.fontStyle = 'italic';
});


//Let’s add a new item to the Past Menu Items list. Create a new <li> element, set the text to “Rose Cake”, and append it to the list.

const newMenuItem = document.createElement('li')
newMenuItem.textContent='Rose Cake'
const pastMenuItemsList = document.getElementById('past-menu-items')
pastMenuItemsList.appendChild(newMenuItem)


//Select the list of Cafe Specialties and add a list item. Be sure to add content to your newly created <li></li> tags (maybe Karak Tea is on offer now?).

const specialtiesList = document.querySelector('#cafe-specialties');
const newSpecialty = document.createElement('li');
newSpecialty.textContent = 'Karak Tea';
specialtiesList.appendChild(newSpecialty);

//Create a new blog post for a recent cafe event. You will need to create a new <div> element with the class .blog-post, a new <h3> with a relevant event title (e.g., “Karak Tea Tasting Event”), and a new <p> with some text describing the event. Make sure the new post matches the style and structure of the other blog posts. Think carefully about the order of element creation and appending.

const blogContainer = document.querySelector('#blogs');

if (blogContainer) {
    const newBlogPost = document.createElement('div');
    newBlogPost.classList.add('blog-post');
const eventTitle = document.createElement('h3');
    eventTitle.textContent = 'Karak Tea Tasting Event';
 const eventDescription = document.createElement('p');
 eventDescription.textContent = 'Join us for a delightful Karak Tea tasting experience at the cafe! Discover the rich flavors and learn the secrets behind making the perfect cup of Karak Tea.';
 newBlogPost.appendChild(eventTitle);
newBlogPost.appendChild(eventDescription);
blogContainer.appendChild(newBlogPost);
} else {
    console.error('Blog container not found');
}

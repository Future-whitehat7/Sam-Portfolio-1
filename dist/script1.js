//  creating a variable for the tag Element. querySelectorAll

const tagsEl = document.querySelectorAll('.tag');
const projectsEl = document.querySelectorAll('.project');

tagsEl.forEach(tagEl => {
    tagEl.addEventListener('click', () => {
        const tag = tagEl.getAttribute('data-tag');
        // here I'm going to filter based on the tag.

        clearTagsActiveClass();

          //this code is for when the tags are active and non-active
    tagEl.classList.add('text-yellow-500', 'bg-yellow-700');
    tagEl.classList.remove('text-yellow-700', 'bg-yellow-500');

        projectsEl.forEach(project => {
            const projectTags = project.getAttribute('data-tags').split(',');
            let show = false;

            // looping thru project Tag, display 
                projectTags.forEach(projectTag => {
                    if( tag === projectTag) {
                        show = true;  
                    }
                });


    // filter based on Tag, 
            if (tag === 'all' || show) {
                    project.classList.remove('hidden');
            }else {
                    project.classList.add('hidden');
            }
        });
    });
});

function clearTagsActiveClass() {
  //this code is for when the tags are active and non-active
        tagsEl.forEach(tagEl => {
                tagEl.classList.remove('text-indigo-900', 'bg-yellow-700');
                tagEl.classList.add('text-indigo-900', 'bg-yellow-700');
        });
}

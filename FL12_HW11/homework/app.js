const structure = [
    {
      'folder': true,
      'title': 'Films',
      'children': [
        {
          'title': 'Iron Man.avi'
        },
        {
          'folder': true,
          'title': 'Fantasy',
          'children': [
            {
              'title': 'The Lord of the Rings.avi'
            },
            {
              'folder': true,
              'title': 'New folder 1',
              'children': false
            }
          ]
        }
      ]
    },
    {
      'folder': true,
      'title': 'Documents',
      'children': [
        {
          'folder': true,
          'title': 'EPAM Homework answers',
          'children': null
        }
      ]
    }
];

const rootNode = document.getElementById('root');

function createTree(structure) {
  let rootElem = document.createElement('ul');

  structure.forEach(el => {
    let element = document.createElement('li');
    let icon = document.createElement('i');
    let title = document.createElement('p');

    element.classList.add('element');
    icon.classList.add('material-icons');
    title.textContent = el.title;
    element.appendChild(icon);
    element.appendChild(title);

    if (el.folder) {
      icon.innerText = 'folder';
      icon.classList.add('folder');
      element.classList.add('close');
      title.classList.add('folders');

      if (!el.children) {
        let emptyTree = document.createElement('ul');
        let emptyElem = document.createElement('li');
        let emptyTitle = document.createElement('p');

        emptyTitle.innerText = 'Folder is Empty';
        emptyElem.appendChild(emptyTitle);
        emptyTitle.classList.add('empty');
        emptyTree.appendChild(emptyElem);
        element.appendChild(emptyTree);
      } else {
        let child = createTree(el.children);
        element.appendChild(child);
      }

      element.addEventListener('click', function() {
        if (event.target.getAttribute('class') === 'material-icons folder' ||
        event.target.getAttribute('class') === 'folders') {
          if (icon.innerText === 'folder') {
            icon.innerText = 'folder_open';
            element.classList.remove('close');
          } else {
            icon.innerText = 'folder';
            element.classList.add('close');
          }
        }
        console.log(this,event.target);
        event.stopPropagation();
      });

    } else {
      icon.innerText = 'insert_drive_file';
      icon.classList.add('file');
      element.appendChild(icon);
      element.appendChild(title);
    }

    rootElem.appendChild(element);
  });

  return rootElem;
}

rootNode.appendChild(createTree(structure));

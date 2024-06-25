const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click',() => {

    if(input.value != ''){
        const li = document.createElement('li');
        const deleteBtn = document.createElement('button');
        li.textContent = input.value;
        deleteBtn.textContent = '❌';
        li.append(deleteBtn);
        list.append(li);

        deleteBtn.addEventListener('click',() => {
            list.removeChild(li);

        })

        input.focus();
        input.value='';

    }else{
        alert('Please enter your favorite chapter on the text field');
        input.focus();
    }
});
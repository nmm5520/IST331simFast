Let keys  = document.querySelectorAll('.keyboard_wrapper>.key span');
keyPad    = document.querySelector('keyboard_wrapper>.key .row span')
display   = document.querySelector('keyboard_wrapper>.display')

if keys && keyPad && display)
{
    keys.forEach(key=>{
        console.log(key);
    });

}
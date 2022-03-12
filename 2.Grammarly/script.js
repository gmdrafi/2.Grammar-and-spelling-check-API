let input=document.querySelector('input')
let textarea=document.querySelector('textarea')
input.addEventListener('change',()=>{
    let files=input.files;
    if(files.length==0)
    return;
    const file=files[0]


    //reading the file


    let reader=new FileReader()
    reader.onload=(e)=>{
        const file=e.target.result;
        const lines=file.split(/\r\n|\n/)
        textarea.value=lines.join('\n')

        //fetching of the Api key

       
        fetch('https://api.textgears.com/spelling?key=N9feJhPKhKWhciqT'=+textarea.value)
        .then(Response=>Response.json())

    }

    //Displaying the error

    reader.onerror=(e)=>alert(o.target.error.name)
    reader.readAsText(file)
})

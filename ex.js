// Q. Write a node js program to clear the clutter inside of a directory and organise the contents of a directory to diffrent folders.

//ex: 
// 1. .pdf
// 2. .png
// 3. .jpeg
// 4. .html
// 5. .jpg
// 6. .svg
// 7. .txt
// 8. .exe
// 9. .zip

// Make seperate folders for each extension type and put all the related files inside it.
// Make sure not to include javascript and json files as it could create problems for.
// Also handle files without any extension to "others" folder  
// Skip hidden files like .gitignore and .env
// Print all files moved 
// At last print directory organised successfully

// Node js Code:

const fs=require("fs")
const path=require("path")

const basepath=__dirname //this is the basepath of all files in which i am working

const files= fs.readdirSync(basepath) //array of files

for(const item of files){
    if(fs.statSync(path.join(basepath,item)).isDirectory()) //check if its a directory then skip it
    {
        continue
    }
    // Skip hidden files like .gitignore, .env
    if(item.startsWith("."))
    {
        continue
    }
    console.log("The files cluttered are: ",item)
    let arr=item.split(".")
    let ext=arr[arr.length-1]
    if(arr.length<=1 || ext=="") //if length is <=1 means it could be a file without any extesion ex: README so put it in others
    {
        ext="others"
    }
    if(ext!="js" && ext!="json") //ignore json and js files as it might create problem and errors for the js file i am working in
    {
        if(fs.existsSync(path.join(basepath,ext))) //if the extension folder already exists just add it to the folder using renaming the file and appending name of folder before it
        {
            fs.renameSync(path.join(basepath,item),path.join(basepath,ext,item))
        }
        else //if the folder doesnt exists create the folder and add the file to it
        {
            fs.mkdirSync(path.join(basepath,ext)) //create folder
            fs.renameSync(path.join(basepath,item),path.join(basepath,ext,item)) //add the file
        }
        console.log(`Moved ${item} to ${ext}`); //print which file is moved to which folder
    }
}

console.log("Directory organised successfully!");
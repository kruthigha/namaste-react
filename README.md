# Namaste React
# git init  Initialized empty Git repository in C:/Namaste React/.git/
# git branch -M main
# git add.
# git commit -m "episode-01"
# git remote add origin "https://github.com/kruthigha/namaste-react.git"
# git push -u main
# git pull "https://github.com/kruthigha/namaste-react.git"

# parcel is a beast
# dev builds, local server, HMR=> hot module replacement, File watching algorithm written in c++, caching- Faster builds, Image optimization most xpensive tg in web apps is to load img from ineternet, minifies ur file, Bundling.Compressing deletes all the white spaces, consistent hashing, code splitting, differnetial bundling-supports old browser,good in err haandling

#Good_Practices
SCREAMING_SNAKE_CASE
snake_case
camel_Case
/* UI layout
*Header
  -logo
  -nav items(home,about,cart)
*Body
   -search
   -restaurantContainer
     --restoCard
*Footer
 -thanking quote
 -address & contact no
 -copyrights

*/

//JS in HTML inside body tag
<script>
        const heading = document.createElement("h1");
        heading.innerHTML="Hello world! from JS";
        const root = document.getElementById("root")
        root.appendChild(heading);
        
    </script> 
// not recommended to use cdn inside body tag
    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script> 

//without keys(not acceptable)<<<index as keys(Bad practice)what_if_order_changes<<<<<use keys witn unique id(best practice)
// shimmer effect  => better UX experience, conditional rendering
//optional chaining
 const {resData} = props
 const{name,cuisines,avgRating,costForTwo,sla,cloudinaryImageId}=resData?.info;


 #React HOOKS
 Normal JS utility functions written by FB Developers
 over 99% mostly use these two hooks in projects, and the rest hooks are just 1%
  - useState() 80% // local state variable => super powerful variable
  -useEffect() 19%

=>useState
    const[res,setRes]= useState(Chennai);
    //Behind the scenes
    const arr=useState(Chennai);
    const[res,setRes]= arr;
    const res =arr[0];
    const setRes = arr[1];
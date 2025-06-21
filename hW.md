1. hello world using HTML 
2. hello world using js 
3. get React to project using CDN (Note : React is just JS library)
4. what is CDN ? , what is crossorigin used in that CDN link ?  ==> this CDN link has the code of react.js
5. why there are 2 files of that link (react and react-dom)?? 1. code of react(core react) 2. react dom for modifying dom object and ops 

6. Hello world using React ==> using react and react dom
7. npm init ==> to configure our project ==> package.json ==> configuration file for npm ==> tells about all dependicies 
8. Parcel is bundler ==> gives our application superpowers
   # does an dev build 
   # creates a server and hosts our app
   # does HMR => hot module render
   # uses file watching algorithm -c++
   # does caching => faster rendering
   
   # for doing prod build ==> optimized and super efficient build ==> npm parcel build index.html
   # whatever our files are there (js,css,html) ==> will be minnified and stored in dist ==> which will be used to host (serve)
   # parcel-cache and dist will be generated with every-build
   # parcel-cache basically is cache memory of transformed file-ouput,dependency graph relation , parsed files .... avoid reparsing and reanalysing during build 


9. "^" => upgrade to ,minor and patch version , "~" ==> major version upgrade
10. package-lock.json ?? ==> package-lock as name suggests keep tracks of exact version of dependencies , also maintains hash of dependencies
11. node-modules is an result of transitive dependencies
12. diff bw npm and npx ?  ==> chatgpt
13. JSX is not an part of React , it wad syntax developed to make life easy
14. JSX "is not HTML inside JS" , it is HTML-XML like syntax , 
15. although JSX is not valid js how is the code rendered on browser ==> parcel transforms these jsx to browser understable code (using babel)
16. /React Element (which is nothing but javascript object)==> on rendering ==> HTML element
// jsx heading is also an react element , this conversion is done by babel , which converts jsx to js code (this js code return react element which is javascript object)


{
/*
*Header
 -Logo
 -About
 -home
 -cart
*Body
 -Search
 -restaurant Container
  -restaurant cards
    -restaurant name , ETA , cuisine
*Footer
 -copyright
 -Links
 -Address etc.   
*/
}

17. bundler replaces the code of React,ReactDOM in the file
18. Two ways of exporting 
     -- one is export default , import normally using "<file_exported>" from "<PATH>"
     -- export using named constants , import using {<file_exported>} from "<PATH>"


19. Study about .filter, .map, .reduce in js 
20. create an funcytionality of top rated restaurants button to view restaurants with rating >4.4 --done
21. use an mock reslist initially for this operation to check if its rendered --done 
22. Also use Hooks for this operation and render it --done
23. Explain reconcilation,diff algorithm, why react is fast,virtual DOM ?    --done

24. Our UI Need to interact with many API and outside world 
    => How will it render the UX ?
       loads ==>render ==> API calls ==> re-render 
        => better UX 
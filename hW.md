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
25. useEffect is used for this   
26. Add some features like search and top rated restaurants 
27. used live Swiggy API  
28. useEffect  with [] (empty array )==> called only on intial render , without it is called after every render   
    ==> if something is inside [<something>] , than eveyrtime that <something> is chnaged useEffect is called 



29. Create multiple routes  ==> install package react router dom 
30. use createBroswerRouter and RouterProvider , useRouteError()
“<RouterProvider> enables routing in our application by providing the router configuration to React Router.”
31. use children paths using outlet and compare performance 
32. used live Swiggy API to get MenuINfo component 



33. Class Based component for About Page 
34. About Page will contain User cards (Team Members)
35. extends React.componet ==> our class will extend this
36. why do we use super(props) inside the constructor
37. this.props.property ==> why do we use this ??
38. React class Component lifecycle Methods ==> Mounting {Constructor() is called first , render () , ComponentDidMount()}
39. whenver there are multiple children for a parent 
    ==> React optimizes itself 
      ==> it batches the Render phase and executes it first , followed by commit phase 
        ==> so that DOM updates (which is costly) is batched together and executed at once 
        Please refer Doc to understand this
40. Added custom Hook for Fetching Data in MenuInfo Component 
   

# Feature
41. Create an Hook which shows online status and is displayed on Header and in Pages which use Live API => Done 

# Styling our APP
42. One way is to add css using className in jsx and creating an .css file 
43. using Sass , Using Styled components => used in Uber and lot of other companies

# Using frameworks and component libraries
44. eg : MaterialUI , ChakraUI, bootstrap 

# Will use Tailwind CSS for this project :
45. how to install tailwind CSS

#feature
46. Saw about HOC and how to use it 
47. Built an accordian using uncrontrolled component 
48. lifted up state ==> to make it such that if one accordian is expanded other is closed (Lifting up state)
    ==> done the above by sending reference of the state variable changing func() to children
49. How to add collapse feature with the above feature    


49. Prop Drilling and how to avoid it:(Pending)
    ==>    ContextAPI ==> like an global storage 
    ==> use this to create an Fetaure of displaying loggedIn Username 
    ==> use it also in Class based Component hint :UseConetxt.consumer
    ==> try modfying this using useContext.provider 
    ==> change it live using an input box in body component and (hint : pass setfunc() in context also)


# Redux toolkit for creating and managing store (alternate to useContext)

50. Note : Redux is not Mandatory ,use it only when required 
51. Redux is not an part of react , redux lib is imported using npm 
52. Redux offers state Management , can be used with many js , heavily used with react 
53. Find diff bw react-redux , redux-toolkit, and vanilla redux and redux 
54. redux toolkit is latest way of writing redux 


# Feature to be developed using RTK 
-install @reduxjs/toolkit and react-redux
-build our store
-connect our store to app
-slice
-dispatch
-selector
-addItem action , clearCart action , how to read this store ,
-Develop and Feature to Remove items from the cart ==> use HOC , and RTK reducers for this 


# Testing from Developer POV 
-Unit testing 
-Integration Testing
-End to end testing

-we will be using React Testing library , which had DOM testing library as its basis
-react testing library uses jest BTS 
- jest stands for javascript testing framework

-install React testing library 
-install jest 
-install babel dependencies for jest 
-configure jest to use babel and overide transpilation of babel (By creating .parcelrc )

jest configuration:

commands:
npm init jest@latest ==> creates an configuration file for jest 
// we need to explicitly install jsdom 
jsdom => we dont run testcases on the server or on chrome ... for this we need an env , jsdom provides this env 

we need to install @... package ['@babel/preset-react',{runtime :"automatic"}], // will help us to write jsx syntax in the test file inside render()
toBeInTheDocument(); // @testing-library/jest-dom 
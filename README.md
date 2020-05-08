NEVERLAND
 Project documentations (Group 6)

 NEVERLAND 
 —	An interactive website for exploring the collections of the Art Institute of Chicago. 

 Project Description 
 This is an interactive website for exploring the collections of the Art Institute of Chicago. Aiming to attract everyone, especially growing kids, appreciating artworks, writings in their growing up period which is the best time for accepting new concepts and enhancing their feeling sense for art. 
 Some functions will be developed as follows: 
 Display introduction text , images and other interesting features of the most favourite exhibition.
 Users can sign up accounts with their emails and login to their personal page.
 Users can star their favourite exhibitions.
 Users can search specific exhibitions by offering some information, e.g. category, year,  name, nationality. 
 Main page for randomly displaying collections with their descriptions.  
 Secondary page for randomly displaying artists with their representatives.  
 Some interactive features for buttons, scrolling would be innovated later.  

 Official website of the art Institute of Chicago : www.artic.edu/collection

 Framework(s)  
 Mainly React, Redux, Firebase, Node.js will be used. React is for building functional front end DOM components, while Redux is for storing and managing the application state and necessary data on which the components are dependent. As for web hosting, we deploy our pages on firebase so as to enable internet access. Also, we run our custom API service by employing Node.js.  API 
 API: https://aggregator-data.artic.edu/docs/fields#collections 
 Data from API and our app specifically  
 Those information about collections and writings are coming from APIs. Users account informations, favorite items list are our app specific.  

 Sprints records(Agile development)
 Sprint#1
 3.16 -> 3.29
 We start achieving structure and functionalities of Home page without database involving, and user research.
 Construct plans for our assigned part of project
 Keep everyone on the same page. 
 Setup react, node, redux…
 Primary and secondary research for UX

 Sprint#2
 4.07 -> 4.12 
 Retrospective meeting Date: 4.12. 19:00 Tool: Zoom
 产品组：
 -	阐明产品核心价值，想要给这个世界传递什么概念 Document the core value of this product, and what concept we want to deliver to the world.
 -	完成产品流程图 Finish product flow diagram.
 -	完成产品可交互高保真原型 Finish interactive high-fi prototype.
 -	整理对每一页原型设计的思考 Our thinking of each section.
 -	梳理产品功能框架 
 -	与开发组共同写一个产品的UML(optiona/ Draw a product UML for development using.
 -	思考对UI及交互性实现的一个预期 
 开发组：
 -	学习Node.js, firebase等知识
 -	设计数据库表之间的关系
 -	搭建数据库用来存储用户profile信息，当日推荐的藏品

 Group meeting record

 4,April  (Lin and Shujian)

 User flow: 欢迎界面（以童话形式展开金银岛的探索之旅）->展示藏品（提供沉浸式体验）->详细页面（期中点击金银岛 icon -> 金银岛地图)
 概念: 金银岛是一个开放的空间，而不是私人的仓库
 	-> 因为金银岛永远在那里，所以不论是游客还是会员都有一份金银岛的地图
 	-> 对于用户的收藏夹，是一份金银岛的地图，收藏过的东西会被点亮代表收藏过。
 只有contribute/build了目前的展品，才有了通往金银岛的许可（一种神秘的连接）
 概念： 我们鼓励用户对知识开放性的思考，看到了一些新的东西，才可以添加进自己的知识库，是一个贡献的行为，而不是一个反省的行为（公知体系）。 所以，我们并不鼓励用户沉浸在自己过去收藏的东西，沉浸在自己的密闭空间，而鼓励用户被启迪，并贡献出自己的想法。
 	->用户只有在收藏展品或者是赞赏他人的藏品库中的藏品时，才允许用户查看自己在金银岛上的记录本，并进行记录。
 	-> “哥伦布的笔记本”

 7,April (All members) 
 -	Keep everyone on the same page
 -	Set up a one 5 days sprint (4.07 -> 4.12 )User Experience  
 User interfaces development

 We will do programming for some interactive features in processing.js.
 Features like animation on hovering state, or animations during any components shifting etc , etc.
 Interactive features can refer to the website(http://species-in-pieces.com/#) for thoughts. 
 The color, font, themes of our user interfaces can be designed related to the museum itself or in a more innovative idea.
 The front-end structures will be discussed with our back-end developer.
 Server side development

 (More details about what features it might have on each page)Database management

 (Some database tables and relations in them, like user profile informations, artwork informations etc, etc )

 prototype:
 figma:https://www.figma.com/proto/wsHZSO7pfOsVrOIF8He4IB/online-museum?node-id=82%3A3&scaling=min-zoom





This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

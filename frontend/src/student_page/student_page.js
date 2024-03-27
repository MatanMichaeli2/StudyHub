import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Menu from './components/Menu';
import HomePage from './pages/HomePage';
import CreateStudyGroupPage from './pages/CreateStudyGroupPage';
import ExplorerPage from './pages/ExplorerPage';
import ChatsPage from './pages/ChatsPage';

function StudentPage() {
  return (
    <Router>
      <div>
        <Header />
        <Menu />
        <Route path="/" exact component={HomePage} />
        <Route path="/create-study-group" component={CreateStudyGroupPage} />
        <Route path="/explorer" component={ExplorerPage} />
        <Route path="/chats" component={ChatsPage} />
      </div>
    </Router>
  );
}

export default StudentPage;


// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Header from './components/Header';
// import Menu from './components/Menu';
// import HomePage from './pages/HomePage';
// import CreateStudyGroupPage from './pages/CreateStudyGroupPage';
// import ExplorerPage from './pages/ExplorerPage';
// import ChatsPage from './pages/ChatsPage';

// function StudentPage() {
//   return (
//     <Router>
//       <div>
//         <Header />
//         <Menu />
//         <Switch>
//           <Route path="/" exact component={HomePage} />
//           <Route path="/create-study-group" component={CreateStudyGroupPage} />
//           <Route path="/explorer" component={ExplorerPage} />
//           <Route path="/chats" component={ChatsPage} />
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// export default StudentPage;

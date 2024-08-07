
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

import UserDashboard from "./UserDashboard";
import LoginUser from "./LoginUser";
import Landingpage from "./Landingpage";
import Academic from "./Academic";
import Technical from "./Technical";
import Professional from "./Professional";
import SignIn from "./SignIn";
import UserRegistration from "./UserRegistration";


import UserAcademic from "./UserAcademic";
import UserTechnical from "./UserTechnical";
import UserProfessional from "./UserProfessional";

import UserLiveClasses from "./UserLiveClasses"; 
import FileList from "./FileList";
import UserTask from "./UserTask";
import Courses from "./Courses";
import Discussion from "./Discussion";
import UserSetting from "./UserSetting";
import UserProfile from "./UserProfile";
import UserNotification from "./UserNotification";
import Help from "./Help";
import UserViewReports from "./UserViewReports";
import Mytutor from "./Mytutor";
import UserAttendence from "./UserAttendence";
import OtherCourses from "./OtherCourses";
import Enroll from "./Enroll";




import TutorDashboard from "./TutorDashboard";
import LiveClass from "./LiveClass";
import Task from "./Task";
import MyDiscussion from "./MyDiscussion";
import StudyMaterials from "./StudyMaterials";
import TutorSetting from "./TutorSetting";
import TutorProfile from "./TutorProfile";
import TutorHelp from "./TutorHelp";
import CreateReport from "./CreateReport";
import AdminDashboard from "./AdminDashboard";
import AddNewTutor from "./AddNewTutor";
import AddNewCourse from "./AddNewCourse";
import Announcement from "./Announcement";
import Settings from "./Settings";
import UserManagement from "./UserManagement";
import AcadamicUserList from "./AcadamicUserList";
import Queries from "./Queries";

import ProfessionalUserList from "./ProfessionalUserList";
import ViewCourses from "./ViewCourses";
import Tutors from "./Tutors";
import AcadamicTutorList from "./AcadamicTutorList";
import TechnicalTutorList from "./TechnicalTutorList";
import ProfessionalTutorList from "./ProfessionalTutorList";
import HelpDeskComponent from "./HelpDeskComponent";

import ViewReports from "./ViewReports";
import UserViewAttendence from "./UserViewAttendence";
import CoursePage from "./CoursePage";
import Dropdown from "./Dropdown";
import AddNewAdmin from "./AddNewAdmin";
import Payment from "./Payment";
import PaymentSubmit from "./PaymentSubmit";
import SuccessPage from "./SuccessPage";
import ForgotPassword from "./ForgotPassword";

import Notifications from "./Notifications";
import LoginTutor from "./LoginTutor";
import LoginAdmin from "./LoginAdmin";
import UserList from "./UserList";
import Notification from "./Notification";
import PaymentDetails from "./PaymentDetails";
import TutorList from "./TutorList";
import OtpValidation from "./OtpValidation";
import OtpValidationOne from "./OtpValidationOne";
import OtpValidationTwo from "./OtpValidationTwo";
import MusicUserList from "./MusicUserList";
import FitnessUserList from "./FitnessUserList";
import CookingUserList from "./CookingUserList";
import YogaUserList from "./YogaUserList";
import AWSUserList from "./AWSUserList";
import PythonUserList from "./PythonUserList";
import SQLUserList from "./SQLUserList";
import CollegeUserList from "./CollegeUserList";
import SchoolUserList from "./SchoolUserList";
import JavaUserList from "./JavaUserList";
import FitnessTutorList from "./FitnessTutorList";
import CookingTutorList from "./CookingTutorList";
import YogaTutorList from "./YogaTutorList";
import MusicTutorList from "./MusicTutorList";
import AWSTutorList from "./AWSTutorList";
import PythonTutorList from "./PythonTutorLIst";
import SQLTutorList from "./SQLTutorList";
import SchoolTutorList from "./SchoolTutorList";
import JavaTutorList from "./JavaTutorList";
import CourseForm from "./CourseForm";
import SomeComponent from "./someComponent";
import AdminComponent from "./AdminComponent";
import Certificate from "./Certificate";
import ViewFile from "./ViewFile";
import ViewVideo from "./ViewVideo";
import CreateFile from "./CreateFile";
import CreateVideo from "./CreateVideo";
import AdminLandingPage from "./AdminLandingPage";
import Quiz from "./Quiz";
import Memo from "./Memo";

import PaymentHistory  from "./PaymentHistory";
import TestResult from "./TestResult";
import UsersCount from "./UsersCount";
import AdminCourses from "./AdminCourses";
import PieChartPage from "./PieChartPage";
import Adminnotifications from "./Adminnotifications";
import Attendance from "./Attendance";
import Pay from "./Pay";
import TestDetailsModal from "./TestDetailsModal";


import CashTransactionDetails from "./CashTransactionDetails";

import PayOne from "./PayOne";

import Get from "./Get";


function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    if (user) {
      setCurrentUser(user);
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = (user) => {
    setIsLoggedIn(true);
    setCurrentUser(user);
    localStorage.setItem("currentUser", JSON.stringify(user));
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
    localStorage.removeItem("currentUser");
  };

  return (
    <Router>
      <Routes>
       
        <Route path="/" element={<Landingpage />} />
        <Route path="/UserRegistration" element={<UserRegistration />} />
        <Route path="/SignIn" element={<SignIn />} />

        <Route path="/UserAcademic" element={<UserAcademic />} />
        <Route path="UserTechnical" element={<UserTechnical />} />
        <Route path="/UserProfessional" element={<UserProfessional />} />


      
        {isLoggedIn && (
          <>
            <Route path="/UserDashboard" element={<UserDashboard currentUser={currentUser} handleLogout={handleLogout} />} />
            <Route path="/UserLiveclasses" element={<UserLiveClasses currentUser={currentUser} />} />
            <Route path="/FileList" element={<FileList currentUser={currentUser} />} />
            <Route path="/UserTask" element={<UserTask currentUser={currentUser} />} />
            <Route path="/Courses" element={<Courses currentUser={currentUser} />} />
            <Route path="/Discussion" element={<Discussion currentUser={currentUser} />} />
            <Route path="/UserSetting" element={<UserSetting currentUser={currentUser} />} />
            <Route path="/UserProfile" element={<UserProfile currentUser={currentUser} />} />
            <Route path="/UserNotification" element={<UserNotification currentUser={currentUser} />} />
            <Route path="/Help" element={<Help currentUser={currentUser} />} />
            <Route path="/UserViewReports" element={<UserViewReports currentUser={currentUser} />} />
            <Route path="/Mytutor" element={<Mytutor currentUser={currentUser} />} />

            <Route path="/ViewVideo" element={<ViewVideo currentUser={currentUser} />} />
             <Route path="/ViewFile" element={<ViewFile currentUser={currentUser} />} />

             <Route path="/Quiz" element={<Quiz currentUser={currentUser} />} />
             <Route path="/Adminnotifications" element={<Quiz currentUser={Adminnotifications} />} />

             <Route path="/Quiz/Certificate" element={<Certificate currentUser={currentUser} />} />
             <Route path="/Quiz/Memo" element={<Memo currentUser={currentUser} />} />
            <Route path="/PaymentHistory" element={<PaymentHistory currentUser={currentUser} />} />




            <Route path="/UserAttendence" element={<UserAttendence currentUser={currentUser} />} />
            
            <Route path="/OtherCourses" element={<OtherCourses currentUser={currentUser} />} />
             
            <Route path="/Enroll" element={<Enroll currentUser={currentUser} />} />


          </>
        )}

       
        <Route path="/loginUser" element={<LoginUser handleLogin={handleLogin} />} />






              <Route path="/Academic" element={<Academic/>}></Route>
              <Route path="/Technical" element={<Technical/>}></Route>
              <Route path="/Professional" element={<Professional/>}></Route>
              <Route path="/Payment" element={<Payment/>}></Route>
              <Route path="/PaymentSubmit" element={<PaymentSubmit/>}></Route>
              <Route path="/SuccessPage" element={<SuccessPage/>}></Route>
              <Route path="/ForgotPassword" element={<ForgotPassword/>}></Route> 
              <Route path="/UserDashboard" element={<UserDashboard/>}></Route>
              <Route path="/UserLiveClasses" element={<UserLiveClasses/>}></Route>
              <Route path="/FileList" element={<FileList/>}></Route>
              <Route path="/UserTask" element={<UserTask/>}></Route>
              <Route path="/Courses" element={<Courses/>}></Route>
              <Route path="/Discussion" element={<Discussion/>}></Route>
              <Route path="/UserSetting" element={<UserSetting/>}></Route>
              <Route path="/UserNotification" element={<UserNotification/>}></Route>
              <Route path="/Notifications" element={<Notifications/>}></Route>
              <Route path="/UserProfile" element={<UserProfile/>}></Route>
              <Route path="/UserViewReports" element={<UserViewReports/>}></Route>
              <Route path="/Help" element={<Help/>}></Route> 
              <Route path="/TutorDashboard"element={<TutorDashboard/>}></Route> 
              <Route path="/LiveClass" element={<LiveClass/>}></Route>
              <Route path="/Task" element={<Task/>}></Route>
              <Route path="/MyDiscussion" element={<MyDiscussion/>}></Route>
              <Route path="/StudyMaterials" element={<StudyMaterials/>}></Route>
              <Route path="/TutorSetting" element={<TutorSetting/>}></Route>
              <Route path="/TutorProfile" element={<TutorProfile/>}></Route>
              <Route path="/TutorHelp" element={<TutorHelp/>}></Route>
              <Route path="/CreateReport" element={<CreateReport/>}></Route>
              <Route path="/AdminDashboard"element={<AdminDashboard/>}></Route>
              <Route path="/AddNewTutor" element={<AddNewTutor/>}></Route>
              <Route path="/AddNewCourse.js" element={<AddNewCourse/>}></Route>
                <Route path="/Announcement.js" element={<Announcement/>}></Route>
                <Route path="/Settings.js" element={<Settings/>}></Route>
                 <Route path="/Queries.js" element={<Queries/>}></Route>
                <Route path="/UserManagement.js" element={<UserManagement/>}></Route>
                <Route path="/AcadamicUserList.js" element={<AcadamicUserList/>}></Route>
               
                <Route path="/ProfessionalUserList.js" element={<ProfessionalUserList/>}></Route>
                <Route path="/ViewCourses.js" element={<ViewCourses/>}></Route>
                <Route path="/Tutors.js" element={<Tutors/>}></Route>
                <Route path="/AcadamicTutorList.js" element={<AcadamicTutorList/>}></Route>
                <Route path="/TechnicalTutorList.js" element={<TechnicalTutorList/>}></Route>
               <Route path="/ProfessionalTutorList.js" element={<ProfessionalTutorList/>}></Route>
               <Route path="HelpDeskComponent.js" element={<HelpDeskComponent/>}></Route>
               <Route path="/Notifications.js" element={<Notifications/>}></Route>
               <Route path="/ViewReports.js" element={<ViewReports/>}></Route>
               <Route path="/UserRegistration/LoginUser" element={<LoginUser/>}></Route>
             
              <Route path="/UserViewAttendence.js" element={<UserViewAttendence/>}></Route>
              <Route path="/CoursePage.js" Component={<CoursePage/>}></Route>
              <Route path="/UserRegistration" element={<UserRegistration/>}></Route> 
              <Route path="/Dropdown" element={<Dropdown/>}></Route>
              <Route path="/AddNewAdmin" element={<AddNewAdmin/>}></Route> 
              <Route path="/LoginTutor" element={<LoginTutor/>}></Route>
              <Route path="/SignIn" element={<SignIn/>}></Route>
             <Route path="/LoginAdmin" element={<LoginAdmin/>}></Route>
             <Route path="/UserList" element={<UserList/>}></Route>
             <Route path="/AddNewTutor/Settings" element={<Settings/>}></Route>
             <Route path="/Notification" element={<Notification/>}></Route>
             <Route path="/PaymentDetails" element={<PaymentDetails/>}></Route>
             <Route path="/TutorList" element={<TutorList/>}></Route>
             <Route path="/OtpValidation" element={<OtpValidation/>}></Route>
             <Route path="/OtpValidationOne" element={<OtpValidationOne/>}></Route>
             <Route path="/OtpValidationTwo" element={<OtpValidationTwo/>}></Route>
             <Route path="/MusicUserList" element={<MusicUserList/>}></Route>
             <Route path="/FitnessUserList" element={<FitnessUserList/>}></Route>
             <Route path="/CookingUserList" element={<CookingUserList/>}></Route>
             <Route path="/YogaUserList" element={<YogaUserList/>}> </Route>
             <Route path="/AWSUserList" element={<AWSUserList/>}></Route>
             <Route path="/PythonUserList" element={<PythonUserList/>}></Route>
             <Route path="/SQLUserList" element={<SQLUserList/>}></Route>
             <Route path="/CollegeUserList" element={<CollegeUserList/>}></Route>
             <Route path="/SchoolUserList" element={<SchoolUserList/>}></Route>
             <Route path="/JavaUserList" element={<JavaUserList/>}></Route>
             <Route path="/FitnessTutorList" element={<FitnessTutorList/>}></Route>
             <Route path="/CookingTutorList" element={<CookingTutorList/>}></Route>
             <Route path="/YogaTutorList" element={<YogaTutorList/>}></Route>
             <Route path="/MusicTutorList" element={<MusicTutorList/>}></Route>
             <Route path="/AWSTutorList" element={<AWSTutorList/>}></Route>
             <Route path="/PythonTutorList" element={<PythonTutorList/>}></Route>
             <Route path="/SQLTutorList" element={<SQLTutorList/>}></Route>
             <Route path="/CollegeTutorList" element={<CookingTutorList/>}></Route>
             <Route path="/SchoolTutorList" element={<SchoolTutorList/>}></Route>
             <Route path="/JavaTutorList" element={<JavaTutorList/>}></Route>
             <Route path="/CourseForm" element={<CourseForm/>}></Route>
             <Route path="/someComponent" element={<SomeComponent/>}></Route>
             <Route path="/AdminLandingPage/UserManagement" element={<UserManagement/>}></Route>
             <Route path="/AdminLandingPage/Tutors" element={<Tutors/>}></Route>
             <Route path="/AdminLandingPage/Courses" element={<Courses/>}></Route>
             <Route path="/AdminComponent.js" element={<AdminComponent/>}></Route>
             <Route path="/AdminLandingPage" element={<AdminLandingPage/>}></Route>
             {/* <Route path="/Quiz/Certificate" element={<Certificate/>}></Route> */}
             {/* <Route path="/ViewFile" element={<ViewFile/>}></Route>
             <Route path="/ViewVideo" element={<ViewVideo/>}></Route> */}
             <Route path="/CreateFile" element={<CreateFile/>}></Route>
             <Route path="/CreateVideo"element={<CreateVideo/>}></Route>
             {/* <Route path="/Quiz" element={<Quiz/>}></Route> */}
             {/* <Route path="/Quiz/Memo"element={<Memo/>}></Route> */}
             <Route path="/TestResult" element={<TestResult/>}></Route>
             <Route path="/UsersCount" element={<UsersCount/>}></Route>
             <Route path="/AdminLandingPage/AdminCourses" element={<AdminCourses/>}></Route>
             <Route path="/PieChartPage" element={<PieChartPage/>}></Route>
             <Route path="/Attendance" element={<Attendance/>}></Route>
             <Route path="/Pay" element={<Pay/>}></Route>
             <Route path="/CashTransactionDetails" element={<CashTransactionDetails/>}></Route>
             <Route path="/PayOne" element={<PayOne/>}></Route>
             <Route path="/Get" element={<Get/>}></Route>








      </Routes>
    </Router>
  );
}

export default App;

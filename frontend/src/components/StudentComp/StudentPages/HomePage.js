import React from 'react';
import '../StudentCss/HomePagecss.css';
import 'react-calendar/dist/Calendar.css'; // This imports the default styling for the calendar.
import Calendar from 'react-calendar';


function HomePage({ user,studyGroups, setStudyGroups,fetchStudyGroups }) {
  const fullName = user ? `${user.firstName} ${user.lastName}` : 'Student';
  
  function CurrentTime() {
    const [time, setTime] = React.useState(new Date()); // Initialize state with current date and time
  
    React.useEffect(() => {
      const timerId = setInterval(() => {
        setTime(new Date()); // Update time every minute
      }, 60000); // 60000 milliseconds = 1 minute
  
      return () => clearInterval(timerId); // Cleanup the interval on component unmount
    }, []);
  
    // Format the time as a string in 24-hour format with only hours and minutes
    const timeString = time.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false // Use 24-hour format
    });
  
    return <span>{timeString}</span>;
  }
  
  
  
  const currentDate = new Date();

  // Format the date as a string in the format of Month Day, Year (e.g., April 9, 2024)
  const dateString = currentDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });


  return (
    <div className="home-page-container">
      <div className="welcome-message">
        <h2>Welcome, {fullName}!</h2> What would you like to do today?
        <p>Today is {dateString}.</p>
        <p>The current time is <CurrentTime />.</p>
      </div>
      <div className="calendar-container">
        <Calendar />
      </div>
    </div>
  );  
}

export default HomePage;

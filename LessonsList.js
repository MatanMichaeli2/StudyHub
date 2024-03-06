import React from 'react';
import './LessonsList.css';

const LessonSquare = ({lesson}) => {
    const {lessonName, hasTeacher, teacherName} = lesson;
    const backgroundColor = hasTeacher ? '#66ccff' : '#ffcc00';

     return (
        <div className='lesson-square' style={{backgroundColor}}>
            <h3 className='lesson-name'>{lessonName}</h3>
            <p className='lesson-details'>{hasTeacher ? `With ${teacherName}` : 'Group lesson'}</p>
        </div>
     );
}

const LessonsList = () => {
    const lessons = [ 
        {id: 1, lessonName: 'Math', hasTeacher: true, teacherName: 'Mr. Smith' },
        {id: 2, lessonName: 'Science', hasTeacher: false}
    ];

    return (
        <div className='lessons-list'>
            <h2 className='lessons-list-title'>Registerd Lessons</h2>
            <div className='lesson-squares-container'> {lessons.map(lesson => (
                    <LessonSquare key={lesson.id} lesson={lesson} />
                ))}
            </div>
        </div>
    );

}

export default LessonsList;

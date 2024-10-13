import Course from "./Course"
function Courses({ courses, removeCourse }) {
  return (
    <div className="course-main-div">
      <div>
        <h2>My Courses</h2>
      </div>
      <div className="card-div">
        {
            courses.map((value, index) => {
                return <Course key = {index} course = {value} removeOneCourse={removeCourse}/>
            })
        }
      </div>
    </div>
  );
}

export default Courses;

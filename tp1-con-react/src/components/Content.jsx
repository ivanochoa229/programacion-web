import { StudentModule } from "./StudentModule";
import PropTypes from "prop-types";
import { StudentTable } from "./StudentTable";
import { StudentForm } from "./StudentForm";

export const Content = ({ currentContent, setContent }) => {
  return (
    <div className="content-main">
      {currentContent === "module" && <StudentModule />}
      {currentContent === "student-table" && (
        <StudentTable setContent={setContent} />
      )}
      {currentContent === "student-form" && (
        <StudentForm setContent={setContent} />
      )}
    </div>
  );
};

Content.propTypes = {
  currentContent: PropTypes.string.isRequired,
  setContent: PropTypes.func.isRequired,
};
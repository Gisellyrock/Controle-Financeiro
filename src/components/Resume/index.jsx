import * as C from './style';
import ResumeItem from '../ResumeItem';

const Resume = () => {
  return (
    <div>
      <C.Container>
        <ResumeItem />
        <ResumeItem />
        <ResumeItem />
      </C.Container>
    </div>
  );
};

export default Resume;

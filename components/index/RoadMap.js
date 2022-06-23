import { useSelector } from 'react-redux';

import sMap from '../../styles/index/RoadMap.module.css';

export const RoadMap = () => {
  const language = useSelector((state) => state.reducer.ctrlReducer.language);

  return (
    <div className={sMap.roadmap}>
      <h2>Roadmap</h2>

      <div className={sMap.descQ1}>
        <h3>2023 - Q1</h3>
        <p>Lorem Ipsum is simply dummy text of the printing ...</p>
      </div>

      <div className={sMap.descQ2}>
        <h3>2023 - Q2</h3>
        <p>Lorem Ipsum is simply dummy text of the printing ...</p>
      </div>

      <div className={sMap.descQ3}>
        <h3>2023 - Q3</h3>
        <p>Lorem Ipsum is simply dummy text of the printing ...</p>
      </div>

      <div className={sMap.descQ4}>
        <h3>2023 - Q4</h3>
        <p>Lorem Ipsum is simply dummy text of the printing ...</p>
      </div>

      <div className={sMap.chart}>
        <div className={sMap.round + ' ' + sMap.roundQ1}>
          <p>Q1</p>
        </div>
        <div className={sMap.line + ' ' + sMap.lineQ1}></div>
        {/* <div className={sMap.arrow + ' ' + sMap.right}></div> */}

        <div className={sMap.round + ' ' + sMap.roundQ2}>
          <p>Q2</p>
        </div>
        <div className={sMap.line + ' ' + sMap.lineQ2}></div>
        {/* <div className={sMap.arrow + ' ' + sMap.right}></div> */}

        <div className={sMap.round + ' ' + sMap.roundQ3}>
          <p>Q3</p>
        </div>
        <div className={sMap.line + ' ' + sMap.lineQ3}></div>
        {/* <div className={sMap.arrow + ' ' + sMap.right}></div> */}

        <div className={sMap.round + ' ' + sMap.roundQ4}>
          <p>Q4</p>
        </div>
        {/* <div className={sMap.arrow + ' ' + sMap.right}></div> */}
      </div>
    </div>
  );
};

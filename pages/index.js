import { MainBoard } from '../components/index/MainBoard';
import { Objectives } from '../components/index/Objectives';
import { Boxes } from '../components/index/Boxes';
import { RoadMap } from '../components/index/RoadMap';
// import { Partners } from '../components/index/Partners';
import { Community } from '../components/index/Community';
import { Contact } from '../components/index/Contact';

import sIndex from '../styles/index/Index.module.css';

export default function Home() {
  return (
    <div className={sIndex.app}>
      <MainBoard />
      <Objectives />
      <Boxes />
      <Community />
      <Contact />
      {/* <RoadMap /> */}
      {/* <Partners /> */}
    </div>
  );
}

import { SocialIcon } from 'react-social-icons';
import { useSelector } from 'react-redux';

import sCommunity from '../../styles/index/Community.module.css';

export const Community = () => {
  const language = useSelector((state) => state.reducer.ctrlReducer.language);

  return (
    <div className={sCommunity.openSourceCommunity}>
      {language === 'en' ? <h2>Community</h2> : <h2>Społeczność</h2>}
      <div className={sCommunity.container}>
        {/* <div className={sCommunity.item}>
          <SocialIcon url='https://twitter.com' />
        </div>
        <div className={sCommunity.item}>
          <SocialIcon url='https://discord.com' />
        </div> */}
        <div className={sCommunity.item}>
          <SocialIcon url='https://github.com/oncohub-lab' />
        </div>
        {/* <div className={sCommunity.item}>
          <SocialIcon url='https://linkedin.com' />
        </div> */}
      </div>
    </div>
  );
};

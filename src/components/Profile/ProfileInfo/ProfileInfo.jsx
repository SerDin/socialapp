import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div className={s.item}>
      <div>
        <img
          className={s.itemImg}
          alt='background'
          src="https://freeradio.com.ua/wp-content/uploads/2019/06/XcFkcg9SD6CtgACrEncW9owdMS9qnGz6UKKTdbqO-1024x705.jpeg"
        />
      </div>
      <div className={s.descriptionBlock}>
        <img
          className={s.itemImgAva}
          alt='logo'
          src="https://cdn.arstechnica.net/wp-content/uploads/2016/02/5718897981_10faa45ac3_b-640x624.jpg"
        />
        description
      </div>
    </div>
  );
};
export default ProfileInfo;

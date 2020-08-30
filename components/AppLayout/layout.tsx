import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router'
import Drawer from "components/Drawer/Drawer";
import { IoIosMenu, IoIosClose } from "react-icons/io";
import WebAppBar from "./Web/WebHeader";
import MobileNav from "./Mobile/MobileNav";
import { useLocale } from "contexts/language/language.provider";
import { colors } from "theme/colors";

type LayoutProps = {
  className?: string;
  deviceType: {
    mobile: boolean;
    tablet: boolean;
    desktop: boolean;
  };
};

const ApplicationLayout: React.FC<LayoutProps> = ({
  deviceType,
  children,
  className,
}) => {
  const [drawerBool, setDrawerBool] = useState<boolean>(false);
  
  const {isRtl} = useLocale();    
  const router = useRouter();

  const closeDrawer = () => {
    setDrawerBool(false);
  }

  return (
    <>
      {/* {(deviceType.mobile || deviceType.tablet) && (
        <Drawer
          open={drawerBool}
          placement={isRtl ? "right" : "left"}
          toggleHandler={() => setDrawerBool(!drawerBool)}
          drawerHandler={
            <IoIosMenu fontSize={"2.5rem"}  style={{ margin: "1.2rem", color : router.pathname == "/" ? colors.white : colors.darkBold }} />
          }
          closeButton={<IoIosClose fontSize={"3.5rem"} />}
          closeButtonStyle={{ margin: "0.8rem" }}
        >
          <MobileNav closeDrawer={closeDrawer}/>
        </Drawer>
      )}

      {deviceType.desktop && <WebAppBar />} */}
      <WebAppBar />

      {children}
    </>
  );
};

export { ApplicationLayout };

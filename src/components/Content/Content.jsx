'use client';
import React, { useEffect } from 'react';
import { GoogleTagManager } from '@next/third-parties/google';
import { PriceTotal as ContainerPriceTotal } from '../PriceTotal/Container/PriceTotal';
import { PriceTotal as ShedPriceTotal } from '../PriceTotal/Shed/PriceTotal';
import style from './content.module.scss';
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import { MobileModels as ContainerMobileModels } from '../Models/Mobile/Container/MobileModels';
import { MobileModels as ShedMobileModels } from '../Models/Mobile/Shed/MobileModels';
import MobileForm from '../MobileForm/MobileForm';
import { useMediaQuery } from 'react-responsive';
import ShedDataProvider from '@/utils/contexts/ShedDataProvider';
import ContainerDataProvider from '@/utils/contexts/ContainerDataProvider';
import ShedSidebar from '../Sidebar/ShedSidebar';
import ContainerSidebar from '../Sidebar/ContainerSidebar';
import { EXTERIOR, SUPPLIER_SLUGS } from '@/utils/constants/names/names';
import ContainerViewer from '../Viewer/ContainerViewer';
import ShedViewer from '../Viewer/ShedViewer';
import { OrderSummaryModal as ContainerOrderSummaryModal } from '../OrderSummaryModal/Container/OrderSummaryModal';
import { OrderSummaryModal as ShedOrderSummaryModal } from '../OrderSummaryModal/Shed/OrderSummaryModal';
import SessionLengthProvider from '@/utils/contexts/SessionLengthProvider';
import ShedSingleSelect from '../SingleSelect/ShedSingleSelect';

const Content = ({ data }) => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  
  useEffect(() => {
    if (data.supplier === SUPPLIER_SLUGS.CUSTOM_CUBES) {
      (function (c, l, a, r, i, t, y) {
        c[a] =
          c[a] ||
          function () {
            (c[a].q = c[a].q || []).push(arguments);
          };
        t = l.createElement(r);
        t.async = 1;
        t.src = 'https://www.clarity.ms/tag/' + i;
        y = l.getElementsByTagName(r)[0];
        y.parentNode.insertBefore(t, y);
      })(window, document, 'clarity', 'script', 'orh39zimxp');
    }
  }, [data.supplier]);

  return (
    <Theme>
      <GoogleTagManager gtmId='GTM-NVCQ2ZW3' />
      {data.supplier === SUPPLIER_SLUGS.COMPACT_COTTAGES ? (
        <ShedDataProvider data={data}>
          <div className={style.pageWrapper}>
            <div className={style.content}>
              {isMobile ? (
                <>
                  <ShedMobileModels />
                  <div className={style.mobileContainer}>
                    <div
                      style={{
                        fontFamily: 'Linotype',
                        fontSize: '24px',
                        fontWeight: '400',
                        color: 'black',
                        textAlign: 'center',
                        marginBottom: '1rem',
                      }}
                    >
                      Exterior Siding
                    </div>
                    <ShedSingleSelect type={EXTERIOR} />
                  </div>
                  <div className={style.mobileContainer}>
                    <MobileForm supplier={data.supplier} />
                  </div>
                </>
              ) : (
                <>
                  <ShedViewer />
                  <ShedSidebar />
                  <ShedPriceTotal />
                  <ShedOrderSummaryModal />
                </>
              )}
            </div>
          </div>
        </ShedDataProvider>
      ) : (
        <ContainerDataProvider data={data}>
          <div className={style.pageWrapper}>
            <div className={style.content}>
              {isMobile ? (
                <>
                  <ContainerMobileModels />
                  <div className={style.mobileContainer}>
                    <MobileForm supplier={data.supplier} />
                  </div>
                </>
              ) : (
                <>
                  <ContainerViewer />
                  <ContainerSidebar />
                  <ContainerPriceTotal />
                  <SessionLengthProvider>
                    <ContainerOrderSummaryModal />
                  </SessionLengthProvider>
                </>
              )}
            </div>
          </div>
        </ContainerDataProvider>
      )}
    </Theme>
  );
};

export default Content;

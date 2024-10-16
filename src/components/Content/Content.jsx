'use client';
import React from 'react';
import { GoogleTagManager } from '@next/third-parties/google';
import PriceTotal from '@/components/PriceTotal/PriceTotal';
import style from './content.module.scss';
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import { MobileModels } from '../Models/MobileModels';
import MobileForm from '../MobileForm/MobileForm';
import { useMediaQuery } from 'react-responsive';
import ShedDataProvider from '@/utils/contexts/ShedDataProvider';
import ContainerDataProvider from '@/utils/contexts/ContainerDataProvider';
import ShedSidebar from '../Sidebar/ShedSidebar';
import ContainerSidebar from '../Sidebar/ContainerSidebar';
import { SUPPLIER_SLUGS } from '@/utils/constants/names/names';
import ContainerViewer from '../Viewer/ContainerViewer';
import ShedViewer from '../Viewer/ShedViewer';
import { OrderSummaryModal as ContainerOrderSummaryModal } from '../OrderSummaryModal/Container/OrderSummaryModal';
import { OrderSummaryModal as ShedOrderSummaryModal } from '../OrderSummaryModal/Shed/OrderSummaryModal';

const Content = ({ data }) => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  return (
    <Theme>
      <GoogleTagManager gtmId='GTM-NVCQ2ZW3' />
      {data.supplier === SUPPLIER_SLUGS.COMPACT_COTTAGES ? (
        <ShedDataProvider data={data}>
          <div className={style.pageWrapper}>
            <div className={style.content}>
              <ShedViewer />
              <ShedSidebar />
              {/* <PriceTotal /> */}
              <ShedOrderSummaryModal />
            </div>
          </div>
        </ShedDataProvider>
      ) : (
        <ContainerDataProvider data={data}>
          <div className={style.pageWrapper}>
            <div className={style.content}>
              {isMobile ? (
                <>
                  <MobileModels />
                  <div className={style.mobileContainer}>
                    <MobileForm />
                  </div>
                </>
              ) : (
                <>
                  <ContainerViewer />
                  <ContainerSidebar />
                  <PriceTotal />
                  <ContainerOrderSummaryModal />
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

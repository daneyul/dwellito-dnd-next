'use client';
import React from 'react';
import { GoogleTagManager } from '@next/third-parties/google';
import Viewer from '@/components/Viewer/Viewer';
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
import OrderSummaryModal from '../OrderSummaryModal/OrderSummaryModal';

const Content = ({ data }) => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  return (
    <Theme>
      <GoogleTagManager gtmId='GTM-NVCQ2ZW3' />
      {data.supplier === SUPPLIER_SLUGS.COMPACT_COTTAGES ? (
        <ShedDataProvider data={data}>
          <div className={style.pageWrapper}>
            <div className={style.content}>
              {/* <Viewer /> */}
              <ShedSidebar />
              {/* <PriceTotal />
              <OrderSummaryModal /> */}
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
                  <Viewer />
                  <ContainerSidebar />
                  <PriceTotal />
                  <OrderSummaryModal />
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
